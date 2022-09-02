import "./VideoSlider.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap";
import { useLang } from "../Header/LangContext";
import Arrow from "../Arrow/Arrow";
import { Link } from "react-router-dom";

//Failed to execute 'postMessage' on 'DOMWindow': The target origin provided
//('https://www.youtube.com') does not match the recipient window's origin
//('http://localhost:3000')

const VideoSlider = ({ workList }) => {
  const lang = useLang();
  const sliderVids = [];
  for (let work of workList) {
    if (work.clipVid !== "") {
      sliderVids.push(work);
    }
  }

  return (
    <div className="carousel__Container">
      <Carousel>
        {sliderVids.map((sliderVid) => {
          return (
            <Carousel.Item key={sliderVid.id}>
              <Link
                className="carousel__Link"
                to={{ pathname: "/video?url=" + sliderVid.fullVid }}
                target="_blank"
              >
                <ReactPlayer
                  url={sliderVid.clipVid}
                  playing={true}
                  controls={false}
                  loop={true}
                  muted={true}
                  height="125vh"
                  width="100%"
                  config={{
                    vimeo: {
                      controls: 0,
                    },
                  }}
                />

                <Carousel.Caption bsPrefix="carousel__Details">
                  <h1>{lang ? sliderVid.titleKR : sliderVid.titleENG}</h1>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Arrow heightClass="Mid" className="home__Arrow" />
    </div>
  );
};

export default VideoSlider;
