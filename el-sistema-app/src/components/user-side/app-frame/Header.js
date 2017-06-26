import React, { Component } from 'react';
import homeLogo from './assets/homeLogo.png';
import regLogo from './assets/regLogo.png';
import NavItem from './components/NavItem';
import './style.css';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      navItems: [
        {
          name: 'Home',
          path: '/home',
          width: 61,
          selected: false
        },
        {
          name: 'Calendar',
          path: '/calendar',
          width: 82,
          selected: false
        },
        {
          name: 'About Us',
          path: '/about',
          width: 86,
          selected: false
        },
        {
          name: 'Media',
          path: '/media',
          width: 57,
          selected: false
        },
        {
          name: 'Blog',
          path: '/blog',
          width: 42,
          selected: false
        },
        {
          name: 'Support Us',
          path: '/support',
          width: 0,
          selected: false,
          support: true
        }
      ]
    }

    this.updateSelection = this.updateSelection.bind(this);
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
        {this.state.navItems.map((item, index) => {
          item.updateSelection = this.updateSelection; //updateSelection method gets passed as a prop
          item.key = item.name + index; //key is required... shouldn't just be the index ;)
          item.index = index; //argument to be passed to updateSelection
          return <NavItem {...item} />
        })}
      </ul>
    )
  }

  updateSelection(selectedIndex) {
    var updatedNavItems = this.state.navItems.map((item, index) => {
      if (selectedIndex === index) {
        item.selected = true;
        return item;
      }
      else {
        item.selected = false;
        return item;
      }
    })

    this.setState({
      navItems: updatedNavItems
    })
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
