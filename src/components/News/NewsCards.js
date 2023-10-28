import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import "./News.css";

const NewsCards = ({ currentPosts, home,  cType }) => {
  const lang = useLang();
  const navigate = useNavigate();
  const renderedCards = currentPosts.map((card, index) => {
    if (cType === "homeImage") {
      return (
        <img
          key={index}
          className="snapComponent__Image newsHome__Image snapComponent__ImageBlackBg"
          src={card.imageLarge}
          alt={lang ? card.titleKR : card.titleENG}
          onClick={() =>
            navigate("/news_article", { state: { article: card } })
          }
        />
      );
    } else if (cType === "homeText") {
      return (
        <div key={index}>
          <h4
            className="newsHome__Title newsHome__Link"
            onClick={() =>
              navigate("/news_article", { state: { article: card } })
            }
          >
            {lang ? card.titleKR : card.titleENG}
          </h4>
          <h6 className="newsHome__Date">
            {lang ? card.dateKR : card.dateENG}
          </h6>
        </div>
      );
    } else {
      return (
        <div
          className="news__Card"
          key={index}
          onClick={() =>
            navigate("/news_article", { state: { article: card } })
          }
        >
          <img
            className="news__Image "
            src={card.image ? card.image : card.imageLarge}
            alt={lang ? card.titleKR : card.titleENG}
          />
          <h6>{lang ? card.titleKR : card.titleENG}</h6>
          <h6> {lang ? card.dateKR : card.dateENG}</h6>
        </div>
      );
    }
  });

  return home ? (
    <>{renderedCards}</>
  ) : (
    <div className="news__Cards">{renderedCards}</div>
  );
};

export default NewsCards;
