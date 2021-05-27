import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          Logo
        </div>
        <nav>
          <a href="https://www.google.com/">Create Ads</a>
          <a href="https://www.google.com/">About Us</a>
          <a href="https://www.google.com/">Log in</a>
          <a href="https://www.google.com/" className="register-btn">Register</a>
        </nav>
      </header>
    )
  }
}

export default Header;