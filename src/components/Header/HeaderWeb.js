import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";
import HeaderLang from "./HeaderLang";

const HeaderWeb = ({ headerStyle }) => {
  const headerClass = `${headerStyle} header__Web`;
  return (
    <>
      <nav className={headerClass}>
        <div>
          <HeaderLogo />
        </div>

        <div className="header__Nav">
          <HeaderLinks />
        </div>

        <HeaderLang />
      </nav>
    </>
  );
};

export default HeaderWeb;
