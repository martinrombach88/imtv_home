// import { React, useState, useEffect, useRef, forwardRef } from "react";
import { React,forwardRef } from "react";
import HomeSpinner from "../../components/Home/HomeSpinner";
import { useLang } from "../Header/LangContext";
import { useNavigate } from "react-router-dom";
import Arrow from "../Arrow/Arrow";

const InProduction = forwardRef(({ object, refFunction }, ref) => {
  const lang = useLang();
  const navigate = useNavigate();
  const article = object.article;
  const styleObject = {backgroundColor: object.backgroundColor, color: object.color}

  // const ipList = [];
  // const [article, setArticle] = useState(null);

  // const [styleObject, setStyleObject] = useState({});


  // useEffect(() => {
  //   setArticle(object.article);
  //   setStyleObject({
  //     backgroundColor: object.backgroundColor,
  //     color: object.color,
  //   });
  // }, []);

  // if (object) {
  //   for (let work of object.workList) {
  //     if (work?.inProduction === "1") {
  //       ipList.push(work);
  //     }
  //   }

  //   for (let news of object.newsList) {
  //     if (news?.inProduction === "1") {
  //       ipList.push(news);
  //     }
  //   }

    if (!object) {
      return <HomeSpinner />;
    } else {
      return (
        <div className="snapComponent">
          <div className="snapComponent__ContentContainer">
            <img
              src={object?.image}
              alt={object?.mainTitleKR}
              className="snapComponent__Image snapComponent__ImageBlackBg"
            />

            <img
              src={object?.imageWide}
              alt={object?.mainTitleKR}
              className="snapComponent__ImageMobile snapComponent__ImageBlackBg"
            />
          </div>

          <div
            className="snapComponent__Content"
            style={{
              color: styleObject.color,
              backgroundColor: styleObject.backgroundColor,
            }}
          >
            {lang ? <h5>제작 중</h5> : <h5>In Production</h5>}
            <div>
              {lang ? (
                <h1>{object?.titleKR}</h1>
              ) : (
                <h3>{object?.titleENG}</h3>
              )}

              {lang ? (
                <h4>{object?.subTitleKR}</h4>
              ) : (
                <h5>{object?.subTitleENG}</h5>
              )}
            </div>
            {lang ? (
              <p
                style={{ fontSize: "1.2em" }}
                className="snapComponent__Btn"
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
                className="snapComponent__Btn"
                to="news_article"
                onClick={() =>
                  navigate("/news_article", { state: { article } })
                }
              >
                View Project
              </p>
            )}
            <Arrow
              heightClass={"MidBottom"}
              className="homeArrow"
              ref={ref}
              scrollTo={refFunction}
            />
          </div>
        </div>
      );
    }
  
});

export default InProduction;
