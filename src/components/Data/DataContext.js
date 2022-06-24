import React, { useContext } from "react";
import mediaList from "../mediaList.js";
const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const mList = mediaList;

  return (
    <DataContext.Provider mediaList={mList}>{children}</DataContext.Provider>
  );
}
