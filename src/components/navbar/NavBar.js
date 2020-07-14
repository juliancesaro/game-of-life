import React from "react"
import "./NavBar.css"
import { NavLink } from "react-router-dom"
import Fade from "react-reveal/Fade"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Fade left distance="20px">
          <h1 className="title-left">John Conway's</h1>
        </Fade>{" "}
        <Fade right distance="20px">
          <h1 className="title-right">Game of Life</h1>
        </Fade>
      </div>
      <Fade bottom distance="20px">
        <div className="links">
          <NavLink exact className="link" activeClassName="activelink" to="/">
            Play
          </NavLink>
          <NavLink className="link" activeClassName="activelink" to="/rules">
            Rules
          </NavLink>
        </div>
      </Fade>
    </div>
  )
}

export default NavBar
