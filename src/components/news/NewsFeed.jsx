import useData from "../../hooks/useData";
import { splitNews } from "../../util";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const NewsFeed = () => {
  const { data } = useData();

  const [leftData, rightData] = splitNews(data);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      <LeftSide data={leftData} />
      <RightSide data={rightData} />
    </div>
  );
};

export default NewsFeed;
