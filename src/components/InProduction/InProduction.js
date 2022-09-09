import { React, useState, useEffect } from "react";
import HomeSpinner from "../../components/Home/HomeSpinner";
import { useLang } from "../Header/LangContext";
import { useNavigate } from "react-router-dom";
import Arrow from "../Arrow/Arrow";

const InProduction = ({ object }) => {
  const lang = useLang();
  const navigate = useNavigate();
  const ipList = [];
  const [article, setArticle] = useState(null);
  const [styleObject, setStyleObject] = useState({});

  useEffect(() => {
    setArticle(ipList[1]);
    setStyleObject({
      backgroundColor: ipList[0].backgroundColor,
      color: ipList[0].color,
    });
  }, []);

  if (object) {
    for (let work of object.workList) {
      if (work.inProduction === "1") {
        ipList.push(work);
      }
    }

    for (let news of object.newsList) {
      if (news.inProduction === "1") {
        ipList.push(news);
      }
    }

    if (!object) {
      return <HomeSpinner />;
    } else {
      return (
        <div className="snapScroll">
          <div className="snapScroll__ContentContainer">
            <img
              src={ipList[0].image}
              alt={ipList[0].mainTitleKR}
              className="snapScroll__Image"
            />

            <img
              src={ipList[0].imageWide}
              alt={ipList[0].mainTitleKR}
              className="snapScroll__ImageMobile"
            />
          </div>

          <div
            className="snapScroll__Content"
            style={{
              color: styleObject.color,
              backgroundColor: styleObject.backgroundColor,
            }}
          >
            {lang ? <h5>생산 중</h5> : <h5>In Production</h5>}
            <div>
              {lang ? (
                <h1>{ipList[0].titleKR}</h1>
              ) : (
                <h3>{ipList[0].titleENG}</h3>
              )}

              {lang ? (
                <h4>{ipList[0].subTitleKR}</h4>
              ) : (
                <h5>{ipList[0].subTitleENG}</h5>
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
              >
                프로젝트 보기
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
                View Project
              </p>
            )}
            <Arrow heightClass={"MidBottom"} className="homeArrow" />
          </div>
        </div>
      );
    }
  }
};

export default InProduction;
