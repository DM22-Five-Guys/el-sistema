import React, { Component } from 'react';

export default class ContentContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topMargin: props.topMargin
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      topMargin: props.topMargin
    })
  }

  render() {
    return (
      <section className="UserSide-content" style={{marginTop: this.state.topMargin}}>
        {this.props.children}
      </section>
    )
  }
}
