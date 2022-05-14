import React, { useState } from "react"

//import css
import "./App.css"

//components
import Nevbar from "./components/navbar/navbar"
// import Journey from "./components/Journey/journey"
// import Team from "./components/Team/team"
//import Contact from "./components/Contact/contact"
import Filters from "./components/Filters/filters"
import Products from "./components/products/products"
import Cart from "./components/Cart/cart"

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Nevbar />
      <div className="store">
        <Filters />
        <Products cart={cart} setCart={setCart} />
        <Cart cart={cart} />
      </div>
    </>
  )
}

export default App
