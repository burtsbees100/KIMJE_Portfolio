import FloatingPixel from "../common/FloatingPixel";
import "./style.scss";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isBoxHover, setIsBoxHover] = useState(false);
  const [hideBox, setHideBox] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 3800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHideBox(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = window.pageYOffset + el.getBoundingClientRect().top;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="hero">
      <div className="inner">
        <div className="heroTitle">
          <h3>Beyond the Screen,</h3>
          <div className="TitleSecond">
            <h3>Int</h3>
            <img src="/images/hero/titleUpdateIcon.png" alt="updateIcon" />
            <h3>the Web</h3>
          </div>
        </div>
        <div className="description">
          <p>시각적 감각을 웹에 녹여내는 신입 웹 퍼블리셔, 김정은입니다.</p>
          <p>2시간 분량의 영화를 2분 안에 설득력 있게 편집하듯</p>
          <p>
            방대한 정보와 콘텐츠를 사용자에게 한눈에 이해되도록
            구조화하겠습니다.
          </p>
          <p>경계를 허무는 디지털처럼 저도 제 가능성을 계속 넓혀갑니다.</p>
        </div>
      </div>
      <div
        className={`notification 
    ${isBoxHover ? "active" : ""} 
    ${hideBox ? "hide" : ""}
     ${isFirstLoad ? "first-load" : ""}`}
        onMouseEnter={() => setIsBoxHover(true)}
        onMouseLeave={() => setIsBoxHover(false)}
        onClick={() => scrollToSection("contact")}
      >
        {isBoxHover ? (
          <img src="/images/hero/pixel_call.png" alt="call" />
        ) : (
          <img src="/images/hero/pixel_bell.png" alt="bell" />
        )}
        <h5>{isBoxHover ? "CONTACT!" : "UPDATE..."}</h5>
      </div>
      <div className="floatingLayer">
        <FloatingPixel
          type="diamond"
          color="#FFEA00"
          top="12%"
          left="5%"
          duration="3s"
        />
        <FloatingPixel
          type="diamond"
          color="#F8159D"
          top="30%"
          left="92%"
          duration="5s"
        />
        <FloatingPixel
          type="diamond"
          color="#00FF1E"
          top="58%"
          left="27%"
          duration="6s"
        />
        <FloatingPixel
          type="diamond"
          color="#0015FF"
          top="75%"
          left="64%"
          duration="4s"
        />
        <FloatingPixel
          type="offsetUpLeft"
          color="#F0F0F0"
          top="18%"
          left="18%"
          duration="0s"
        />
        <FloatingPixel
          type="offsetUpLeft"
          color="#F0F0F0"
          top="60%"
          left="76%"
          duration="0s"
        />
        <FloatingPixel
          type="offsetUpRight"
          color="#F0F0F0"
          top="84%"
          left="40%"
          duration="0s"
        />
      </div>
    </section>
  );
};

export default Hero;
