import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          Logo
        </div>
        <nav>
          <a >Create Ads</a>
          <a >About Us</a>
          <a >Log in</a>
          <a className="register-btn">Register</a>
        </nav>
      </header>
    )
  }
}

export default Header;