import { React, useState, useEffect } from "react";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Header/Footer.js";
import SnapScroll from "../../components/SnapScroll/SnapScroll.js";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import News from "../../components/News/News.js";
import localWorkList from "../../components/Work/localWorkList.js";
import localNewsList from "../../components/localNewsList.js";
import production from "../../components/production.json";
import "../../components/SnapScroll/SnapScroll.css";

function Home({ workList }) {
  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <VideoSlider workList={localWorkList} />
      <SnapScroll
        hCase="showcaseLink"
        titles={{
          toptitleKR: "생산 중",
          toptitleENG: "In Production",
          bottomtitleKR: "프로젝트 보기",
          bottomtitleENG: "View Project",
        }}
        image={true}
        object={production}
        article={localNewsList[0]}
      />
      <SnapScroll
        hCase="showcaseComponent"
        component={<News list={localNewsList} home={true} />}
        image={true}
      />
      <Footer fixed={true} />
    </div>
  );
}

export default Home;
