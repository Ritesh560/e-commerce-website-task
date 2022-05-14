import React from "react"
import { Link } from "react-router-dom"

import "./navbar.css"

//import images
import websiteLogo from "../../assets/websitelogo.png"

function Nevbar() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>
            <img className="websitelogo" src={websiteLogo} alt="#" />
          </li>
          <li className="navhome">
            <Link to="/" />
            Home
          </li>
          <li className="navjourney">
            <Link to="/journey">The Journey</Link>
          </li>
          <li className="navteam">
            <Link to="/team">Team</Link>
          </li>
          <li className="navstore">
            <Link to="/">Store</Link>
          </li>
          <li className="navcontact">
            <Link to="/contact-us">Contact</Link>
          </li>
          <li className="user">GAGAN</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nevbar
