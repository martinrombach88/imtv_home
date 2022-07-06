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
    // let newsArticle = newsList ? newsList[0] : null;
    let inProduction = null;
    for (let item of homeWorkList) {
      if (item.inProduction === "1") {
        inProduction = item;
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
            object={inProduction}
            article={newsList[0]}
          />
          <SnapScroll
            hCase="showcaseComponent"
            component={<News list={newsList} home={true} />}
            image={true}
          />
        </div>
        <Footer fixed={true} />
      </>
    );
  } else {
    return <>imtv</>;
  }
}

export default Home;
