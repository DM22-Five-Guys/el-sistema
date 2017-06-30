import React, { Component } from 'react';
import homeLogo from './assets/homeLogo.png';
import regLogo from './assets/regLogo.png';

export default class Logo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: props.isHome ? homeLogo : regLogo,
      className: props.isHome ? "home-logo-container" : "reg-logo-container"
    }

    console.log(this.state);
  }

  componentWillReceiveProps(props) {
    this.setState({
      image: props.isHome ? homeLogo : regLogo,
      className: props.isHome ? "home-logo-container" : "reg-logo-container"
    })

    console.log(this.state);
  }

  render() {
    return (
      <div className={this.state.className}>
        <img src={this.state.image} alt="El Sistema Logo" />
      </div>
    )
  }
}
