const DetailSection = ({ title, children }) => {
  return (
    <section className="detail_section">
      <div className="detail_title">
        <h3 className="title">{title}</h3>
        <div className="line"></div>
      </div>

      <article className="detail_content">{children}</article>
    </section>
  );
};

export default DetailSection;
