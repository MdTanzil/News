import { useContext } from "react";
import { DataContext } from "../context";

const useNewsQuery = () => {
  const { data, setCategory, setSearchText } = useContext(DataContext);

  return { data, setCategory, setSearchText };
};

export default useNewsQuery;
