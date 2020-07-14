import React from "react"
import "./Cell.css"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Cell = ({ row, col, numRows, numCols, isActive, activate }) => {
  const matches = useMediaQuery("(max-width:600px)")

  return (
    <div
      className={`cell ${isActive ? "on" : "off"}`}
      onClick={() => activate(row, col)}
      style={
        matches
          ? {
              height: `calc(${100 / numCols}vw - 1px)`,
            }
          : { height: 14, width: 14 }
      }
    ></div>
  )
}

export default Cell
