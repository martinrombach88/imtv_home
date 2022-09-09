import Header from "../../components/Header/Header.js";
import Footer from "../Footer/Footer.js";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import News from "../../components/News/News.js";
import HomeSpinner from "./HomeSpinner";
import InProduction from "../../components/InProduction/InProduction";

function Home({ workList, newsList, loading }) {
  return (
    <>
      <div className="snapScroll">
        <Header headerStyle={"header"} />
        {loading ? <VideoSlider workList={workList} /> : <HomeSpinner />}
        {loading ? (
          <InProduction object={{ workList: workList, newsList: newsList }} />
        ) : (
          <HomeSpinner />
        )}
        {loading ? <News list={newsList} home={true} /> : <HomeSpinner />}
      </div>
      <Footer />
    </>
  );
}

export default Home;
