import React, { Component } from 'react'
import Link from 'gatsby-link'
import './Header.css'


class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const ScrollTop = window.pageYOffset

    if (ScrollTop > 50) {
      this.setState({hasScrolled:true})
    }else {
      this.setState({hasScrolled: false})
    }
  }

  render() {
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled': 'Header'}>
      <div className="HeaderGroup">
        <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30"></img></Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/buy"><button>Buy</button></Link>
      </div>
    </div>
    )
  }
}

export default Header
