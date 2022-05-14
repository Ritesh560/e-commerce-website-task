import React from "react"

//import css
import "./products.css"

//import images
import shoe2 from "../../assets/shoe2.png"
import rating3 from "../../assets/rating3.png"

function Products({ cart, setCart }) {
  const products = [
    { pro_name: "KSL 01", img: shoe2, price: 2000, rating: rating3, key: 1 },
    { pro_name: "KSL 02", img: shoe2, price: 3000, rating: rating3, key: 2 },
    { pro_name: "KSL 03", img: shoe2, price: 5000, rating: rating3, key: 3 },
    { pro_name: "KSL 04", img: shoe2, price: 6000, rating: rating3, key: 4 },
    { pro_name: "KSL 05", img: shoe2, price: 8000, rating: rating3, key: 5 },
    { pro_name: "KSL 06", img: shoe2, price: 9000, rating: rating3, key: 6 },
  ]

  const handelAddToCart = async (prod) => {
    return setCart((cart) => [...cart, prod])
  }

  return (
    <div className="store-items">
      <div className="items-nav">
        <h3>SHOES</h3>
        <i className="fa-solid fa-magnifying-glass search"></i>
        <input type="button" value="sort by" className="items-sort-by" />
      </div>

      <div className="products-container">
        {products.map((prod) => {
          return (
            <div key={prod.key} className="product" onClick={(e) => handelAddToCart(prod)}>
              <img src={shoe2} alt="#" className="product-image shoe2" />
              <h4>{prod.pro_name}</h4>
              <div className="price-stars">
                <p className="product-price">Rs. {prod.price}</p>
                <img className="rating-img" src={prod.rating} alt="###" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products
