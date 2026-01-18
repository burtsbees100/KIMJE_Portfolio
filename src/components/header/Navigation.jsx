import { useState } from "react";
import "./style.scss";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const top = window.pageYOffset + el.getBoundingClientRect().top;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    if (id === "project") {
      window.dispatchEvent(new Event("resetProjectSwiper"));
    }
  };

  return (
    <nav className="navigation">
      <ul>
        <li>
          <a href="#hero" onClick={scrollToSection("hero")}>
            HOME
          </a>
        </li>
        <li>
          <a href="#about" onClick={scrollToSection("about")}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="#project" onClick={scrollToSection("project")}>
            PROJECT
          </a>
        </li>
        <li>
          <a href="#contact" onClick={scrollToSection("contact")}>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
