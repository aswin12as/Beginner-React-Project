import {useState} from 'react';
import "../style.css";
const Calculator = () => {
    const [inputValue, setInputValue] = useState("");

    const display = (value) => setInputValue(inputValue + value);
    const calculate = (inputValue) => setInputValue(eval(inputValue));
    const clearValue = () => setInputValue("");
  return (
    <form className="container">
        <input type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>

        <span className='clear' onClick={() => clearValue()}>
            c
        </span>

        <span onClick={() => display("\\")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>
            +
        </span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>

        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>


        <span className="submit" onClick={() => calculate(inputValue)}>=</span>
    </form>
  )
}

export default Calculator;