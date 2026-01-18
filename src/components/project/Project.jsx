import { webAppData } from "../../assets/data/webAppData";
import { videoData } from "../../assets/data/videoData";
import ProjectSection from "./ProjectSection";
import "./style.scss";

const Project = () => {
  return (
    <section id="project" className="project">
      <ProjectSection type="web" data={webAppData} title="WEB & APP" />
      <ProjectSection type="video" data={videoData} title="VIDEO" />
      <div className="divider" />
    </section>
  );
};

export default Project;
