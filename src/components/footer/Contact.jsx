import ProfileInfo from "../common/ProfileInfo";
import "./style.scss";

const Contact = () => {
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
      <div className="character">
        <p data-default="..." data-hover="Thanks for visiting!" />
        <img src="/images/about-contact/Pixelcharacter.png" alt="character" />
      </div>
    </section>
  );
};

export default Contact;
