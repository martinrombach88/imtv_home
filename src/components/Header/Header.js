import "./Header.css";
import HeaderWeb from "./HeaderWeb";
import HeaderMobile from "./HeaderMobile";

const Header = ({ headerStyle }) => {
  return (
    <>
      <HeaderWeb headerStyle={headerStyle} />
      <HeaderMobile headerStyle={headerStyle} />
    </>
  );
};

export default Header;
