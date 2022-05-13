import React from "react"

//importing css
import "./filter.css"

function Filters() {
  return (
    <div className="filters">
      <div className="filters-title">
        <h2>FILTERS</h2>
        <i className="fa-solid fa-filter"></i>
      </div>

      <div className="cost-filter">
        <h3>Cost</h3>
        <input type="checkbox" id="1500" name="1500" value="1500" />
        <label for="1500">Rs. 1500-4000</label> <br />
        <input type="checkbox" id="4001" name="4001" value="4001" />
        <label for="1500">Rs. 4001-7000</label> <br />
        <input type="checkbox" id="7001" name="7001" value="7001" />
        <label for="1500">Rs. 7001+</label> <br />
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
        <label for="1500">2</label> <br />
        <input type="checkbox" value="3" />
        <label for="1500">3</label> <br />
        <input type="checkbox" value="3+" />
        <label for="1500">3+</label> <br />
      </div>

      <div className="type-filter">
        <h3>Type</h3>
        <input type="checkbox" id="loafers" name="loafers" value="loafers" />
        <label for="1500">Loafers</label> <br />
        <input type="checkbox" id="sneakers" name="sneakers" value="sneakers" />
        <label for="1500">Sneakers</label> <br />
      </div>

      <input type="button" className="apply-filter" value="apply" />
    </div>
  )
}

export default Filters
