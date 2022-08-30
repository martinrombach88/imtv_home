import { useNavigate } from "react-router-dom";

const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <>
      <img
        className="header__logo"
        alt="logo"
        src="/imtv_home/assets/images/logo.png"
        onClick={() => navigate("/")}
      ></img>
    </>
  );
};

export default HeaderLogo;
