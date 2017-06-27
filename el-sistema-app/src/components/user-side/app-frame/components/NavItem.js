import React, {Component} from 'react';
import Router, { Link } from 'react-router-dom';

export default class NavItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectorStyle: {
        width: props.width,
        height: 14,
        backgroundColor: '#edc93a',
        position: 'absolute',
        display: props.selected ? 'block' : 'none',
        marginTop: props.path === '/home' ? 38.5 : 22
      }
    }
  }


  componentWillReceiveProps(props) {

    var selectorStyle = Object.assign({}, this.state.selectorStyle);
    selectorStyle.display = props.selected ? 'block' : 'none';

    this.setState({
      selectorStyle: selectorStyle
    })
  }

  render() {

    return (
      <li onClick={() => this.props.updateNavInfo()}>
        <Link to={this.props.path} style={{color: this.props.textColor}}>{this.props.name}</Link>
        <div style={this.state.selectorStyle}> </div>
      </li>
    )
  }
}
