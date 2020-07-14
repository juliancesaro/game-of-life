import React from "react"
import "./Controls.css"
import {
  withStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Slider from "@material-ui/core/Slider"

const GridTextInput = withStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& input": {
      color: "white",
    },
    "& .MuiOutlinedInput-input": {
      padding: "8px",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
    },
  },
})(TextField)

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      track: {
        color: "white",
      },
      rail: {
        color: "white",
      },
      mark: {
        color: "black",
      },
      marked: {
        color: "black",
      },
      markActive: {
        backgroundColor: "black",
      },
    },
  },
})

function valuetext(value) {
  return `${value}°C`
}

const Controls = ({
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
}) => {
  const formSubmit = (event) => {
    event.preventDefault()
    setGrid(emptyGrid)
  }
  return (
    <div className="controls">
      <div className="animation-buttons">
        <Button
          className="button"
          variant="contained"
          onClick={() => {
            toggleActive()
            if (!gridActive) {
              runningRef.current = true
              animate()
            }
          }}
          style={{ margin: 5 }}
        >
          {gridActive ? "Stop" : "Start"}
        </Button>
        <Button
          className="button"
          variant="contained"
          onClick={() => {
            const rows = []
            for (let i = 0; i < numRows; i++) {
              rows.push(
                Array.from(Array(parseInt(numCols)), () =>
                  Math.floor(Math.random() * 2)
                )
              )
            }
            setGrid(rows)
          }}
          style={{ margin: 5 }}
        >
          random
        </Button>
        <Button
          className="button"
          variant="contained"
          onClick={() => {
            setGrid(emptyGrid)
          }}
          style={{ margin: 5 }}
        >
          reset
        </Button>
      </div>
      <div className="input-fields">
        <div className="speed-input">
          <p>Speed</p>
          <ThemeProvider theme={muiTheme}>
            <Slider
              className="slider"
              value={speedVal}
              onChange={handleSpeedChange}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={50}
              marks
              min={50}
              max={250}
              style={{ width: 200, margin: 10 }}
            />
          </ThemeProvider>
        </div>
        <div className="size-input">
          <p>Size</p>
          <form onSubmit={formSubmit}>
            <GridTextInput
              id="outlined-number"
              label="Rows"
              type="number"
              value={numRows}
              onChange={handleRowsChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              style={{
                width: 80,
                color: "white",
                marginLeft: 10,
                marginRight: 10,
              }}
            />
            <GridTextInput
              id="outlined-number"
              label="Columns"
              type="number"
              value={numCols}
              onChange={handleColsChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              style={{ width: 80, color: "white", marginRight: 10 }}
            />
            <Button
              type="submit"
              className="button"
              variant="contained"
              style={{ width: 80, marginRight: 10 }}
            >
              update
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Controls
