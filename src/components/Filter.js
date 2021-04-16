import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <select
            className="filters neighborhood"
            name="neighborhood"
          >
            <option>Boyle Heights</option>
            <option>East Los Angeles</option>
            <option>Auckland</option>
          </select>
          <select className="filters housetype" name="housetype">
            <option>House</option>
          </select>
          <select className="filters bedrooms" name="bedrooms">
            <option>4 BR</option>
          </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min-price"
              className="min-price"
            />
            <input
              type="text"
              name="max-price"
              className="max-price"
            />
          </div>

          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input
              type="text"
              name="min-floor-space"
              className="min-floor-space"
            />
            <input
              type="text"
              name="max-floor-space"
              className="max-floor-space"
            />
          </div>

          <div className="filters extras">
            <span className="title">
              Extras
          </span>
            <label for="extras">
              <span>Elevators</span>
              <input value="elevators" name="extras" type="checkbox" />
            </label>
            <label for="extras">
              <span>Swimming Pool</span>
              <input value="swimming-pool" name="extras" type="checkbox" />
            </label>
            <label for="extras">
              <span>Finished Basement</span>
              <input value="finished basement" name="extras" type="checkbox" />
            </label>
            <label for="extras">
              <span>Gym</span>
              <input value="gym" name="extras" type="checkbox" />
            </label>
          </div>
        </div>

      </section>
    )
  }
}
