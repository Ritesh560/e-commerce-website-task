import React from "react"
import { Link } from "react-router-dom"

import "./navbar.css"

//import images
import websiteLogo from "../../assets/websitelogo.png"
import user_icon from "../../assets/user-solid.svg"

function Nevbar() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>
            <img className="websitelogo" src={websiteLogo} alt="#" />
          </li>

          <div className="nav-links navigation">
            <li className="navhome">
              <Link to="/">Home</Link>
            </li>
            <li className="navjourney">
              <Link to="/journey">The Journey</Link>
            </li>
            <li className="navteam">
              <Link to="/team">Team</Link>
            </li>
            <li className="navstore">
              <Link to="/store">Store</Link>
            </li>
            <li className="navcontact">
              <Link to="/contact-us">Contact</Link>
            </li>
          </div>

          <li className="user">
            {" "}
            <img className="user-icon" src={user_icon} alt="#" /> GAGAN
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nevbar
