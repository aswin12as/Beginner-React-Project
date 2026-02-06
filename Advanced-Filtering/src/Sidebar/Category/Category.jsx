import "./Category.css";

const Category = ({ setFilters }) => {
  const handleChange = (e) => {
    setFilters(prev => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const categories = ["All", "sneakers", "flats", "sandals", "heels"];

  return (
    <div className="category">
      <h4 className="category-title">Category</h4>

      {categories.map(cat => (
        <label className="radio-label" key={cat}>
          <input
            type="radio"
            name="category"
            value={cat}
            defaultChecked={cat === "All"}
            onChange={handleChange}
          />
          <span className="custom-radio"></span>
          <span className="radio-text">{cat}</span>
        </label>
      ))}
    </div>
  );
};

export default Category;
