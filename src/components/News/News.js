import Header from "../Header/Header";
import Footer from "../Header/Footer";
import "./News.css";
import { useState } from "react";
import NewsCards from "./NewsCards";
import NewsPagination from "./NewsPagination";

const News = ({ list, home }) => {
  // console.log(list);
  //Pagination
  let posts = home ? 1 : 4;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  if (home) {
    return (
      <>
        <NewsCards
          currentPosts={currentPosts}
          home={home}
          pagination={
            <NewsPagination
              postsPerPage={postsPerPage}
              totalPosts={list.length}
              paginate={paginate}
            />
          }
        ></NewsCards>
      </>
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
};

export default News;
