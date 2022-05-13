import React from "react"

//components
import Nevbar from "./components/navbar/navbar"
// import Journey from "./components/Journey/journey"
// import Team from "./components/Team/team"
//import Contact from "./components/Contact/contact"
import Filters from "./components/Filters/filters"
import Products from "./components/products/products"
import Cart from "./components/Cart/cart"

function App() {
  return (
    <>
      <div className="store">
        <Nevbar />
        <Filters />
        <Products />
        <Cart />
      </div>
    </>
  )
}

export default App
