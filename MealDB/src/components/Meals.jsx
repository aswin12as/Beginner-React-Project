import {useState,useEffect} from 'react';
import "../style.css";
const Meals = () => {
  const [Meals,setMeals] = useState([]);
  const [input, setInput]  = useState("");

  
  const handleSubmit = () => {
    if(!input.trim()){
      return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
      });

    setInput("");
  };

  return (
    <div className="container">
      <div className="search-container">
        <input type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter the meal..."
        />
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="meals-container">
        <div className="grid-container">
          {
            Meals.map((meal) => (
              <div className="meal-card" key={meal.idMeal}>
                <img src={`${meal.strMealThumb}`} />
                <div className="info-card">
                  <span className="meal-name">
                    {`${meal.strMeal}`}
                  </span>
                  <span className="meal-id">
                    {`#${meal.idMeal}`}
                  </span>
                </div>
              </div>
            ))
          }
        </div>
          {Meals.length === 0 && (
            <p style={{ textAlign: "center" }}>No meals found 🍽️</p>
          )}
      </div>
    </div>
  );
};

export default Meals;