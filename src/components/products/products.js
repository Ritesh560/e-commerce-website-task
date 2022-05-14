import React from "react"

//import css
import "./products.css"

//import images
import shoe2 from "../../assets/shoe2.png"
import rating3 from "../../assets/rating3.png"

function Products({ cart, setCart, priceRange, type }) {
  const products = [
    { pro_name: "KSL 01", img: shoe2, price: 2000, rating: rating3, key: 1, type: "loafers" },
    { pro_name: "KSL 02", img: shoe2, price: 3000, rating: rating3, key: 2, type: "sneakers" },
    { pro_name: "KSL 03", img: shoe2, price: 5000, rating: rating3, key: 3, type: "loafers" },
    { pro_name: "KSL 04", img: shoe2, price: 6000, rating: rating3, key: 4, type: "sneakers" },
    { pro_name: "KSL 05", img: shoe2, price: 8000, rating: rating3, key: 5, type: "loafers" },
    { pro_name: "KSL 06", img: shoe2, price: 9000, rating: rating3, key: 6, type: "sneakers" },
  ]

  var allCost = false
  var allType = false

  if ((priceRange.costFilter1 && priceRange.costFilter2 && priceRange.costFilter3) || (!priceRange.costFilter1 && !priceRange.costFilter2 && !priceRange.costFilter3)) {
    allCost = true
  } else {
    allCost = false
  }
  if ((type.sneakers && type.loafers) || (!type.sneakers && !type.loafers)) {
    allType = true
  } else {
    allType = false
  }

  const handelAddToCart = async (prod) => {
    // var item = cart.findIndex((ele) => ele.pro_name === prod.pro_name)
    // if (items.length) {
    //   items.map((item) => {
    //     setCart((cart) => [
    //       ...cart,
    //       {
    //         ...item,
    //         quantity: item.quantity + 1,
    //       },
    //     ])
    //   })
    // } else {
    var product = { ...prod, quantity: 1 }
    return setCart((cart) => [...cart, product])
    //}
  }
  console.log(cart)

  return (
    <div className="store-items">
      <div className="items-nav">
        <h3>SHOES</h3>
        <i className="fa-solid fa-magnifying-glass search"></i>
        <input type="button" value="sort by" className="items-sort-by" />
      </div>

      <div className="products-container">
        {products.map((prod) => {
          if (allCost) {
            if (allType) {
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
            } else if ((type.sneakers && prod.type === "sneakers") || (type.loafers && prod.type === "loafers")) {
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
            }
          } else if ((priceRange.costFilter1 && prod.price <= 4000) || (priceRange.costFilter2 && prod.price > 4000 && prod.price <= 7000) || (priceRange.costFilter3 && prod.price > 7000)) {
            if (allType) {
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
            } else if ((type.sneakers && prod.type === "sneakers") || (type.loafers && prod.type === "loafers")) {
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
            }
          }
        })}
      </div>
    </div>
  )
}

export default Products
