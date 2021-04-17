import React, { Component } from 'react'

export default class Filter extends Component {
  constructor() {
    super();

    this.state = {

    }
  }


  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <select
            className="filters neighborhood"
            name="neighborhood"
            onChange={this.props.change}
          >
            <option value="Boyle Heights">Boyle Heights</option>
            <option value="East Los Angeles">East Los Angeles</option>
            <option value="Auckland">Auckland</option>
          </select>

          <select
            className="filters housetype"
            name="housetype"
            onChange={this.props.change}
          >
            <option value="House">House</option>
            <option value="Ranch">Ranch</option>
            <option value="Apartment">Apartment</option>
            <option value="Studio">Studio</option>
          </select>

          <select
            className="filters bedrooms"
            name="bedrooms"
            onChange={this.props.change}
          >
            <option value="1">1 BR</option>
            <option value="2">2 BR</option>
            <option value="3">3 BR</option>
            <option value="4">4 BR</option>
          </select>

          <div className="filters price">
            <span className="title">Price</span>
            <input
              type="text"
              name="min_price"
              className="min-price"
              onChange={this.props.change}
              value={this.props.globalState.min_price}
            />
            <input
              type="text"
              name="max_price"
              className="max-price"
              onChange={this.props.change}
              value={this.props.globalState.max_price}
            />
          </div>

          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input
              type="text"
              name="min_floor_space"
              className="min-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.min_floor_space}
            />
            <input
              type="text"
              name="max_floor_space"
              className="max-floor-space"
              onChange={this.props.change}
              value={this.props.globalState.max_floor_space}
            />
          </div>

          <div className="filters extras">
            <span className="title">
              Extras
          </span>
            <label htmlFor="extras">
              <span>Elevators</span>
              <input value="elevators" name="elevators" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input value="swimming_pool" name="swimming_pool" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Finished Basement</span>
              <input value="finished_basement" name="finished_basement" type="checkbox" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input value="gym" name="gym" type="checkbox" onChange={this.props.change} />
            </label>
          </div>
        </div>

      </section>
    )
  }
}
