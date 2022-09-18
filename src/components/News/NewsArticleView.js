import Header from "../Header/Header";
import "./News.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const NewsArticleView = () => {
  const state = useLocation();
  const navigate = useNavigate();
  const article = state.state.article;
  const lang = useLang();

  const body = lang ? (
    <>
      <p>{article.bodyKR1}</p>
      <p>{article.bodyKR2}</p>
      <p>{article.bodyKR3}</p>
      <p>{article.bodyKR4}</p>
      <p>{article.bodyKR5}</p>
      <p>{article.bodyKR6}</p>
      <p>{article.bodyKR7}</p>
    </>
  ) : (
    <>
      <p>{article.bodyENG1}</p>
      <p>{article.bodyENG2}</p>
      <p>{article.bodyENG3}</p>
      <p>{article.bodyENG4}</p>
      <p>{article.bodyENG5}</p>
      <p>{article.bodyENG6}</p>
      <p>{article.bodyENG7}</p>
    </>
  );
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
            {lang ? article.dateKR : "Written " + article.dateENG + "."}
          </div>
        </div>

        <p className="news__ArticleReturn" onClick={() => navigate(-1)}>
          {lang ? "뉴스로 돌아가기" : "Back to News"}
        </p>
      </div>
    </div>
  );
};

export default NewsArticleView;
