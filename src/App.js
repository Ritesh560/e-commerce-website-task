import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//import css
import "./App.css"

//components
import Nevbar from "./components/navbar/navbar"
import Journey from "./components/Journey/journey"
import Team from "./components/Team/team"
import Contact from "./components/Contact/contact"
import Filters from "./components/Filters/filters"
import Products from "./components/products/products"
import Cart from "./components/Cart/cart"

function App() {
  const [cart, setCart] = useState([])

  const [priceRange, setPriceRange] = useState({
    costFilter1: false,
    costFilter2: false,
    costFilter3: false,
  })

  const [type, setType] = useState({
    loafers: false,
    sneakers: false,
  })

  const StorePage = () => {
    return (
      <>
        <Nevbar />
        <div className="store">
          <Filters priceRange={priceRange} setPriceRange={setPriceRange} type={type} setType={setType} />
          <Products cart={cart} setCart={setCart} priceRange={priceRange} type={type} />
          <Cart cart={cart} setCart={setCart} />
        </div>
      </>
    )
  }

  const JourneyPage = () => {
    return (
      <>
        <Nevbar />
        <Journey />
      </>
    )
  }

  const ContactPage = () => {
    return (
      <>
        <Nevbar />
        <Contact />
      </>
    )
  }

  const TeamPage = () => {
    return (
      <>
        <Nevbar />
        <Team />
      </>
    )
  }

  const Home = () => {
    return (
      <>
        <Nevbar />
        <h1>HOME</h1>
      </>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/store" exact element={<StorePage />} />

        <Route path="/journey" element={<JourneyPage />} />

        <Route path="/team" element={<TeamPage />} />

        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
