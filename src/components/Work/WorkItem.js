import { useState } from "react";
import { useLang } from "../Header/LangContext";
import { Link } from "react-router-dom";

const WorkItem = ({work}) => {
  let workItem = work;
  console.log(workItem)

  const [itemHover, setItemHover] = useState(false);
  const lang = useLang();

  const imageEnter = () => {
    setItemHover(true);
  };

  const imageLeave = () => {
    setItemHover(false);
  };

  function changeClass() {
    return `${itemHover ? "work__Details" : "work__Hide"}`;
  }

  function changeClassImage() {
    return `${itemHover ? "work__Img work__ImgDark" : "work__Img"}`;
  }

  return (
    <div
      className="work__Container"
      onMouseEnter={imageEnter}
      onMouseLeave={imageLeave}
    >
      <img
        className={changeClassImage()}
        src={workItem?.mediaImg}
        alt={lang ? workItem.titleKR : workItem.titleENG}
      ></img>
      
      <div className={changeClass()}>
        
        <h5>{lang ? workItem.descriptionKR : workItem.descriptionENG}</h5>
        <ul>
          {workItem.channels ? (
            <li>
              {lang
                ? "방영채널: " + workItem.channels
                : "Available on: " + workItem.channels}
            </li>
          ) : null}
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
              ? "연출: " + workItem.directorKR + ", 극본: " + workItem.writerKR
              : "Directed by: " +
                workItem.directorENG +
                ", Written by:" +
                workItem.writerENG}
          </li>
        </ul>
        <Link
          className="btn btn-outline-light"
          to={{ pathname: "/video?url=" + workItem.fullVid }}
          target="_blank"
        >
          <h5>{lang ? "예고편 보기" : "Watch Trailer"}</h5>
        </Link>
      </div>
    </div>
  );
};

export default WorkItem;
