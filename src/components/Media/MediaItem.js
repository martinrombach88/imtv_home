import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../Header/LangContext";

const MediaItem = (media) => {
  let mediaItem = media.media;
  const navigate = useNavigate();
  const [itemHover, setItemHover] = useState(false);
  const lang = useLang();

  const imageEnter = () => {
    setItemHover(true);
  };

  const imageLeave = () => {
    setItemHover(false);
  };

  function changeClass() {
    return `${itemHover ? "media__Details" : "media__Hide"}`;
  }

  function changeClassImage() {
    return `${itemHover ? "media__Img media__ImgDark" : "media__Img"}`;
  }

  return (
    <div
      className="media__Container"
      onMouseEnter={imageEnter}
      onMouseLeave={imageLeave}
    >
      <img
        className={changeClassImage()}
        src={mediaItem.mediaImg}
        alt={lang ? mediaItem.titleKR : mediaItem.titleENG}
      ></img>
      <div className={changeClass()}>
        <h2>{lang ? mediaItem.titleKR : mediaItem.titleENG}</h2>
        <h5>{lang ? mediaItem.descriptionKR : mediaItem.descriptionENG}</h5>
        <ul>
          {mediaItem.channels ? (
            <li>
              {lang
                ? "방영채널: " + mediaItem.channels
                : "Available on: " + mediaItem.channels}
            </li>
          ) : null}
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
              ? "연출: " + mediaItem.directorKR + ", 극본:" + mediaItem.writerKR
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
  );
};

export default MediaItem;
