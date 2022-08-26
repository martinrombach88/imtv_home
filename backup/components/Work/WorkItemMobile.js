import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const WorkItemMobile = (work) => {
  const lang = useLang();
  let workItem = work.work;
  const navigate = useNavigate();
  const [itemActive, setItemActive] = useState(false);

  const toggleActive = () => {
    setItemActive((prevState) => !prevState);
  };
  const handleClickAway = () => {
    setItemActive(false);
  };

  function changeClass() {
    return `${itemActive ? "work__Details" : "work__Hide"}`;
  }

  function changeClassImage() {
    return `${itemActive ? "work__Img work__ImgDark" : "work__Img"}`;
  }

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <div className="work__MobileContainer" onClick={toggleActive}>
        <img
          className={changeClassImage()}
          src={workItem.imageTall}
          alt={lang ? workItem.titleKR : workItem.titleENG}
        ></img>
        <div className={changeClass()}>
          <h2>{lang ? workItem.titleKR : workItem.titleENG}</h2>
          <h5>{lang ? workItem.descriptionKR : workItem.descriptionENG}</h5>
          <ul>
            <li>
              {lang
                ? "방영채널: " + workItem.channels
                : "Available on: " + workItem.channels}
            </li>
            <li>
              {lang
                ? "방영일시: " + workItem.date
                : "Release Date: " + workItem.date}
            </li>
            <li>
              {lang
                ? "출연: " + workItem.starringKR
                : "Starring: " + workItem.starringENG}
            </li>
            <li>
              {lang
                ? "연출: " + workItem.directorKR + ", 극본:" + workItem.writerKR
                : "Directed by: " +
                  workItem.directorENG +
                  ", Written by:" +
                  workItem.writerENG}
            </li>
          </ul>
          <button
            className="btn btn-outline-light"
            onClick={() => navigate("/video", { state: workItem })}
          >
            <h5>{lang ? "예고편 보기" : "Watch Trailer"}</h5>
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default WorkItemMobile;
