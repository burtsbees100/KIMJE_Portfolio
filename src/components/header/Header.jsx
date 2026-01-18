import "./style.scss";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [afterProject, setAfterProject] = useState(false);

  useEffect(() => {
    const projectEl = document.getElementById("project");
    if (!projectEl) return;

    const headerHeight = 80;

    const onScroll = () => {
      const projectTop = projectEl.offsetTop;
      const isAfter = window.scrollY + headerHeight > projectTop;
      setAfterProject(isAfter);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={`header ${afterProject ? "afterProject" : ""}`}>
      <div className="inner">
        <h1>
          <img src="/images/header/headerIcon.png" alt="headerIcon" />
          KIMJE_v2.0
        </h1>
        <Navigation />
      </div>
    </section>
  );
};

export default Header;
