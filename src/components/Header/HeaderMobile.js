import HeaderLinks from "./HeaderLinks";
import HeaderLogo from "./HeaderLogo";
import HeaderLang from "./HeaderLang";
import { useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";

const HeaderMobile = ({ headerStyle }) => {
  const headerClass = `${headerStyle} header__Mob`;
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  const handleClickAway = () => {
    setMenu(false);
  };

  const list = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
    >
      <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </svg>
  );

  const cross = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-x-lg"
      viewBox="0 0 16 16"
    >
      <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
      <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
    </svg>
  );

  return (
    <>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <nav className={headerClass}>
          <div className="header__MobNav">
            <button
              type="button"
              className="header__MobBtn"
              onClick={toggleMenu}
            >
              {list}
            </button>
            <div
              className={
                menu ? "header__MobLinksDisplay" : "header__MobLinksHide"
              }
            >
              <HeaderLinks mobile={true} />
              <button className="header__MobBtn" onClick={toggleMenu}>
                {cross}
              </button>
            </div>
          </div>
          <div>
            <HeaderLogo />
          </div>

          <HeaderLang />
        </nav>
      </ClickAwayListener>
    </>
  );
};

export default HeaderMobile;
