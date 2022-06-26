import React, { useState, useEffect } from "react";

const WorkAPI = () => {
  const [dataObject, setDataObject] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch("http://localhost:8080/getwork")
        .then((response) => response.json())
        .then((result) => setDataObject(result))
        .catch((error) => console.log("An error occured"));
    };

    fetchData();
  }, []);
  return dataObject;
};

export default WorkAPI;
