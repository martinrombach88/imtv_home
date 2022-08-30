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

function App() {
  const [workObject, setWorkObject] = useState(null);
  const [newsObject, setNewsObject] = useState(null);
  const [staffObject, setStaffObject] = useState(null);

  useEffect(() => {
    const fetchNewsData = () => {
      fetch("https://imtv-api.herokuapp.com/getnews")
        .then((response) => response.json())
        .then((result) => {
          setNewsObject(result);
        })
        .catch((error) => console.log("An error occurred"));
    };

    const fetchStaffData = () => {
      fetch("https://imtv-api.herokuapp.com/getstaff")
        .then((response) => response.json())
        .then((result) => setStaffObject(result))
        .catch((error) => console.log("An error occurred"));
    };

    const fetchWorkData = () => {
      fetch("https://imtv-api.herokuapp.com/getwork")
        .then((response) => response.json())
        .then((result) => setWorkObject(result))
        .catch((error) => console.log("An error occurred"));
    };
    fetchNewsData();
    fetchStaffData();
    fetchWorkData();
  }, []);

  let workList = workObject ? workObject.workItems : null;
  let staffList = staffObject ? staffObject.staffItems : null;
  let newsList = newsObject ? newsObject.newsItems : null;

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
        <Route path="video" element={<VideoPlayer backUrl={"/"} />} />
        <Route path="submitted" element={<SubmittedForm />} />
      </Routes>
    </LangProvider>
  );
}

export default App;
