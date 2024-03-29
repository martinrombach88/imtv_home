// import { React, useState, useEffect } from "react";
// import axios from "axios";
import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { LangProvider } from "./components/Header/LangContext";
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
import Error from "./components/Error/Error.js";
import SubmittedForm from "./components/Contact/SubmittedForm";
import newsList from "./placeholderData/newsList.js";
import workList from "./placeholderData/workList.js";
import staffList from "./placeholderData/staffList.js";
import inProduction from "./placeholderData/inProduction.js";



function App() {

const loading = false;

  // const [data, setData] = useState({ work: null, news: null, staff: null });
 // const [loading, setLoading] = useState(false);
  // const fetchData = async () => {
  //   try {
  //     const newsRes = await axios(`https://imtv-api.herokuapp.com/getnews`);
  //     const staffRes = await axios(`https://imtv-api.herokuapp.com/getstaff`);
  //     const workRes = await axios(`https://imtv-api.herokuapp.com/getwork`);
  //     setData({
  //       work: workRes.data.workItems,
  //       news: newsRes.data.newsItems,
  //       staff: staffRes.data.staffItems,
  //     });
  //     setLoading(true);
  //   } catch (err) {
  //     return <Error />;
  //   }
  // };


  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <LangProvider>
      <Routes>
        <Route
          path="/"
          element={
            // <Home workList={data.work} newsList={data.news} loading={loading} />
            <Home workList={workList} inProduction={inProduction} newsList={newsList} loading={loading} />
          }
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
        <Route path="/error" element={<Error />} />
      </Routes>
    </LangProvider>
  );
}

export default App;
