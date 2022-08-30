import { useLang } from "../Header/LangContext";

const Footer = () => {
  const lang = useLang();

  return (
    <div className="footer">
      <p>Copyright IMTV All Rights Reserved</p>
      <p>
        {lang
          ? "오시는 길 안내 서울시 마포구 월드컵북로 434, 1202호 (상암동, 상암IT타워) 지번 : 상암동 1590 | (우) 03922. TEL. 02-780-0350"
          : "1202 ho, 434, Sangam IT Tower, Sangam-Dong, Mapo-Gu, Seoul, 03922. Tel: 02-780-0350"}
      </p>
    </div>
  );
};

export default Footer;
