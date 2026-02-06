import { useState } from "react";
import data from "./database/data";
import Sidebar from "./Sidebar/Sidebar";
import Recommended from "./Recommended/Recommended";
import Products from "./products/Products";
import Navigation from "./Navigation/Nav";
import "./index.css";

const App = () => {
  const [filters, setFilters] = useState({
    company: "All",
    category: "All",
    color: "All",
    maxPrice: Infinity,
    search:"",
  });

  const filteredItems = data.filter(item =>
  (filters.company === "All" || item.company === filters.company) &&
  (filters.category === "All" || item.category === filters.category) &&
  (filters.color === "All" || item.color === filters.color) &&
  Number(item.newPrice) <= filters.maxPrice &&
  item.title.toLowerCase().includes(filters.search.toLowerCase())
);


  return (
    <div className="container">
      <div className="left-section">
        <Sidebar setFilters={setFilters} />
      </div>

      <div className="right-section">
        <Navigation setFilters={setFilters} />
        <Recommended setFilters={setFilters} />
        <Products items={filteredItems} />
      </div>
    </div>
  );
};

export default App;
