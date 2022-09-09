import aboutList from "./aboutList";
import Arrow from "../Arrow/Arrow";
import { useLang } from "../Header/LangContext";

const AboutOverview = () => {
  const lang = useLang();

  return (
    <div className="snapComponent">
      <div
        className="snapComponent__Content"
        style={{
          backgroundColor: aboutList[0].backgroundColor,
          color: aboutList[0].color,
        }}
      >
        <div className="snapComponent__TextSection">
          {lang ? (
            <h1>{aboutList[0].mainTitleKR}</h1>
          ) : (
            <h1>{aboutList[0].mainTitleENG}</h1>
          )}
          {lang ? (
            <h4>{aboutList[0].subTitleKR}</h4>
          ) : (
            <h4>{aboutList[0].subTitleENG}</h4>
          )}
        </div>
        <Arrow heightClass={"High"} />
      </div>
      <div className="snapComponent__ContentContainer">
        <img
          src={aboutList[0].image}
          alt={aboutList[0].mainTitleKR}
          className="snapComponent__Image"
        />
        <img
          src={aboutList[0].imageWide}
          alt={aboutList[0].mainTitleKR}
          className="snapComponent__ImageMobile"
        />
      </div>
    </div>
  );
};

export default AboutOverview;
