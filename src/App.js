import React from "react"
import "./App.css"
import Grid from "./components/grid/Grid"

function App() {
  return (
    <div className="App">
      <Grid
        cols={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
        rows={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
      />
    </div>
  )
}

export default App
