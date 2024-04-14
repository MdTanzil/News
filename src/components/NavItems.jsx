import useData from "../hooks/useData";

const NavItems = () => {
  const { setCategory } = useData();
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a href="#" onClick={() => setCategory("general")}>
            General
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setCategory("business")}>
            Business
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setCategory("entertainment")}>
            Entertainment
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setCategory("health")}>
            Health
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setCategory("science")}>
            Science
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setCategory("sports")}>
            Sports
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setCategory("technology")}>
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
