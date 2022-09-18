import aboutList from "./aboutList";
import Arrow from "../Arrow/Arrow";
import { useLang } from "../Header/LangContext";
import { useRef, forwardRef } from "react";

const AboutOverviewMobile = forwardRef(({ refFunction }, ref) => {
  const lang = useLang();

  return (
    <div
      className="snapComponent aboutOverview__Mobile"
      style={{
        backgroundColor: aboutList.backgroundColor,
        color: aboutList.color,
      }}
    >
      <div>
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
      <Arrow heightClass={"Mid"} scrollTo={refFunction} ref={ref} />
    </div>
  );
});

export default AboutOverviewMobile;
