import  { useState } from "react";

function App() {
  const [size, setSize] = useState(2);
  const n = parseInt(size) > 0 ? parseInt(size) : 0;

  const [matrixA, setMatrixA] = useState([[0, 0], [0, 0]]);
  const [matrixB, setMatrixB] = useState([[0, 0], [0, 0]]);

  function handleSizeChange(event) {
    const value = event.target.value;
    setSize(value);
    const newN = parseInt(value);

    if (!isNaN(newN) && newN > 0) {
      const emptyA = Array.from({ length: newN }, () =>
        Array.from({ length: newN }, () => 0)
      );
      const emptyB = Array.from({ length: newN }, () =>
        Array.from({ length: newN }, () => 0)
      );
      setMatrixA(emptyA);
      setMatrixB(emptyB);
    } else {
      setMatrixA([]);
      setMatrixB([]);
    }
  }

  function handleChangeA(i, j, value) {
    const newMatrix = matrixA.map((row) => row.slice());
    newMatrix[i][j] = value;
    setMatrixA(newMatrix);
  }

  function handleChangeB(i, j, value) {
    const newMatrix = matrixB.map((row) => row.slice());
    newMatrix[i][j] = value;
    setMatrixB(newMatrix);
  }

  const sumMatrix =
    n > 0
      ? Array.from({ length: n }, (_, i) =>
          Array.from({ length: n }, (_, j) => {
            const aVal = Number(matrixA[i]?.[j] || 0);
            const bVal = Number(matrixB[i]?.[j] || 0);
            return aVal + bVal;
          })
        )
      : [];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Sum of Two Matrices</h1>

      <label>Enter matrix size (n for n × n): </label>
      <input
        type="number"
        value={size}
        onChange={handleSizeChange}
        style={{ marginLeft: "10px" }}
      />

      {n > 0 && (
        <>
          <h2>Matrix A</h2>
          {matrixA.map((row, i) => (
            <div key={"A-row-" + i}>
              {row.map((val, j) => (
                <input
                  key={"A-" + i + "-" + j}
                  type="number"
                  value={val}
                  onChange={(e) => handleChangeA(i, j, e.target.value)}
                  style={{ width: "60px", margin: "2px" }}
                />
              ))}
            </div>
          ))}

          <h2>Matrix B</h2>
          {matrixB.map((row, i) => (
            <div key={"B-row-" + i}>
              {row.map((val, j) => (
                <input
                  key={"B-" + i + "-" + j}
                  type="number"
                  value={val}
                  onChange={(e) => handleChangeB(i, j, e.target.value)}
                  style={{ width: "60px", margin: "2px" }}
                />
              ))}
            </div>
          ))}

          <h2>Result: A + B</h2>
          {sumMatrix.map((row, i) => (
            <div key={"C-row-" + i}>
              {row.map((val, j) => (
                <input
                  key={"C-" + i + "-" + j}
                  type="number"
                  value={val}
                  readOnly
                  style={{ width: "60px", margin: "2px" }}
                />
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;