import { TiShoppingCart } from "react-icons/ti";
import "./Sidebar.css";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";

const Sidebar = ({ setFilters }) => {
  return (
    <aside>
      <h4 className="logo"><TiShoppingCart/></h4>
      <Category setFilters={setFilters} />
      <Price setFilters={setFilters} />
      <Colors setFilters={setFilters} />
    </aside>
  );
};

export default Sidebar;
