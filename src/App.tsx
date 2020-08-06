import React, { useState, useRef } from "react"
import "./App.css"
import { HashRouter, Route, Switch } from "react-router-dom"
import produce from "immer"
import NavBar from "./components/navbar/NavBar"
import Controls from "./components/controls/Controls"
import Grid from "./components/grid/Grid"
import Rules from "./components/about/Rules"
import { Fade } from "react-awesome-reveal"

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
]

const App: React.FC = () => {
  const [numRows, setNumRows] = useState(20)
  const [numCols, setNumCols] = useState(20)
  const [gridActive, setGridActive] = useState(false)

  const emptyGrid = () => {
    if (numCols <= 100 && numRows <= 100) {
      const rows = []
      for (let i = 0; i < numRows; i++) {
        rows.push(Array.from(Array(numCols), () => 0))
      }
      return rows
    } else {
      return []
    }
  }

  const [grid, setGrid] = useState(() => {
    return emptyGrid()
  })

  const toggleActive = () => {
    setGridActive(!gridActive)
  }

  const runningRef = useRef(gridActive)
  runningRef.current = gridActive

  const animate = () => {
    if (!runningRef.current) {
      return
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let numNeighbours = 0

            operations.forEach(([x, y]) => {
              const newI = i + x
              const newK = k + y
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                numNeighbours += g[newI][newK]
              }
            })
            if (numNeighbours < 2 || numNeighbours > 3) {
              gridCopy[i][k] = 0
            } else if (g[i][k] === 0 && numNeighbours === 3) {
              gridCopy[i][k] = 1
            }
          }
        }
      })
    })
    setTimeout(animate, 100)
  }

  const handleRowsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(event)
    if (parseInt(event.currentTarget.value) <= 100) {
      setNumRows(parseInt(event.currentTarget.value))
    }
  }

  const handleColsChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (parseInt(event.currentTarget.value) <= 100) {
      setNumCols(parseInt(event.currentTarget.value))
    }
  }

  return (
    <div className="App">
      <HashRouter basename="/">
        <NavBar />
        <Switch>
          <Route path="/rules">
            <Fade direction="up">
              <Rules />
            </Fade>
          </Route>
          <Route path="/">
            <Fade direction="up">
              <Controls
                toggleActive={toggleActive}
                gridActive={gridActive}
                runningRef={runningRef}
                animate={animate}
                setGrid={setGrid}
                emptyGrid={emptyGrid}
                numRows={numRows}
                handleRowsChange={handleRowsChange}
                numCols={numCols}
                handleColsChange={handleColsChange}
              />
              <Grid
                grid={grid}
                setGrid={setGrid}
                numRows={numRows}
                numCols={numCols}
              />
            </Fade>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

export default App
