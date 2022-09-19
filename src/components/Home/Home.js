import Header from "../../components/Header/Header.js";
import Footer from "../Footer/Footer.js";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import News from "../../components/News/News.js";
import HomeSpinner from "./HomeSpinner";
import InProduction from "../../components/InProduction/InProduction";
import ScrollExample from "../../components/Arrow/ScrollExample";
import { useRef } from "react";

function Home({ workList, newsList, loading }) {
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
            <VideoSlider
              workList={workList}
              refFunction={scrollToIp}
              ref={ipRef}
            />
          ) : (
            <HomeSpinner />
          )}
        </div>
        <div ref={ipRef}>
          {loading ? (
            <InProduction
              object={{ workList: workList, newsList: newsList }}
              refFunction={scrollToNews}
              ref={newsRef}
            />
          ) : (
            <HomeSpinner />
          )}
        </div>
        <div ref={newsRef}>
          {loading ? (
            <News
              list={newsList}
              home={true}
              refFunction={scrollToVid}
              ref={vidRef}
            />
          ) : (
            <HomeSpinner />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
