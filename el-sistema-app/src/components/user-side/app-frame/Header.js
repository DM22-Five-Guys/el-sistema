import React, { Component } from 'react';
import Router, { Link } from 'react-router-dom';
import homeLogo from './assets/homeLogo.png';
import regLogo from './assets/regLogo.png';
import './style.css';

export default class SmartHeader extends Component {

  isHome() {
    return window.location.href.includes('home');
  }

  defineClass() {
    return this.isHome() ? "home-header" : "reg-header";
  }

  giveLogo() {
    return this.isHome()
    ?
      <div className={`${this.defineClass()}-LogoContainer`}>
        <img src={homeLogo} alt="El Sistema Logo"/>
      </div>
    :
      <div className={`${this.defineClass()}-LogoContainer`}>
        <img src={regLogo} alt="El Sistema Logo"/>
      </div>
  }

  giveNavigation() {
    return (
      <ul className={`${this.defineClass()}-Navigation`}>
         <li> <Link to='/'> Home </Link> </li>
         <li> <Link to='/calendar'> Calendar </Link></li>
         <li> <Link to='/about'> About </Link></li>
         <li> <Link to='/media'>Media </Link></li>
         <li> <Link to='/blog'>Blog </Link></li>
         <li> <Link to='/support'> <span>Support Us</span></Link></li>
       </ul>
    )
  }

  render() {
    return (
      <header className={`${this.defineClass()}-Root`}>
        <div className={`${this.defineClass()}-Container`}>
          {this.giveLogo()}
          {this.giveNavigation()}
        </div>
      </header>
    )
  }
}
