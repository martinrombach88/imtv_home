import "./Loading.css";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  return (
    <div className="loading">
      <img
        className="header__logoLoading"
        alt="logo"
        src="/imtv_home/assets/images/logo.png"
      ></img>
      <h6 className="loading__Text">Loading</h6>
    </div>
  );
};

export default Loading;
