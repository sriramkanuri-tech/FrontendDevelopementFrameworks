import  { useState } from "react";

function App() {
  const [n, setN] = useState("");
  const [sum, setSum] = useState(0);

  function handleChange(event) {
    const value = event.target.value;
    setN(value);

    if (value === "") {
      setSum(0);
    } else {
      const num = parseInt(value);
      if (!isNaN(num) && num > 0) {
        const result = (num * (num + 1)) / 2;
        setSum(result);
      } else {
        setSum(0);
      }
    }
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Sum of N Numbers</h1>
      <label>Enter N:</label>
      <input
        type="number"
        value={n}
        onChange={handleChange}
        style={{ marginLeft: "10px" }}
      />
      <p>Sum of first {n === "" ? 0 : n} natural numbers is: {sum}</p>
    </div>
  );
}

export default App;