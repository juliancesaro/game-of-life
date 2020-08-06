import React from "react"
import "./NavBar.css"
import { NavLink } from "react-router-dom"
import { Fade } from "react-awesome-reveal"

const NavBar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="title">
        <Fade direction="left">
          <h1 className="title-left">John Conway's</h1>
        </Fade>{" "}
        <Fade direction="right">
          <h1 className="title-right">Game of Life</h1>
        </Fade>
      </div>
      <Fade direction="up">
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
