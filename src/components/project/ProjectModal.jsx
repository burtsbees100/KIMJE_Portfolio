import { useEffect } from "react";
import "./modalStyle.scss";

const ProjectModal = ({ projectTitle, children, onClose }) => {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.classList.add("modal-open");
    document.body.style.setProperty("overflow", "hidden", "important");

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.setProperty(
        "overflow",
        prevOverflow || "auto",
        "important",
      );
    };
  }, []);

  return (
    <section className="projectModal">
      <div className="projectModal_dim" onClick={onClose} />

      <div className="projectModal_contentWrap">
        <div className="projectModal_titleBar">
          <ul className="titleBarControls">
            <li onClick={onClose}></li>
            <li></li>
            <li></li>
          </ul>
          <p className="titleBarText">{projectTitle}</p>
        </div>
        <div className="projectModal_body">{children}</div>
      </div>
    </section>
  );
};

export default ProjectModal;
