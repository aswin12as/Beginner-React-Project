import "./Colors.css";

const Colors = ({ setFilters }) => {
  const handleChange = (e) => {
    setFilters(prev => ({
      ...prev,
      color: e.target.value
    }));
  };

  const colors = ["All", "black", "blue", "red", "green", "white"];

  return (
    <div className="colors">
      <h4 className="colors-title">Colors</h4>

      {colors.map(color => (
        <label className="radio-label" key={color}>
          <input
            type="radio"
            name="color"
            value={color}
            defaultChecked={color === "All"}
            onChange={handleChange}
          />
          <span className="custom-radio"></span>
          <span className="radio-text">{color}</span>
        </label>
      ))}
    </div>
  );
};

export default Colors;
