import { useState } from "react";

function App() {
  const [rows, setRows] = useState(5);

  const n = parseInt(rows) > 0 ? parseInt(rows) : 0;

  const starPattern = [];
  const numberPattern = [];
  const alphabetPattern = [];

  for (let i = 1; i <= n; i++) {
    let starRow = "";
    let numberRow = "";
    let alphabetRow = "";

    for (let j = 1; j <= i; j++) {
      starRow += "* ";
      numberRow += j + " ";
      alphabetRow += String.fromCharCode(65 + j - 1) + " ";
    }

    starPattern.push(starRow.trim());
    numberPattern.push(numberRow.trim());
    alphabetPattern.push(alphabetRow.trim());
  }

  function handleChange(event) {
    setRows(event.target.value);
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>React Pattern Printing</h1>

      <label>Enter number of rows (N): </label>
      <input
        type="number"
        value={rows}
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      />

      <h2>a) Star Pattern</h2>
      {starPattern.map((line, index) => (
        <div key={index}>{line}</div>
      ))}

      <h2>b) Number Pattern</h2>
      {numberPattern.map((line, index) => (
        <div key={index}>{line}</div>
      ))}

      <h2>c) Alphabet Pattern</h2>
      {alphabetPattern.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
}

export default App;