import React, { useContext, useState, useEffect } from "react";
import workList from "./workList.js";
import newsList from "../newsList.js";

const WorkAPI = () => {
  const [dataObject, setDataObject] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch("http://localhost:8080/work")
        // .then((response) => response.json())
        // .then((result) => setDataObject(result.results[0]))
        .then((response) => console.log(response))
        .catch((error) => console.log("An error occured"));
    };

    fetchData();
  }, []);
};

export default WorkAPI;
