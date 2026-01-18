import {
  educationData,
  experienceData,
  skillData,
} from "../../assets/data/aboutData";
import "./style.scss";
import ProfileInfo from "../common/ProfileInfo";
import DetailSection from "./DetailSection";
import SkillList from "./SkillList";
import TimelineList from "./TimelineList";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const titleRef = useRef(null);
  const profileRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current.children, {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });

      gsap.from(profileRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });

      gsap.from(detailsRef.current.children, {
        x: 50,
        opacity: 0,
        stagger: 0.4,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: detailsRef.current,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about_title" ref={titleRef}>
        <h2>ABOUT</h2>
        <h2>ME</h2>
      </div>
      <div className="inner">
        <article className="about_profile" ref={profileRef}>
          <div className="profile_pic">
            <div className="picture">
              <img src="/images/about-contact/headshot.png" alt="headshot" />
              <span className="pic_element">
                <img
                  src="/images/about-contact/pic_element01.png"
                  alt="element"
                />
              </span>
              <span className="pic_element">
                <img
                  src="/images/about-contact/pic_element02.png"
                  alt="element"
                />
              </span>
              <span className="pic_element diamond">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="pixel" />
                ))}
              </span>
              <span className="pic_element diamond">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="pixel" />
                ))}
              </span>
            </div>
          </div>
          <div className="profile_name">
            <p className="name_ko">김정은</p>
            <p className="name_en">KimJeongEun</p>
          </div>
          <div className="birth_date">
            <ProfileInfo
              icon="/images/about-contact/profilInfo_birth.png"
              text="1994년 09월 12일"
            />
          </div>
          <div className="short_bio">
            <h5>Cut → Code</h5>
            <p>“장면을 잘라 흐름을 만들던 저는,</p>
            <p>이제 코드를 연결해 경험을 만듭니다.”</p>
          </div>
        </article>
        <article className="about_details" ref={detailsRef}>
          <DetailSection title="Education">
            <TimelineList items={educationData} />
          </DetailSection>
          <DetailSection title="Experience">
            <TimelineList items={experienceData} />
          </DetailSection>
          <DetailSection title="SKILL">
            <SkillList items={skillData} />
          </DetailSection>
        </article>
      </div>
    </section>
  );
};

export default About;
