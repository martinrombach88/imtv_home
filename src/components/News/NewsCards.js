import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import Arrow from "../Arrow/Arrow";
const NewsCards = ({ currentPosts, home, pagination }) => {
  const lang = useLang();
  const navigate = useNavigate();
  const renderedCards = currentPosts.map((card, index) => {
    if (home) {
      return (
        <div key={index} className="newsHome">
          <div
            className="newsHome__ImageContainer newsHome__CursorPointer"
            onClick={() =>
              navigate("/news_article", { state: { article: card } })
            }
          >
            <img
              className="newsHome__Image"
              src={card.imageLarge}
              alt={lang ? card.titleKR : card.titleENG}
            />
          </div>

          <div className="newsHome__ContentContainer">
            <h4>NEWS</h4>
            <div className="newsHome__Title">
              <h4
                onClick={() =>
                  navigate("/news_article", { state: { article: card } })
                }
              >
                {lang ? card.titleKR : card.titleENG}
              </h4>
              <h5>{lang ? card.dateKR : card.dateENG}</h5>
              <Arrow direction={true} heightClass={"Mid"} />
            </div>

            {pagination}
          </div>
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
            className="news__Image"
            src={card.image ? card.image : card.imageLarge}
            alt={lang ? card.titleKR : card.titleENG}
          />
          <div>
            <h6>
              {lang ? card.titleKR : card.titleENG}
              <br />
              {lang ? card.dateKR : card.dateENG}
            </h6>
          </div>
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
