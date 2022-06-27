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
import localWorkList from "./components/Work/localWorkList.js";
// import localNewsList from "./components/localNewsList.js";
import localStaffList from "./components/localStaffList.js";
import production from "./components/production.json";
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
        .then((result) => setNewsObject(result))
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
  let newsList = newsObject ? newsObject.newsItems : null;
  let staffList = staffObject ? staffObject.staffItems : null;
  //Note: Make a txt file of the process.
  //1 get data, add to state
  //2 change the data in state into a prop (RESEARCH)
  //3 pass data to children
  // console.log(staffList);
  return (
    <LangProvider>
      <Routes>
        <Route path="/" element={<Home workList={workList} />} />
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
