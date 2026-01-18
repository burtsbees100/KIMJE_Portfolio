const SkillList = ({ items }) => {
  return (
    <ul className="skill_list">
      {items.map((skill) => {
        const fileName = skill.replace(" ", "_");

        return (
          <li key={skill} className="skill_item">
            <div className="skill_icon">
              <img
                src={`/images/about-contact/skill/${fileName}.png`}
                alt={skill}
                className="skill_icon"
              />
            </div>

            <span className="skill_name">{skill}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillList;
