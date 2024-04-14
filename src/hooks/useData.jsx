import { useContext } from "react";
import { DataContext } from "../context";

const useData = () => {
  const { data, setCategory } = useContext(DataContext);
  console.log(data);
  return { data, setCategory };
};

export default useData;
