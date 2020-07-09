import React from "react";
import "./Cell.css";
import produce from "immer";

const Cell = ({ row, col, grid, setGrid }) => {
  const toggleSelect = () => {
    const newGrid = produce(grid, (gridCopy) => {
      gridCopy[row][col] = 1;
    });
    setGrid(newGrid);
  };

  return (
    <div
      className={`cell ${grid[row][col] ? "selected" : "notSelected"}`}
      onClick={toggleSelect}
    ></div>
  );
};

export default Cell;
