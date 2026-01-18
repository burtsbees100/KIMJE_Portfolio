import "./style.scss";

const ProjectCard = ({
  type = "web",
  thumbnail,
  category,
  title,
  teamType,
  desc,
}) => {
  return (
    <div className={`project_card ${type}`}>
      <div className="thumb">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="projectInfo">
        <span>{category}</span>
        <div className="projectTitle">
          <h4>{title}</h4>
          {teamType && <h5>{teamType}</h5>}
        </div>
        <div className="projectDesc">
          {desc.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
