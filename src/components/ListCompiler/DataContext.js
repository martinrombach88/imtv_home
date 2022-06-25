import React, { useContext, useState, useEffect } from "react";
import mediaList from "../mediaList.js";
import newsList from "../newsList.js";

const context = React.createContext();

export function DataContext() {
  return useContext(context);
}

export function DataContextProvider({ children }) {
  const [dataObject, setDataObject] = useState(null);
  const data = {
    mediaList: mediaList,
    newsList: newsList,
  };
  setDataObject(data);
  // useEffect(() => {
  //   const fetchData = () => {
  //     // this would usually be your own backend, or localStorage
  //     // for example
  //     // fetch("https://randomuser.me/api/")
  //     //   .then((response) => response.json())
  //     //   .then((result) => setUser(result.results[0]))
  //     //   .catch((error) => console.log("An error occured"));
  //     // setDataObject(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <DataContext.Provider value={dataObject}>{children}</DataContext.Provider>
  );
}
