import "./style.scss";
import { IoMdShareAlt, IoMdSettings, IoMdVolumeHigh } from "react-icons/io";
import { PiSubtitles } from "react-icons/pi";
import { MdFullscreenExit } from "react-icons/md";
import { useEffect, useState } from "react";

const Landing = ({ onEnter }) => {
  const [isIntro, setIsIntro] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsIntro(true);
  }, []);

  return (
    <section className="landing">
      <section className={`landingCenter ${isIntro ? "show" : ""}`}>
        <span className="speech">{isActive ? "CLICK!" : "HOVER"}</span>
        <div
          className={`playIcon ${isActive ? "active" : ""}`}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          onClick={() => {
            if (isActive) {
              onEnter();
            }
          }}
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
