import React from "react"

//import css
import "./cart.css"

//importing images
import calendar from "../../assets/calendar.png"
import location from "../../assets/location.png"
import shoppingCard from "../../assets/shopping-cart.png"

function Card() {
  return (
    <div className="cart">
      <div className="cart-title">
        <h3>CART</h3>
        <img className="icon cart-icon" src={shoppingCard} alt="#" />
      </div>
      <div className="cart-empty">
        <p>what's stopping you, designer?</p>
      </div>

      <div className="location-date">
        <div className="location">
          <img src={location} alt="#" className="icon" />
          <p>Home</p>
          <img src={calendar} alt="#" className="icon" />
          <p>select date</p>
        </div>
      </div>

      <input type="button" value="order now" className="order" />
    </div>
  )
}

export default Card
