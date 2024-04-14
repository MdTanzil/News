/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DataContext } from "../context";

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("general");
  useEffect(() => {
    let apiUrl = `http://localhost:8000/v2/top-headlines?category=${category}`;

    // Conditionally update apiUrl based on searchText

    if (searchText.trim() !== "") {
      apiUrl = `http://localhost:8000/v2/search?q=${searchText}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setData(data.result));
    } else {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setData(data.articles));
    }
  }, [category, searchText]);

  const val = { data, setCategory, setSearchText };
  return <DataContext.Provider value={val}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
