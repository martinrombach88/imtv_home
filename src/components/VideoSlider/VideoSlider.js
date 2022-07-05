import "./VideoSlider.css";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import Footer from "../Header/Footer";
import Arrow from "../Arrow/Arrow";

//Failed to execute 'postMessage' on 'DOMWindow': The target origin provided
//('https://www.youtube.com') does not match the recipient window's origin
//('http://localhost:3000')

//The error is a little misleading. It actually has nothing to do with you being on localhost:9000. The problem was actually in the way you were using the youtube-api. When you declare the api as tag.src = "https://www.youtube.com/iframe_api"; in your code, you are telling youtube you want to use ssl. So, the change I suggested changed you to using ssl to request the videos. The error was just saying you were mixing ssl and non-ssl calls.
//35 upvotes - worth a test

const VideoSlider = ({ workList }) => {
  const lang = useLang();
  const navigate = useNavigate();
  const sliderVids = [];
  for (let work of workList) {
    if (work.clipVid != "") {
      sliderVids.push(work);
    }
  }

  return (
    <div className="carousel__Container">
      <Carousel>
        {sliderVids.map((sliderVid) => {
          return (
            <Carousel.Item key={sliderVid.id}>
              <ReactPlayer
                url={sliderVid.clipVid}
                playing={true}
                controls={false}
                loop={true}
                muted={true}
                height="125vh"
                width="100%"
                config={{
                  youtube: {
                    controls: 0,
                  },
                }}
              />
              <Carousel.Caption
                bsPrefix="carousel__Details"
                onClick={() => navigate("/video", { state: sliderVid })}
              >
                <h1>{lang ? sliderVid.titleKR : sliderVid.titleENG}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Arrow heightClass="Mid" />
    </div>
  );
};

export default VideoSlider;
