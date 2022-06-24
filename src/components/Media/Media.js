import Header from "../Header/Header";
import "./Media.css";
import MediaItem from "./MediaItem";
import MediaItemMobile from "./MediaItemMobile";
const Media = ({ mediaList }) => {


  
  return (
    <div className="scroll">
      <Header headerStyle={"header initialPos"} />
      {mediaList.map((media, index) => {
        return <MediaItem media={media} key={index} />;
      })}
      {mediaList.map((media, index) => {
        return <MediaItemMobile media={media} key={index} />;
      })}
    </div>
  );
};

export default Media;
