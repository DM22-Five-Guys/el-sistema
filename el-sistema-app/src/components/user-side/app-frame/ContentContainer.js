import React, { Component } from 'react';

export default class ContentContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      marginTop: props.marginTop
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      marginTop: props.marginTop
    })
  }

  render() {
    return (
      <section className="UserSide-content" style={{marginTop: this.state.marginTop}}>
        {this.props.children}
      </section>
    )
  }
}
