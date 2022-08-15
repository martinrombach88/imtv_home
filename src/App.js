//For SQL
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
import { LangProvider } from "./components/Header/LangContext";
import "./components/SnapScroll/SnapScroll.css";
import SubmittedForm from "./components/Contact/SubmittedForm";
// import localWorkList from "./components/Work/localWorkList";
// import localStaffList from "./components/localStaffList";
// import localNewsList from "./components/localNewsList";

function App() {
  const [workObject, setWorkObject] = useState(null);
  const [newsObject, setNewsObject] = useState(null);
  const [staffObject, setStaffObject] = useState(null);

  useEffect(() => {
    const fetchNewsData = () => {
      fetch("http://localhost:8080/getnews")
        .then((response) => response.json())
        .then((result) => {
          setNewsObject(result);
        })
        .catch((error) => console.log("An error occurred"));
    };

    const fetchStaffData = () => {
      fetch("http://localhost:8080/getstaff")
        .then((response) => response.json())
        .then((result) => setStaffObject(result))
        .catch((error) => console.log("An error occurred"));
    };

    const fetchWorkData = () => {
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
  let newsList = [];
  if (newsObject) {
    for (let item of newsObject.newsItems) {
      let newItem = {
        id: item.id,
        bodyKR: item.bodyKR.split("~"),
        bodyENG: item.bodyENG.split("~"),
        dateENG: item.dateENG,
        dateKR: item.dateKR,
        image: item.image,
        imageLarge: item.imageLarge,
        titleENG: item.titleENG,
        titleKR: item.titleKR,
      };
      newsList.unshift(newItem);
    }
  } else {
    newsList = null;
  }
  let staffList = staffObject ? staffObject.staffItems : null;

  // let workList = localWorkList;
  // let newsList = localNewsList;
  // let staffList = localStaffList;

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
        <Route path="submitted" element={<SubmittedForm />} />
      </Routes>
    </LangProvider>
  );
}

export default App;
