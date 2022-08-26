import "./SnapScroll.css";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import Arrow from "../Arrow/Arrow";

const SnapScroll = ({
  hCase,
  image,
  article,
  component,
  object,
  titles,
  changeClass,
}) => {
  const lang = useLang();
  const navigate = useNavigate();
  let imageLink = null;

  const imageRender = object ? (
    <div className="snapScroll__ContentContainer">
      <img
        src={object.image}
        alt={object.mainTitleKR}
        className="snapScroll__Image"
        onClick={
          imageLink
            ? () => navigate("/news_article", { state: { article } })
            : null
        }
      />
      <img
        src={object.imageWide}
        alt={object.mainTitleKR}
        className="snapScroll__ImageMobile"
        onClick={
          imageLink
            ? () => navigate("/news_article", { state: { article } })
            : null
        }
      />
    </div>
  ) : null;

  switch (hCase) {
    case "showcaseLink":
      imageLink = true;
      return (
        <>
          <div className={changeClass ? changeClass : "snapScroll"}>
            {imageRender}
            <div className="snapScroll__Content" style={object}>
              {lang ? (
                <h5>{titles.toptitleKR}</h5>
              ) : (
                <h5>{titles.toptitleENG}</h5>
              )}

              <div>
                {lang ? <h1>{object.titleKR}</h1> : <h3>{object.titleENG}</h3>}

                {lang ? (
                  <h4>{object.subTitleKR}</h4>
                ) : (
                  <h5>{object.subTitleENG}</h5>
                )}
              </div>

              {lang ? (
                <p
                  style={{ fontSize: "1.2em" }}
                  className="snapScroll__Btn"
                  to="news_article"
                  onClick={() =>
                    navigate("/news_article", { state: { article } })
                  }
                  state={{ lang }}
                >
                  {titles.bottomtitleKR}
                </p>
              ) : (
                <p
                  style={{ fontSize: "1em" }}
                  className="snapScroll__Btn"
                  to="news_article"
                  onClick={() =>
                    navigate("/news_article", { state: { article } })
                  }
                >
                  {titles.bottomtitleENG}
                </p>
              )}

              <Arrow heightClass={"MidBottom"} />
            </div>
          </div>
        </>
      );

    case "showcaseText":
      imageLink = false;
      const textSection = (
        <div className="snapScroll__TextSection">
          {lang ? (
            <h1>{object.mainTitleKR}</h1>
          ) : (
            <h1>{object.mainTitleENG}</h1>
          )}

          {lang ? <h4>{object.subTitleKR}</h4> : <h4>{object.subTitleENG}</h4>}
        </div>
      );
      if (image) {
        return (
          <div className={changeClass ? changeClass : "snapScroll"}>
            <div className="snapScroll__Content" style={object}>
              {textSection}
              <Arrow heightClass={"High"} />
            </div>
            {image ? imageRender : null}
          </div>
        );
      } else {
        return (
          <div className={changeClass ? changeClass : "snapScroll"}>
            <div className="snapScroll__NoImage" style={object}>
              {textSection}
              <Arrow heightClass={"High"} />
            </div>
          </div>
        );
      }

    case "component":
      return (
        <div className={changeClass ? changeClass : "snapScroll"}>
          <div className="snapScroll__ComponentContainer" style={object}>
            {component}
          </div>
        </div>
      );

    case "showcaseComponent":
      imageLink = true;
      return (
        <div className={changeClass ? changeClass : "snapScroll"}>
          {imageRender}
          <div
            className={
              component
                ? "snapScroll__ComponentContainer"
                : "snapScroll__ContentContainer"
            }
            style={object}
          >
            {component}
          </div>
        </div>
      );

    default:
      console.log("Please select a case for your view.");
  }
};

export default SnapScroll;
