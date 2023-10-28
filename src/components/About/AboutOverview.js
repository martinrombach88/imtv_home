import aboutList from "./aboutList";
import Arrow from "../Arrow/Arrow";
import { useLang } from "../Header/LangContext";
import { forwardRef } from "react";

const AboutOverview = forwardRef(({ refFunction }, ref) => {
  const lang = useLang();

  return (
    <div className="snapComponent aboutOverview">
      <div
        className="snapComponent__Content"
        style={{
          backgroundColor: aboutList.backgroundColor,
          color: aboutList.color,
        }}
      >
        <div className="snapComponent__TextSection">
          {lang ? (
            <h1>{aboutList.mainTitleKR}</h1>
          ) : (
            <h1>{aboutList.mainTitleENG}</h1>
          )}
          {lang ? (
            <h4>{aboutList.subTitleKR}</h4>
          ) : (
            <h4>{aboutList.subTitleENG}</h4>
          )}
        </div>
        <Arrow heightClass={"High"} scrollTo={refFunction} ref={ref} />
      </div>
      <div className="snapComponent__ContentContainer">
        <img
          src={aboutList.image}
          alt={aboutList.mainTitleKR}
          className="snapComponent__Image"
        />
      </div>
    </div>
  );
});

export default AboutOverview;
