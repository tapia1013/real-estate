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
      min_price: 0,
      max_price: 100000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elvator: false,
      finished_basment: false,
      gym: false,
      swimming_pool: false,
    }

    this.change = this.change.bind(this)
  }


  change(e) {
    let name = e.target.name
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
    })
    // console.log(e.target.value);
  }

  render() {
    // console.log(this.state.data);

    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>
    )
  }
}
export default App;