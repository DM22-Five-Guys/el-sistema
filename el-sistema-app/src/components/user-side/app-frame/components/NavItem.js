import React, {Component} from 'react';
import Router, { Link } from 'react-router-dom';

export default class NavItem extends Component {

  constructor() {
    super();

    this.state = {
      selectorStyle: {
        width: null,
        height: 14,
        backgroundColor: '#edc93a',
        position: 'absolute',
        marginTop: 26,
        display: null
      },
      textStyle: {
        color: null
      }
    }
  }

  giveTextColor(props) {
    if (props.support)
      return {
        color: '#4a4a4a'
      }
    else
      return {
        color: props.selected ? '#edc93a' : '#fefef6'
      }
  }


  componentWillReceiveProps(props) {

    var selectorStyle = Object.assign({}, this.state.selectorStyle);
    selectorStyle.width = props.width;
    selectorStyle.display = props.selected ? 'block' : 'none';

    this.setState({
      selectorStyle: selectorStyle,
      textStyle: this.giveTextColor(props)
    })
  }

  render() {

    return (
      <li onClick={() => this.props.updateSelection(this.props.index)}>
        <Link to={this.props.path} style={this.state.textStyle}>{this.props.name}</Link>
        <div style={this.state.selectorStyle}> </div>
      </li>
    )
  }
}
