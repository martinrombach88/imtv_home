import { useLang } from "./LangContext";
import Arrow from "../Arrow/Arrow.js";

const Footer = ({ arrow, fixed }) => {
  const lang = useLang();
  const footerCSS = fixed ? "footer footer__Fixed" : "footer";

  return arrow ? (
    <div className="footer__ArrowDiv">
      <Arrow className="footer__Arrow" home={true} />
    </div>
  ) : (
    <div className={footerCSS}>
      <p>Copyright IMTV All Rights Reserved</p>
      <p className="about__StaffWebDev">
        {lang
          ? "롬박 마틴은 개발한 웹사이트가 개발되었습니다."
          : "Website developed by Martin Rombach"}
      </p>
    </div>
  );
};

export default Footer;
