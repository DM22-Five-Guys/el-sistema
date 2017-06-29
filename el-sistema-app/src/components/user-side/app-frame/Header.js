import React, { Component } from 'react';
import homeLogo from './assets/homeLogo.png';
import regLogo from './assets/regLogo.png';
import HeaderLink from './components/HeaderLink';
import './style.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: props.navigationState,
      isHome: props.currentPage.name === "Home",
      class: props.currentPage.name === "Home" ? "home-header" : "reg-header"
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      pages: props.navigationState,
      isHome: props.currentPage.name === "Home",
      class: props.currentPage.name === "Home" ? "home-header" : "reg-header"
    })
  }

  render() {
    return (
      <header className={this.state.class}>
        <div className={`${this.state.class}-Container`}>

          <div className={`${this.state.class}-LogoContainer`}>
            <img src={this.state.isHome ? homeLogo : regLogo} alt="El Sistema Logo" />
          </div>

          <ul className={`${this.state.class}-Navigation`}>
            {this.state.pages.map(page => {
              page.key = page.id;
              page.updateUserSideState = this.props.updateUserSideState;
              return <HeaderLink {...page} />
            })}
          </ul>

        </div>
      </header>
    )
  }

}
