import React from "react"
import "./Cell.css"

const Cell = ({ row, col, isActive, activate }) => {
  return (
    <div
      className={`cell ${isActive ? "on" : "off"}`}
      onClick={() => activate(row, col)}
    ></div>
  )
}

export default Cell
