import React, { useState } from "react";
import "./Grid.css";
import Cell from "../cell/Cell";

const Grid = ({ cols, rows }) => {
  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols.length},  20px)`,
      }}
    >
      {cols.map((col, i) => rows.map((row, k) => <Cell key={`${i}-${k}`} />))}
    </div>
  );
};

export default Grid;
