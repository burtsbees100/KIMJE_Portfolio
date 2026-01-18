import { GoArrowUpRight } from "react-icons/go";

const WebAppDetail = ({ data, onVideoReady }) => {
  const { title, category, modal } = data;
  const { tools, pages, links, preview, previewThumb } = modal;

  const linkMap = {
    github: { label: "Github" },
    proposal: { label: "기획서" },
    site: { label: "View Web Page" },
    figma: { label: "Figma" },
    proposal01: { label: "TRIPLE" },
    proposal02: { label: "McDelivery" },
  };

  const linkEntries = Object.entries(links || {}).map(([key, url]) => ({
    key,
    url,
    label: linkMap[key]?.label,
  }));

  return (
    <article className="webAppDetail">
      <div className="detailInfo">
        <div className="detailTitle">
          <span>{category}</span>
          <h4>{title}</h4>
        </div>
        <div className="detailDesc">
          <div className="detailItem">
            <div className="itemWrap">
              <h5>[Tools]</h5>
              <p>{tools}</p>
            </div>
            <div className="itemWrap">
              <h5>[Pages]</h5>
              <div className="pagesDesc">
                {pages.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="detailLinks">
            {linkEntries.length >= 2 && (
              <div className="linkRow rowTop">
                {linkEntries
                  .filter(
                    (link) => link.key !== "site" && link.key !== "proposal02",
                  )
                  .slice(0, 2)
                  .map((link) => (
                    <a
                      key={link.key}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`linkBtn ${
                        link.key === "proposal01" ? "is-proposal01" : ""
                      }`}
                    >
                      {link.label}
                      <GoArrowUpRight />
                    </a>
                  ))}
              </div>
            )}

            <div className="linkRow rowBottom">
              {(linkEntries.length === 1
                ? linkEntries
                : linkEntries.filter(
                    (link) => link.key === "site" || link.key === "proposal02",
                  )
              ).map((link) => (
                <a
                  key={link.key}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkBtn"
                >
                  {link.label}
                  <GoArrowUpRight />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="detailBody">
        <span className="bodyLine" />
        <div className="videoWrap">
          <video
            src={preview}
            autoPlay
            muted
            loop
            playsInline
            poster={previewThumb}
            onCanPlay={() => onVideoReady()}
          />
        </div>
      </div>
    </article>
  );
};

export default WebAppDetail;
