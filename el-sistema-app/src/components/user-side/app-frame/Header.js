import React, { Component } from 'react';
import homeLogo from './assets/homeLogo.png';
import regLogo from './assets/regLogo.png';
import navInfo from './assets/navigationItems';
import NavItem from './components/NavItem';
import './style.css';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      navInfo: this.prepareNavInfo()
    }

    this.updateNavInfo = this.updateNavInfo.bind(this);
  }

  prepareNavInfo() {
    return navInfo.information.map(item => {
      if (item.support) { //avoids changes on "support us" item
        item.selected = true;
        return item;
      }
      else if (window.location.href.includes(item.path)) {
        item.textColor = "#ffcf16";
        item.selected = true;
        return item;
      }
      else {
        item.textColor = "#fefef6";
        item.selected = false;
        return item;
      }
    })
  }

  updateNavInfo() {
    this.setState({
      navItems: this.prepareNavInfo()
    })
  }

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
        {this.state.navInfo.map(item => {
          item.updateNavInfo = this.updateNavInfo; //passes updateNavInfo as a property to be called by child component
          item.key = item.name;
          return <NavItem {...item} />
        })}
      </ul>
    )
  }

  render() {
    return (
      <header className={`${this.defineClass()}-Root`}>
        <div className={`${this.defineClass()}-Container`}>
          {this.giveLogo()}
          {this.giveNavigation(this)}
        </div>
      </header>
    )
  }

}
