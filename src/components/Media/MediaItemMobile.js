import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const MediaItemMobile = (media) => {
  const lang = useLang();
  let mediaItem = media.media;
  const navigate = useNavigate();
  const [itemActive, setItemActive] = useState(false);

  const toggleActive = () => {
    setItemActive((prevState) => !prevState);
  };
  const handleClickAway = () => {
    setItemActive(false);
  };

  function changeClass() {
    return `${itemActive ? "media__Details" : "media__Hide"}`;
  }

  function changeClassImage() {
    return `${itemActive ? "media__Img media__ImgDark" : "media__Img"}`;
  }

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <div className="media__MobileContainer" onClick={toggleActive}>
        <img
          className={changeClassImage()}
          src={mediaItem.mediaImgTall}
          alt={lang ? mediaItem.titleKR : mediaItem.titleENG}
        ></img>
        <div className={changeClass()}>
          <h2>{lang ? mediaItem.titleKR : mediaItem.titleENG}</h2>
          <h5>{lang ? mediaItem.descriptionKR : mediaItem.descriptionENG}</h5>
          <ul>
            <li>
              {lang
                ? "방영채널: " + mediaItem.channels
                : "Available on: " + mediaItem.channels}
            </li>
            <li>
              {lang
                ? "방영일시: " + mediaItem.date
                : "Release Date: " + mediaItem.date}
            </li>
            <li>
              {lang
                ? "출연: " + mediaItem.starringKR
                : "Starring: " + mediaItem.starringENG}
            </li>
            <li>
              {lang
                ? "연출: " +
                  mediaItem.directorKR +
                  ", 극본:" +
                  mediaItem.writerKR
                : "Directed by: " +
                  mediaItem.directorENG +
                  ", Written by:" +
                  mediaItem.writerENG}
            </li>
          </ul>
          <button
            className="btn btn-outline-light"
            onClick={() => navigate("/video", { state: mediaItem })}
          >
            <h5>{lang ? "예고편 보기" : "Watch Trailer"}</h5>
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default MediaItemMobile;
