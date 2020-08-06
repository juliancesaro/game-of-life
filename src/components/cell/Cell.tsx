import React from "react"
import "./Cell.css"
import useMediaQuery from "@material-ui/core/useMediaQuery"

type CellProps = {
  row: number
  col: number
  numCols: number
  isActive: number
  activate: (row: number, col: number) => void
}

const Cell: React.FC<CellProps> = ({
  row,
  col,
  numCols,
  isActive,
  activate,
}) => {
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
