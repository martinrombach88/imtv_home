import { useState } from "react";

import { useLang } from "../Header/LangContext";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const WorkItemMobile = (work) => {
  const lang = useLang();
  let workItem = work.work;
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
                ? "방영일시: " + workItem.releaseDate
                : "Release Date: " + workItem.releaseDate}
            </li>
            <li>
              {lang
                ? "출연: " + workItem.starringKR
                : "Starring: " + workItem.starringENG}
            </li>
            <li>
              {lang
                ? "연출: " + workItem.producerKR + ", 극본:" + workItem.writerKR
                : "Producer by: " +
                  workItem.producerENG +
                  ", Written by:" +
                  workItem.writerENG}
            </li>
          </ul>
          <a
            className="btn btn-outline-light"
            href={workItem.fullVid}
            target="_blank" rel="noreferrer"
          >
            <h5>{lang ? "예고편 보기" : "Watch Trailer"}</h5>
          </a>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default WorkItemMobile;
