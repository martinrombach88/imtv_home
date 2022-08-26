import React, { useState, useContext } from "react";

const LangContext = React.createContext();
const LangUpdateContext = React.createContext();

export function useLang() {
  return useContext(LangContext);
}

export function useLangUpdate() {
  return useContext(LangUpdateContext);
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(true);

  const toggleLang = () => {
    setLang((prevLang) => !prevLang);
  };
  return (
    <LangContext.Provider value={lang}>
      <LangUpdateContext.Provider value={toggleLang}>
        {children}
      </LangUpdateContext.Provider>
    </LangContext.Provider>
  );
}
