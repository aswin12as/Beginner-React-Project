import "./Price.css";

const Price = ({ setFilters }) => {
  const handleChange = (e) => {
    const value = e.target.value;

    setFilters(prev => ({
      ...prev,
      maxPrice: value === "All" ? Infinity : Number(value)
    }));
  };

  return (
    <div className="price">
      <h4 className="price-title">Price</h4>

      <label className="radio-label">
        <input type="radio" name="price" value="All" defaultChecked onChange={handleChange} />
        <span className="custom-radio"></span>
        <span className="radio-text">All</span>
      </label>

      <label className="radio-label">
        <input type="radio" name="price" value="50" onChange={handleChange} />
        <span className="custom-radio"></span>
        <span className="radio-text">$0 - $50</span>
      </label>

      <label className="radio-label">
        <input type="radio" name="price" value="100" onChange={handleChange} />
        <span className="custom-radio"></span>
        <span className="radio-text">$50 - $100</span>
      </label>

      <label className="radio-label">
        <input type="radio" name="price" value="150" onChange={handleChange} />
        <span className="custom-radio"></span>
        <span className="radio-text">$100 - $150</span>
      </label>
    </div>
  );
};

export default Price;
