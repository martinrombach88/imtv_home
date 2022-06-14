import { useLang, useLangUpdate } from "./LangContext";

const HeaderLang = () => {
  const lang = useLang();
  const toggleLang = useLangUpdate();
  let koText = lang ? "header__Active" : "header__Inactive";
  let enText = lang ? "header__Inactive" : "header__Active";

  return (
    <>
      <div className="header__Lang ">
        <div className={koText} onClick={lang ? null : toggleLang}>
          KO
        </div>
        <div className="header__LangDivider">|</div>

        <div className={enText} onClick={lang ? toggleLang : null}>
          EN
        </div>
      </div>
    </>
  );
};

export default HeaderLang;
