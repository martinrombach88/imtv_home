import aboutList from "./aboutList";
import Arrow from "../Arrow/Arrow";
import { useLang } from "../Header/LangContext";

const AboutOverviewMobile = () => {
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
      <Arrow heightClass={"Mid"} />
    </div>
  );
};

export default AboutOverviewMobile;
