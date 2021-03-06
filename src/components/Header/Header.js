
import React, { Component } from 'react';
import logo from '../../logoDark.png';
import './Header.css';
import {Link} from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <div classhost="Header">
      <header>
        <nav>
          <Link to = '/'><img id = "logo" src = {logo} width = '160' height="60"/></Link>
            <ul class = 'nav'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/events' id = "events">Events</Link></li>
              <li><Link to ="/contact">Create</Link></li>
              <li><Link to ='/about'>About</Link></li>
            </ul>
        </nav>
      </header>
      </div>
    );
  }
}

export default Header;
