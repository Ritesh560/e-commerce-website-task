import React from "react"

//importing css
import "./filter.css"

import filter_icon from "../../assets/filter-solid.svg"

function Filters({ priceRange, setPriceRange, type, setType }) {
  const handelPrice = (e) => {
    e.preventDefault()
    if (e.target.value === "1500") {
      setPriceRange({
        ...priceRange,
        costFilter1: !priceRange.costFilter1,
      })
    } else if (e.target.value === "4001") {
      setPriceRange({
        ...priceRange,
        costFilter2: !priceRange.costFilter2,
      })
    } else if (e.target.value === "7001") {
      setPriceRange({
        ...priceRange,
        costFilter3: !priceRange.costFilter3,
      })
    }
  }

  const handelType = (e) => {
    if (e.target.value === "loafers") {
      setType({
        ...type,
        loafers: !type.loafers,
      })
    } else if (e.target.value === "sneakers") {
      setType({
        ...type,
        sneakers: !type.sneakers,
      })
    }
  }

  return (
    <div className="filters">
      <div className="filters-title">
        <h2>FILTERS</h2>
        <img src={filter_icon} alt="#" classsName="icon" />
      </div>

      <div className="cost-filter">
        <h3>Cost</h3>
        <input type="checkbox" id="1500" name="1500" value="1500" checked={priceRange.costFilter1} onChange={handelPrice} />
        <label htmlFor="1500">Rs. 1500-4000</label> <br />
        <input type="checkbox" id="4001" name="4001" value="4001" checked={priceRange.costFilter2} onChange={handelPrice} />
        <label htmlFor="4001">Rs. 4001-7000</label> <br />
        <input type="checkbox" id="7001" name="7001" value="7001" checked={priceRange.costFilter3} onChange={handelPrice} />
        <label htmlFor="7001">Rs. 7001+</label> <br />
      </div>

      <div className="color-filter">
        <h3>Colour</h3>
        <div className="color-boxes">
          <div className="box red"></div>
          <div className="box blue"></div>
          <div className="box yellow"></div>
          <div className="box green"></div>
          <div className="box golden"></div>
        </div>
      </div>

      <div className="design-filter">
        <h3>Design templates</h3>
        <input type="checkbox" value="2" />
        <label htmlFor="2">2</label> <br />
        <input type="checkbox" value="3" />
        <label htmlFor="3">3</label> <br />
        <input type="checkbox" value="3+" />
        <label htmlFor="4">3+</label> <br />
      </div>

      <div className="type-filter">
        <h3>Type</h3>
        <input type="checkbox" id="loafers" name="loafers" value="loafers" checked={type.loafers} onClick={handelType} />
        <label htmlFor="loafers">Loafers</label> <br />
        <input type="checkbox" id="sneakers" name="sneakers" value="sneakers" checked={type.sneakers} onClick={handelType} />
        <label htmlFor="sneakers">Sneakers</label> <br />
      </div>

      <input type="button" className="apply-filter" value="apply" />
    </div>
  )
}

export default Filters
