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

    this.change = this.change.bind(this)
  }


  change(e) {
    let name = e.target.name
    let value = e.target.value

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
          <Filter change={this.change} />
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>
    )
  }
}
export default App;