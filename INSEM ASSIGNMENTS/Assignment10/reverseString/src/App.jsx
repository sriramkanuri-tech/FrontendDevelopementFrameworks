import  { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [text, setText] = useState("");

  function reverseNumber(value) {
    if (value === "") return "";
    const reversed = value.toString().split("").reverse().join("");
    return reversed;
  }

  function reverseString(value) {
    return value.split("").reverse().join("");
  }

  const reversedNum = reverseNumber(num);
  const reversedText = reverseString(text);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Reverse Number and String</h1>

      <h2>Reverse a Number</h2>
      <label>Enter a number: </label>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
      <p>Reversed Number: {reversedNum}</p>

      <h2>Reverse a String</h2>
      <label>Enter a string: </label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
      <p>Reversed String: {reversedText}</p>
    </div>
  );
}

export default App;