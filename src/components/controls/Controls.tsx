import React from "react"
import "./Controls.css"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

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

interface ControlProps {
  toggleActive: () => void
  gridActive: boolean
  runningRef: { current: boolean }
  animate: () => void
  setGrid: (val: any) => void
  emptyGrid: () => Array<Array<number>>
  numRows: number
  handleRowsChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  numCols: number
  handleColsChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const Controls: React.FC<ControlProps> = ({
  toggleActive,
  gridActive,
  runningRef,
  animate,
  setGrid,
  emptyGrid,
  numRows,
  handleRowsChange,
  numCols,
  handleColsChange,
}) => {
  const formSubmit = (event: React.FormEvent<HTMLElement>) => {
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
                Array.from(Array(numCols), () => Math.floor(Math.random() * 2))
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
