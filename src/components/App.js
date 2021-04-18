import React, { Component } from 'react';
import Header from './Header';
import Filter from './Filter';
import Listings from './Listings';
import listingsData from './data/listingsData'
import './App.scss'


class App extends Component {
  constructor() {
    super();

    this.state = {
      listingsData: listingsData,
      neighborhood: 'Auckland',
      homeType: 'House',
      bedrooms: 1,
      min_price: 0,
      max_price: 100000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elvator: false,
      finished_basment: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
  }


  change(e) {
    let name = e.target.name
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
      this.filteredData()
    })
    // console.log(e.target.value);
  }


  filteredData() {
    let newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space
    })

    this.setState({
      filteredData: newData
    })
  }




  render() {
    // console.log(this.state.data);

    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.filteredData} />
        </section>
      </div>
    )
  }
}
export default App;