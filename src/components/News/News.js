import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./News.css";
import { useState, useRef, forwardRef } from "react";
import NewsCards from "./NewsCards";
import NewsPagination from "./NewsPagination";
import Arrow from "../Arrow/Arrow";

const News = forwardRef(({ list, home, refFunction }, ref) => {
  let posts = home ? 1 : 4;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  if (home) {
    return (
      <div className="snapComponent">
        <div className="snapComponent__Container">
          <NewsCards
            currentPosts={currentPosts}
            cType={"homeImage"}
            home={true}
          />
        </div>
        <div className="snapComponent__Container">
          <div className="snapComponent__Content">
            <h4 className="newsHome__Title">NEWS</h4>
            <NewsCards
              currentPosts={currentPosts}
              cType={"homeText"}
              home={true}
            />
            <NewsPagination
              postsPerPage={postsPerPage}
              totalPosts={list.length}
              paginate={paginate}
            />
          </div>
          <Arrow
            direction={true}
            heightClass="MidBottom"
            ref={ref}
            scrollTo={refFunction}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="scroll">
        <Header headerStyle={"header initialPos"} />
        <div className="news">
          <h1> LATEST NEWS</h1>
          <NewsCards currentPosts={currentPosts} />
          <NewsPagination
            postsPerPage={postsPerPage}
            totalPosts={list.length}
            paginate={paginate}
          />
        </div>
        <Footer />
      </div>
    );
  }
});

export default News;
