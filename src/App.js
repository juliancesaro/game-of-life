import React, { useState } from "react"
import "./App.css"
import Grid from "./components/grid/Grid"
import produce from "immer"

const numRows = 20
const numCols = 20

const emptyGrid = () => {
  const rows = []
  for (let i = 0; i < numRows; i++) {
    rows.push(Array.from(Array(numCols), () => 0))
  }
  return rows
}

function App() {
  const [gridActive, setGridActive] = useState(false)
  const [grid, setGrid] = useState(() => {
    return emptyGrid()
  })
  const toggleActive = () => {
    setGridActive(!gridActive)
  }
  console.log(gridActive)

  return (
    <div className="App">
      <button
        onClick={() => {
          toggleActive()
          if (gridActive) {
          }
        }}
      >
        {gridActive ? "stop" : "start"}
      </button>
      <button
        onClick={() => {
          setGrid(emptyGrid)
        }}
      >
        reset
      </button>
      <Grid
        cols={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        rows={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        grid={grid}
        setGrid={setGrid}
        numRows={numRows}
        numCols={numCols}
        isActive={gridActive}
      />
    </div>
  )
}

export default App
