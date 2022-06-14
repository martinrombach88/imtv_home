import Header from "../Header/Header";
import "./News.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const NewsArticleView = () => {
  const state = useLocation();
  const navigate = useNavigate();
  const article = state.state.article;
  const lang = useLang();

  const body = lang
    ? article.bodyKR.map((newsParagraph, index) => {
        return <p key={index}>{newsParagraph}</p>;
      })
    : article.bodyENG.map((newsParagraph, index) => {
        return <p key={index}>{newsParagraph}</p>;
      });
  return (
    <div className="scroll">
      <Header headerStyle={"header initialPos"} />
      <div className="news news__Article">
        <h3>{lang ? article.titleKR : article.titleENG}</h3>
        <img
          src={article.imageLarge}
          alt={lang ? article.titleKR : article.titleENG}
        />

        <div className="news__ArticleBody">
          {body}
          <div>
            {lang ? article.dateKR + " 썼습니다" : "Written " + article.dateENG}
            .
          </div>
        </div>

        <p className="news__ArticleReturn" onClick={() => navigate(-1)}>
          {lang ? "뉴스 돌아가" : "Back to News"}
        </p>
      </div>
    </div>
  );
};

export default NewsArticleView;
