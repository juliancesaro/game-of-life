import React from "react"
import "./Rules.css"

const Rules = () => {
  return (
    <div className="rules">
      <p>
        John Conway's Game of Life is a zero-player game in which cells are
        either alive or dead. Each subsequent generation of cells evolve from
        the previous generation, and each cell's life is determined by a set of
        rules.
      </p>
      <p>The rules are:</p>
      <ul>
        <li>
          A live cell with less than two live neighbours will be dead in the
          next generation.
        </li>
        <li>
          A live cell with more than three live neighbours will be dead in the
          next generation.
        </li>
        <li>
          A live cell with two or three live neighbours will be alive in the
          next generation.
        </li>
        <li>
          A dead cell with three live neighbours will be alive in the next
          generation.
        </li>
      </ul>
    </div>
  )
}

export default Rules
