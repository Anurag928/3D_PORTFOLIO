import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  linkLabel?: string;
  dashboardUrl?: string;
  notes?: string[];
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image-wrapper">
      <div className="work-image">
        <a
          className="work-image-in"
          href={props.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          data-cursor={"disable"}
        >
          {props.link && (
            <div className="work-link">
              <MdArrowOutward />
            </div>
          )}
          <img src={props.image} alt={props.alt} />
          {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
        </a>
      </div>
      {props.link && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "15px" }}>
          <a 
            href={props.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="live-preview-text"
            style={{ marginTop: 0, marginBottom: props.dashboardUrl ? "8px" : 0 }}
          >
            {props.linkLabel || "Live Preview ↗"}
          </a>
          {props.dashboardUrl && (
            <a 
              href={props.dashboardUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="live-preview-text"
              style={{ marginTop: 0 }}
            >
              View Power BI Dashboard ↗
            </a>
          )}
          {props.notes && props.notes.map((note, idx) => (
            <span key={idx} style={{ fontSize: "11px", color: "#888", marginTop: "8px", textAlign: "center", display: "block", maxWidth: "95%" }}>
              {note}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
