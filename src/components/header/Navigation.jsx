import "./style.scss";

const Navigation = ({ menuOpen, setMenuOpen }) => {
  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    setMenuOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementTop,
      behavior: "smooth",
    });

    if (id === "project") {
      window.dispatchEvent(new Event("resetProjectSwiper"));
    }
  };

  return (
    <nav className={`navigation ${menuOpen ? "open" : ""}`}>
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
