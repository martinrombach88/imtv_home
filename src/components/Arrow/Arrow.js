import "./Arrow.css";
import { useRef, forwardRef } from "react";

const Arrow = forwardRef(({ scrollTo, heightClass, direction }, ref) => {
  let height = null;

  if (heightClass === "VeryLow") {
    height = "arrow arrow__VeryLow";
  } else if (heightClass === "High") {
    height = "arrow arrow__High";
  } else if (heightClass === "Mid") {
    height = "arrow arrow__Mid";
  } else if (heightClass === "MidRight") {
    height = "arrow arrow__MidRight";
  } else if (heightClass === "MidBottom") {
    height = "arrow arrow__MidBottom";
  }

  if (heightClass) {
    return (
      <div className={height + " arrow"} onClick={scrollTo}>
        {direction ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-caret-up"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        )}
      </div>
    );
  } else {
    return (
      <div className="arrow arrow__Low" onClick={scrollTo}>
        {direction ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-caret-up"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        )}
      </div>
    );
  }
});

export default Arrow;
