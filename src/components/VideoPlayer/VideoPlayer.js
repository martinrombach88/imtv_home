import ReactPlayer from "react-player";
import "./VideoPlayer.css";
import { useLocation } from "react-router-dom";
const VideoPlayer = () => {
  const search = useLocation().search;
  const url = new URLSearchParams(search).get("url");
  
  return (
    <div className="video__Bg">
      <ReactPlayer
        style={{ backgroundColor: "black", margin: 0, padding: 0 }}
        url={url}
        playing={true}
        controls={true}
        loop={false}
        muted={false}
        width="100%"
        height="99vh"
        config={{
          vimeo: {
            controls: 0,
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
