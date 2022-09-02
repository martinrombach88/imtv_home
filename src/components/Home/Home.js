import { React } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../Footer/Footer.js";
import SnapScroll from "../../components/SnapScroll/SnapScroll.js";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import News from "../../components/News/News.js";
import "../../components/SnapScroll/SnapScroll.css";

function Home({ workList, list }) {
  let newsList = list ? list : null;
  let homeWorkList = workList ? workList : null;

  if ((newsList, homeWorkList)) {
    let inProductionMedia = null;
    let inProductionArticle = null;

    for (let item of homeWorkList) {
      if (item.inProduction === "1") {
        inProductionMedia = item;
      }
    }
    for (let item of newsList) {
      if (item.inProduction === "1") {
        inProductionArticle = item;
      }
    }

    return (
      <>
        <div className="scrollSnap">
          <Header headerStyle={"header"} />
          <VideoSlider workList={homeWorkList} />
          <SnapScroll
            hCase="showcaseLink"
            titles={{
              toptitleKR: "생산 중",
              toptitleENG: "In Production",
              bottomtitleKR: "프로젝트 보기",
              bottomtitleENG: "View Project",
            }}
            object={inProductionMedia}
            article={inProductionArticle}
          />
          <News list={newsList} home={true} />
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
