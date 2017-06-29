import React, { Component } from 'react';

export default class Committed extends Component {

  render() {
    return (
      <section className="committed">
        <h4> COMMITTED TO PITTSBURGH </h4>
        <p> {this.props.content} </p>
      </section>
    )
  }
}
