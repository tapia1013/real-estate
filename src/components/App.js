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
      listingsData: listingsData
    }
  }

  render() {
    console.log(this.state.data);

    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter />
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>
    )
  }
}
export default App;