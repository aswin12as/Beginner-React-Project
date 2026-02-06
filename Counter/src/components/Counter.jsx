import "../style.css";
import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);
    const handleReset = () => setCount(0);
  return (
    <div className="container">
        <h1 className="number">{count}</h1>

        <div className="btns-container">
            <button onClick={handleIncrement} className="increment">+</button >

            <button onClick={handleReset} className="reset">Reset</button >

            <button onClick={handleDecrement} className="decrement">-</button>
        </div>
    </div>
  )
}

export default Counter;