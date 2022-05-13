import React from "react"

//import css
import "./products.css"

//import images
import shoe2 from "../../assets/shoe2.png"
import rating3 from "../../assets/rating3.png"

function Products() {
  return (
    <div className="store-items">
      <div className="items-nav">
        <h3>SHOES</h3>
        <i className="fa-solid fa-magnifying-glass search"></i>
        <input type="button" value="sort by" className="items-sort-by" />
      </div>

      <div className="products-container">
        <div className="product">
          <img src={shoe2} alt="#" className="product-image shoe2" />
          <h4>KSL 01</h4>
          <div className="price-stars">
            <p className="product-price">Rs. 2000</p>
            <img className="rating-img" src={rating3} alt="###" />
          </div>
        </div>

        <div className="product">
          <img src={shoe2} alt="#" className="product-image shoe2" />
          <h4>KSW 01</h4>
          <div className="price-stars">
            <p className="product-price">Rs. 2000</p>
            <img className="rating-img" src={rating3} alt="###" />
          </div>
        </div>

        <div className="product">
          <img src={shoe2} alt="#" className="product-image shoe2" />
          <h4>KSL 01</h4>
          <div className="price-stars">
            <p className="product-price">Rs. 2000</p>
            <img className="rating-img" src={rating3} alt="###" />
          </div>
        </div>

        <div className="product">
          <img src={shoe2} alt="#" className="product-image shoe2" />
          <h4>KSL 01</h4>
          <div className="price-stars">
            <p className="product-price">Rs. 2000</p>
            <img className="rating-img" src={rating3} alt="###" />
          </div>
        </div>

        <div className="product">
          <img src={shoe2} alt="#" className="product-image shoe2" />
          <h4>KSW 01</h4>
          <div className="price-stars">
            <p className="product-price">Rs. 2000</p>
            <img className="rating-img" src={rating3} alt="###" />
          </div>
        </div>

        <div className="product">
          <img src={shoe2} alt="#" className="product-image shoe2" />
          <h4>KSL 01</h4>
          <div className="price-stars">
            <p className="product-price">Rs. 2000</p>
            <img className="rating-img" src={rating3} alt="###" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
