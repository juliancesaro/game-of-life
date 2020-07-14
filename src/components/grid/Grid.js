import React from "react"
import "./Grid.css"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import produce from "immer"
import Cell from "../cell/Cell"

const Grid = ({ grid, setGrid, numRows, numCols, isActive }) => {
  const matches = useMediaQuery("(max-width:600px)")

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
        style={
          matches
            ? {
                width: "100%",
                display: "grid",
                margin: "0px 20px",
                gridTemplateColumns: `repeat(${numCols},  calc(${
                  100 / numCols
                }%))`,
              }
            : {
                display: "grid",
                gridTemplateColumns: `repeat(${numCols},  calc(${
                  100 / numCols
                }%))`,
              }
        }
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <Cell
              key={`${i}-${k}`}
              row={i}
              col={k}
              numRows={numRows}
              numCols={numCols}
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
