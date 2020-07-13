import React from "react"
import "./NavBar.css"

const NavBar = ({
  toggleActive,
  gridActive,
  runningRef,
  animate,
  setGrid,
  emptyGrid,
  speedVal,
  handleSpeedChange,
  numRows,
  handleRowsChange,
  numCols,
  handleColsChange,
  gridSizeChange,
}) => {
  const formSubmit = (event) => {
    event.preventDefault()
    setGrid(emptyGrid)
  }
  return (
    <div className="navbar">
      <button
        onClick={() => {
          toggleActive()
          if (!gridActive) {
            runningRef.current = true
            animate()
          }
        }}
      >
        {gridActive ? "stop" : "start"}
      </button>
      <button
        onClick={() => {
          const rows = []
          for (let i = 0; i < numRows; i++) {
            rows.push(
              Array.from(Array(numCols), () => Math.floor(Math.random() * 2))
            )
          }
          setGrid(rows)
        }}
      >
        random
      </button>
      <button
        onClick={() => {
          setGrid(emptyGrid)
        }}
      >
        reset
      </button>
      <div className="input-fields">
        <p>Speed</p>
        <input
          type="range"
          min="1"
          max="200"
          value={speedVal}
          onChange={handleSpeedChange}
          className="slider"
          id="myRange"
        ></input>
        <p>Size</p>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            value={numRows}
            onChange={handleRowsChange}
            className="text-input"
            style={{
              width: 50,
            }}
          ></input>
          <input
            type="text"
            value={numCols}
            onChange={handleColsChange}
            className="text-input"
            style={{
              width: 50,
            }}
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  )
}

export default NavBar
