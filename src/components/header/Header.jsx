import "./style.scss";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [afterProject, setAfterProject] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const projectEl = document.getElementById("project");
    const headerEl = document.querySelector(".header");
    if (!projectEl || !headerEl) return;

    const onScroll = () => {
      const headerHeight = headerEl.offsetHeight;
      const projectTop =
        projectEl.getBoundingClientRect().top + window.pageYOffset;
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

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </section>
  );
};

export default Header;
