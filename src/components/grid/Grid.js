import React from "react"
import "./Grid.css"
import produce from "immer"
import Cell from "../cell/Cell"

const Grid = ({ grid, setGrid, numRows, numCols, isActive }) => {
  const activateCell = (row, col) => {
    setGrid(
      produce(grid, (gridCopy) => {
        gridCopy[row][col] = !gridCopy[row][col]
      })
    )
  }
  return (
    <div className="grid-wrapper">
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${numCols},  20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <Cell
              key={`${i}-${k}`}
              row={i}
              col={k}
              isActive={grid[i][k]}
              activate={activateCell}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Grid
