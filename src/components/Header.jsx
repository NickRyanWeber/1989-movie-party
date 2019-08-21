import React, { Component } from 'react'
import PopcornAndSodaLeft from '../images/popcorn-left.png'
import PopcornAndSodaRight from '../images/popcorn-right.png'

export class Header extends Component {
  render() {
    return (
      <header>
        <img
          className="dancing-icon left-icon"
          src={PopcornAndSodaLeft}
          alt="dancing popcorn and soda"
        />
        <section>
          <h1 className="header-title">Best Movies From</h1>
          <p className="header-year">1989</p>
        </section>
        <img
          className="dancing-icon right-icon"
          src={PopcornAndSodaRight}
          alt="dancing popcorn and soda"
        />
      </header>
    )
  }
}

export default Header
