import React, { useState } from "react";
import "./App.css";
import Grid from "./components/grid/Grid";
import produce from "immer";

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const numRows = 20;
const numCols = 20;

const emptyGrid = () => {
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0));
  }
  return rows;
};

function App() {
  const [gridActive, setGridActive] = useState(false);
  const [grid, setGrid] = useState(() => {
    return emptyGrid();
  });
  const toggleActive = () => {
    setGridActive(!gridActive);
  };
  console.log(gridActive);
  const animate = () => {
    if (!gridActive) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });

    setTimeout(animate, 100);
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          toggleActive();
          if (gridActive) {
            animate();
          }
        }}
      >
        {gridActive ? "stop" : "start"}
      </button>
      <button
        onClick={() => {
          setGrid(emptyGrid);
        }}
      >
        reset
      </button>
      <Grid
        grid={grid}
        setGrid={setGrid}
        numRows={numRows}
        numCols={numCols}
        isActive={gridActive}
      />
    </div>
  );
}

export default App;
