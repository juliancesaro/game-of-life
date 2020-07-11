import React, { useState } from "react"
import "./Grid.css"
import Cell from "../cell/Cell"

const Grid = ({ grid, setGrid, numRows, numCols, isActive }) => {
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
              row={k}
              col={i}
              grid={grid}
              setGrid={setGrid}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Grid
