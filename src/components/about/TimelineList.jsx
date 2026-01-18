const TimelineList = ({ items }) => {
  return (
    <ul className="timeline_list">
      {items.map((item, idx) => (
        <li key={idx} className="timeline_item">
          <span className="period">{item.period}</span>
          <div className="info">
            <p className="name">{item.name}</p>
            <p className="desc">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TimelineList;
