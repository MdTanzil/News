/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DataContext } from "../context";

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("general");
  useEffect(() => {
    fetch(`http://localhost:8000/v2/top-headlines?category=${category}`)
      .then((res) => res.json())
      .then((data) => setData(data.articles));
  }, [category]);

  const val = { data, setCategory };
  return <DataContext.Provider value={val}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
