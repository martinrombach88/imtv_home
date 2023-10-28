import Header from "../../components/Header/Header.js";
import Footer from "../Footer/Footer.js";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import News from "../../components/News/News.js";
import HomeSpinner from "./HomeSpinner";
import InProduction from "../../components/InProduction/InProduction";
import ScrollExample from "../../components/Arrow/ScrollExample";
import { useRef } from "react";

function Home({ workList, inProduction, newsList, loading }) {
  const vidRef = useRef();
  const ipRef = useRef();
  const newsRef = useRef();

  const scrollToVid = () => {
    vidRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToIp = () => {
    ipRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNews = () => {
    newsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="snapScroll">
        <Header headerStyle={"header"} />
        <div ref={vidRef}>
          {loading ? (
            <HomeSpinner />
          ) : (
            <VideoSlider
              workList={workList}
              refFunction={scrollToIp}
              ref={ipRef}
            />
          )}
        </div>
        <div ref={ipRef}>
          {loading ? (
            <HomeSpinner />
          ) : (
            <InProduction
            object={{ workList: workList, newsList: newsList }}
            refFunction={scrollToNews}
            ref={newsRef}
          />
          )}
        </div>
        <div ref={newsRef}>
          {loading ? (
            <HomeSpinner />
          ) : (
            <News
            list={newsList}
            home={true}
            refFunction={scrollToVid}
            ref={vidRef}
          />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
