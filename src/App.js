import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.js";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer.js";
import Work from "./components/Work/Work.js";
import News from "./components/News/News.js";
import NewsArticleView from "./components/News/NewsArticleView.js";
import About from "./components/About/About.js";
import History from "./components/History/History.js";
import Contact from "./components/Contact/Contact.js";
import ContactProposal from "./components/Contact/ContactProposal.js";
import ContactInquiry from "./components/Contact/ContactInquiry.js";
import localNewsList from "./components/localNewsList.js";
import { LangProvider } from "./components/Header/LangContext";
import "./components/SnapScroll/SnapScroll.css";

function App() {
  //useEffect here - collect and add to state.
  const [workObject, setWorkObject] = useState(null);
  const [newsObject, setNewsObject] = useState(null);
  const [staffObject, setStaffObject] = useState(null);

  useEffect(() => {
    const fetchNewsData = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch("http://localhost:8080/getnews")
        .then((response) => response.json())
        .then((result) => {
          setNewsObject(result);
        })
        .catch((error) => console.log("An error occurred"));
    };

    const fetchStaffData = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch("http://localhost:8080/getstaff")
        .then((response) => response.json())
        .then((result) => setStaffObject(result))
        .catch((error) => console.log("An error occurred"));
    };

    const fetchWorkData = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch("http://localhost:8080/getwork")
        .then((response) => response.json())
        .then((result) => setWorkObject(result))
        .catch((error) => console.log("An error occurred"));
    };
    fetchNewsData();
    fetchStaffData();
    fetchWorkData();
  }, []);

  let workList = workObject ? workObject.workItems : null;
  let rawList = newsObject ? newsObject.newsItems : null;
  let newsList = {};
  if (rawList) {
    for (let i = 0; i < rawList.length; i++) {
      newsList[i] = {
        id: rawList[i].id,
        bodyKR: rawList[i].bodyKR.split("~"),
        bodyENG: rawList[i].bodyENG.split("~"),
        dateENG: rawList[i].dateENG,
        dateKR: rawList[i].dateKR,
        image: rawList[i].image,
        imageLarge: rawList[i].imageLarge,
        titleENG: rawList[i].titleENG,
        titleKR: rawList[i].titleKR,
      };
    }
  }
  console.log(newsList);
  let staffList = staffObject ? staffObject.staffItems : null;

  return (
    <LangProvider>
      <Routes>
        <Route
          path="/"
          element={<Home workList={workList} list={newsList} />}
        />
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
