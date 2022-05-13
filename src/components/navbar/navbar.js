import React from "react"

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
            <a href="#Home">Home</a>
          </li>
          <li className="navjourney">
            <a href="#journey">The Journey</a>
          </li>
          <li className="navteam">
            <a href="#team">Team</a>
          </li>
          <li className="navstore">
            <a href="#store">Store</a>
          </li>
          <li className="navcontact">
            <a href="#Contact">Contact</a>
          </li>
          <li className="user">GAGAN</li>
        </ul>
      </nav>
    </div>
  )
}

export default Nevbar
