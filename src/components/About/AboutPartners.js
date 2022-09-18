import Arrow from "../Arrow/Arrow";
import aboutList from "./aboutList";
import { useRef, forwardRef } from "react";

const AboutPartners = forwardRef(({ refFunction }, ref) => {
  const array = [];

  const generateImages = (num, urlArray) => {
    let url = "/imtv_home/assets/images/partners/";
    for (let i = 1; i <= num; i++) {
      urlArray.push(url + "p" + i + ".png");
    }
    const renderedImages = urlArray.map((url, index) => {
      return <img src={url} key={index} alt="partner" />;
    });
    return renderedImages;
  };

  const renderedImages = generateImages(41, array);

  return (
    <div className="snapComponent aboutPartners__Container">
      <div className="snapComponent__Container">
        <div className="about__Container">
          <div className="aboutPartners">
            <h1>PARTNERS</h1>
            <div className="aboutPartners__Cycler">
              <div>{renderedImages}</div>
            </div>
          </div>
          <Arrow heightClass={"MidBottom"} scrollTo={refFunction} ref={ref} />
        </div>
      </div>
    </div>
  );
});

export default AboutPartners;
