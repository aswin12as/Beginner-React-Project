import "./Recommended.css";


const Recommended = ({ setFilters }) => {
  const handleClick = (company) => {
    setFilters(prev => ({
      ...prev,company
    }));
  };

  return (
    <div className="recommended-container">
      <h4 className="recommended-title">Recommended</h4>
      <div className="recommended-group">
        <button onClick={() => handleClick("All")}>All Products</button>
        <button onClick={() => handleClick("Nike")}>Nike</button>
        <button onClick={() => handleClick("Adidas")}>Adidas</button>
        <button onClick={() => handleClick("Puma")}>Puma</button>
        <button onClick={() => handleClick("Vans")}>Vans</button>
      </div>
    </div>
  );
};

export default Recommended;
