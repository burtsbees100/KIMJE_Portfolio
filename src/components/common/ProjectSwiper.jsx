import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";
import "swiper/css";

const ProjectSwiper = ({ type, data, onProgress, swiperRef, onSelect }) => {
  return (
    <article className={`projectSwiper ${type}`}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView="auto"
        spaceBetween={40}
        slidesOffsetAfter={20}
        grabCursor={true}
        speed={800}
        resistanceRatio={0.6}
        threshold={10}
        onProgress={(swiper, progress) => {
          onProgress(progress);
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="projectSlideItem" onClick={() => onSelect(item)}>
              <ProjectCard type={type} {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default ProjectSwiper;
