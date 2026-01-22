import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.scss";
import ProjectSwiper from "../common/ProjectSwiper";
import ProjectModal from "./ProjectModal";
import WebAppDetail from "./WebAppDetail";
import VideoDetail from "./VideoDetail";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = ({ type, data, title }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const titleRef = useRef(null);
  const barRef = useRef(null);
  const dotRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const resetSwiper = () => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(0, 0);
      }
    };

    window.addEventListener("resetProjectSwiper", resetSwiper);

    return () => {
      window.removeEventListener("resetProjectSwiper", resetSwiper);
    };
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(
      titleRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      },
    );

    let intervalId = setInterval(() => {
      const slides = document.querySelectorAll(`.${type} .swiper-slide`);

      if (slides.length > 0) {
        clearInterval(intervalId);

        gsap.fromTo(
          slides,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.3,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `.${type} .projectSwiper`,
              start: "top 85%",
              toggleActions: "restart none none none",
            },
          },
        );
      }
    }, 50);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const handleProgress = (progress) => {
    if (!dotRef.current || !barRef.current) return;
    const barWidth = barRef.current.offsetWidth;
    dotRef.current.style.left = `${barWidth * progress}px`;
  };

  const onMouseDown = (e) => {
    e.preventDefault();
    const bar = barRef.current;
    const rect = bar.getBoundingClientRect();

    const move = (e) => {
      const x = e.clientX - rect.left;
      const progress = Math.min(Math.max(x / rect.width, 0), 1);

      dotRef.current.style.left = `${rect.width * progress}px`;

      swiperRef.current.setProgress(progress, 0);
    };

    move(e);

    document.addEventListener("mousemove", move);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", move);
      },
      { once: true },
    );
  };

  return (
    <section className={`projectSection ${type}`}>
      <h2 ref={titleRef}>{title}</h2>
      <ProjectSwiper
        type={type}
        data={data}
        onProgress={handleProgress}
        swiperRef={swiperRef}
        onSelect={setSelectedProject}
      />

      {selectedProject && (
        <ProjectModal
          projectTitle={selectedProject.title}
          onClose={() => setSelectedProject(null)}
        >
          {type === "web" && <WebAppDetail data={selectedProject} />}
          {type === "video" && <VideoDetail data={selectedProject} />}
        </ProjectModal>
      )}

      <div className="inner">
        <div className="swiper-bar">
          <span className="bar-line" ref={barRef} />
          <span className="bar-dot" ref={dotRef} onMouseDown={onMouseDown} />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
