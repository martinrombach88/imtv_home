import HomeSpinner from "../../components/Home/HomeSpinner";
import { useLang } from "../Header/LangContext";
import { useNavigate } from "react-router-dom";
const InProduction = (newsList, workList, changeClass) => {
  const lang = useLang();
  const navigate = useNavigate();
  let workItem = null;
  let newsItem = null;
  console.log(newsList);
  console.log(workList);
  //   for (let wItem of workList) {
  //     if (wItem.inProduction === "1") {
  //       workItem = wItem;
  //     }
  //   }
  //   for (let nItem of newsList) {
  //     if (nItem.inProduction === "1") {
  //       newsItem = nItem;
  //     }
  //   }
  //   console.log("Work:");
  //   console.log(workItem);
  //   console.log("News:");
  //   console.log(newsItem);

  //className={changeClass ? changeClass : "snapScroll"}
  return (
    <div className="snapScroll">
      <div className="snapScroll__ContentContainer">
        <img
          //   src={object.image}
          //   alt={object.mainTitleKR}
          className="snapScroll__Image"
          //   onClick={
          //     imageLink
          //       ? () => navigate("/news_article", { state: { article } })
          //       : null
          //   }
        />
        <img
          //   src={object.imageWide}
          //   alt={object.mainTitleKR}
          className="snapScroll__ImageMobile"
          //   onClick={
          //     imageLink
          //       ? () => navigate("/news_article", { state: { article } })
          //       : null
          //   }
        />
      </div>
      <div className="snapScroll__Content">
        {/* //style={object} */}
        {lang ? <h5>생산 중</h5> : <h5>In Production</h5>}
        <div>
          {/* {lang ? <h1>{object.titleKR}</h1> : <h3>{object.titleENG}</h3>}

        {lang ? <h4>{object.subTitleKR}</h4> : <h5>{object.subTitleENG}</h5>} */}
        </div>
        {lang ? (
          <p
            style={{ fontSize: "1.2em" }}
            className="snapScroll__Btn"
            //   to="news_article"
            //   onClick={() => navigate("/news_article", { state: { article } })}
            //   state={{ lang }}
          >
            프로젝트 보기
          </p>
        ) : (
          <p
            style={{ fontSize: "1em" }}
            className="snapScroll__Btn"
            //   to="news_article"
            //   onClick={() => navigate("/news_article", { state: { article } })}
          >
            View Project
          </p>
        )}
        {/* <Arrow heightClass={"MidBottom"} className="homeArrow" /> */}
      </div>
    </div>
  );
};

export default InProduction;
