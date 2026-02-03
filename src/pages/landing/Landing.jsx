import "./style.scss";
import { IoMdShareAlt, IoMdSettings, IoMdVolumeHigh } from "react-icons/io";
import { PiSubtitles } from "react-icons/pi";
import { MdFullscreenExit } from "react-icons/md";
import { useEffect, useState } from "react";

const Landing = ({ onEnter }) => {
  const [isIntro, setIsIntro] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setIsIntro(true);
    if (isMobile) setIsActive(true);
  }, [isMobile]);

  return (
    <section className="landing">
      <section className={`landingCenter ${isIntro ? "show" : ""}`}>
        <span className="speech">
          {isMobile ? "TAP!" : isActive ? "CLICK!" : "HOVER"}
        </span>
        <div
          className={`playIcon ${isActive ? "active" : ""}`}
          onMouseEnter={() => {
            if (!isMobile) setIsActive(true);
          }}
          onMouseLeave={() => {
            if (!isMobile) setIsActive(false);
          }}
          onClick={onEnter}
        >
          {isActive ? (
            <img src="/images/landing/updateIcon.png" alt="update" />
          ) : (
            <img src="/images/landing/replayIcon.png" alt="replay" />
          )}
        </div>
        <p>{isActive ? "UPDATE ..." : "REPLAY?"}</p>
        <div className={`loadingBar ${isActive ? "show" : ""}`}>
          <div className="loadingBarFill"></div>
        </div>
      </section>

      <section className="playbarFrame">
        <section className={`playbarTop ${isIntro ? "show" : ""}`}>
          <div className="playTitle">
            <h4>KIMJE_v1.0</h4>
          </div>
          <div className="playActions">
            <IoMdShareAlt />
            <IoMdSettings />
          </div>
        </section>
        <section className={`playbarBottom ${isIntro ? "show" : ""}`}>
          <div className="playTrack"></div>
          <div className="playControls">
            <div className="playControlsLeft">
              <IoMdVolumeHigh />
              <span>01:32 / 01:33</span>
            </div>
            <div className="playControlsRight">
              <PiSubtitles />
              <MdFullscreenExit />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Landing;
