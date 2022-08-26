import { Link } from "react-router-dom";

const HeaderLinks = ({ mobile }) => {
  let linkClass = mobile ? "header__MobBtn" : "header__Btn";
  return (
    <>
      <Link to="/work" className={linkClass}>
        WORK
      </Link>
      <Link to="/news" className={linkClass}>
        NEWS
      </Link>
      <Link to="/about" className={linkClass}>
        ABOUT
      </Link>
      <Link to="/history" className={linkClass}>
        HISTORY
      </Link>
      <Link to="/contact" className={linkClass}>
        CONTACT
      </Link>
    </>
  );
};

export default HeaderLinks;
