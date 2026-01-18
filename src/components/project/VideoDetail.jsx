const VideoDetail = ({ data }) => {
  const { title, category, modal } = data;
  const { descDetail, preview } = modal;

  return (
    <article className="videoDetail">
      <div className="detailInfo">
        <div className="detailTitle">
          <span>{category}</span>
          <h4>{title}</h4>
        </div>
        <div className="detailDesc">
          {descDetail.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      </div>

      <div className="detailBody">
        <span className="bodyLine" />
        <div className="youtubeWrap">
          <iframe
            src={preview}
            title="YouTube video player"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </article>
  );
};

export default VideoDetail;
