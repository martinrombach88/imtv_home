import "./VideoSlider.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap";
import { useLang } from "../Header/LangContext";
import Arrow from "../Arrow/Arrow";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const VideoSlider = forwardRef(({ workList, refFunction }, ref) => {
  const lang = useLang();
  const sliderVids = workList;
  // const sliderVids = [];
  
  // for (let work of workList) {
  //   if (work.clipVid !== "") {
  //     sliderVids.push(work);
  //   }
  // }


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
                    vimeo: { playerOptions: { playsinline: true } },
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
      <Arrow scrollTo={refFunction} ref={ref} heightClass={"Mid"} />
    </div>
  );
});

export default VideoSlider;
