import React from "react"

//import css
import "./cart.css"

//importing images
import calendar from "../../assets/calendar.png"
import location from "../../assets/location.png"
import shoppingCard from "../../assets/shopping-cart.png"
import delete_icon from "../../assets/delete_icon.svg"

function Card({ cart, setCart }) {
  const handelRemoveItem = (index) => {
    setCart(cart.filter((_, i) => i !== index))
  }

  return (
    <div className="cart">
      <div className="cart-title">
        <h3>CART</h3>
        <img className="icon cart-icon" src={shoppingCard} alt="#" />
      </div>
      <div className={cart.length === 0 ? "cart-empty" : "cart-notempty"}>
        {cart.length === 0 ? (
          <p className="empty-card-msg">what's stopping you, designer?</p>
        ) : (
          cart.map((item, index) => {
            return (
              <div key={index} className="cart-items">
                <p className="cart-item-name">{item.pro_name}</p>
                <p className="cart-item-price">Rs. {item.price}</p>
                <img src={delete_icon} alt="#" className="icon-small" onClick={() => handelRemoveItem(index)} />
              </div>
            )
          })
        )}
      </div>

      <div className="location-date">
        <div className="location">
          <img src={location} alt="#" className="icon" />
          <p>Home</p>
        </div>
        <div className="date">
          <img src={calendar} alt="#" className="icon" />
          <p>select date</p>
        </div>
      </div>

      <input type="button" value="order now" className="order" />
    </div>
  )
}

export default Card
