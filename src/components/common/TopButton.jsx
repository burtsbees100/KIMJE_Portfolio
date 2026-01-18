import "./style.scss";
import { useState, useEffect } from "react";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`top-btn ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <img src="/images/top-btn.png" alt="TopButton" />
    </button>
  );
};

export default TopButton;
