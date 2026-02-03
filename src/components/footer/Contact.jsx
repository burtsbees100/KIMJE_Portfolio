import ProfileInfo from "../common/ProfileInfo";
import "./style.scss";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (e) => setIsMobile(e.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <section id="contact" className="contact">
      <div className="inner">
        <h4>Cont@ct</h4>
        <div className="info-wrap">
          <ProfileInfo
            icon="/images/about-contact/profilInfo_mail.png"
            text="kje_4227@naver.com"
          />
          <ProfileInfo
            icon="/images/about-contact/profilInfo_call.png"
            text="010.7141.4227"
          />
        </div>
      </div>
      <div className={`character ${isMobile ? "active" : ""}`}>
        <p>{isMobile ? "Thanks for visiting!" : "..."}</p>
        <img src="/images/about-contact/Pixelcharacter.png" alt="character" />
      </div>
    </section>
  );
};

export default Contact;
