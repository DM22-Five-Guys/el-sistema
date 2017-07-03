import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NavItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayName: this.props.name,
      linkPath: this.props.path,
      textColor: this.giveTextColor(props),
      selectorStyle: {
        width: props.selectorWidth,
        height: 14,
        backgroundColor: '#edc93a',
        position: 'absolute',
        display: props.selected ? 'block' : 'none',
        marginTop: props.path === '/home' ? 38.5 : 22
      }
    }
  }

  giveTextColor(props) {
    if (props.support)
      return '#474747';
    else
      return props.selected ? '#edc93a': '#fefef6';
  }

  componentWillReceiveProps(props) {
    var selectorStyle = Object.assign({}, this.state.selectorStyle);
    selectorStyle.display = props.selected ? 'block' : 'none';

    this.setState({
      displayName: this.props.name,
      linkPath: this.props.path,
      textColor: this.giveTextColor(props),
      selectorStyle: selectorStyle
    })
  }

  render() {
    return (
      <li onClick={() => this.props.updateUserSideState(this.state.linkPath)}>

        <Link
          to={this.state.linkPath}
          style={{ color: this.state.textColor}}>
          {this.state.displayName}
        </Link>

        <div style={this.state.selectorStyle}></div>
      </li>
    )
  }
}
