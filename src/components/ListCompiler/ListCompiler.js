import React, { useState, useEffect } from "react";
import mediaList from "../mediaList.js";
import newsList from "../newsList.js";

const APICaller = (list) => {
  const [dataObject, setDataObject] = useState(null);

  useEffect(() => {
    const fetchUser = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch("https://randomuser.me/api/")
        .then((response) => response.json())
        .then((result) => setUser(result.results[0]))
        .catch((error) => console.log("An error occured"));
    };

    fetchUser();
  }, []);
  return dataObject;
};

export default APICaller;
