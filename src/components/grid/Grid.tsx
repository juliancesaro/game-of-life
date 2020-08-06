import React from "react"
import "./Grid.css"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import produce from "immer"
import Cell from "../cell/Cell"

type GridProps = {
  grid: Array<Array<number>>
  setGrid: (val: any) => void
  numRows: number
  numCols: number
}

const Grid: React.FC<GridProps> = ({ grid, setGrid, numRows, numCols }) => {
  const matches = useMediaQuery("(max-width:600px)")

  const activateCell = (row: number, col: number) => {
    setGrid(
      produce(grid, (gridCopy) => {
        gridCopy[row][col] = grid[row][col] ? 0 : 1
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
        {grid.map((rows: Array<number>, i: number) =>
          rows.map((col: number, k: number) => (
            <Cell
              key={`${i}-${k}`}
              row={i}
              col={k}
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
