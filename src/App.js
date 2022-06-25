import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Header/Footer.js";
import SnapScroll from "./components/SnapScroll/SnapScroll.js";
import VideoSlider from "./components/VideoSlider/VideoSlider";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import Work from "./components/Work/Work.js";
import News from "./components/News/News.js";
import NewsArticleView from "./components/News/NewsArticleView.js";
import About from "./components/About/About.js";
import History from "./components/History/History.js";
import Contact from "./components/Contact/Contact.js";
import ContactProposal from "./components/Contact/ContactProposal.js";
import ContactInquiry from "./components/Contact/ContactInquiry.js";
import workList from "./components/Work/workList.js";
import newsList from "./components/newsList.js";
import staffList from "./components/staffList.js";
import production from "./components/production.json";
import { LangProvider } from "./components/Header/LangContext";
import "./components/SnapScroll/SnapScroll.css";

function Home() {
  return (
    <div className="scrollSnap">
      <Header headerStyle={"header"} />
      <VideoSlider workList={workList} />
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
        article={newsList[0]}
      />
      <SnapScroll
        hCase="showcaseComponent"
        component={<News list={newsList} home={true} />}
        image={true}
      />
      <Footer fixed={true} />
    </div>
  );
}

function App() {
  return (
    <LangProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work workList={workList} />} />
        <Route path="about" element={<About staffList={staffList} />} />
        <Route path="history" element={<History />} />
        <Route path="news" element={<News list={newsList} />} />
        <Route path="news_article" element={<NewsArticleView />} />
        <Route path="contact" element={<Contact />} />
        <Route path="proposal" element={<ContactProposal />} />
        <Route path="inquiry" element={<ContactInquiry />} />
        <Route path="video" element={<VideoPlayer />} />
      </Routes>
    </LangProvider>
  );
}

export default App;
