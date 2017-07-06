import React, { Component } from 'react';
import DonateMoney from './components/DonateMoney';

import './Donate-Page.style.css';

class DonatePage extends Component {
  render() {
    return (
      <div className="donate-page-container">
          <h1 className="donate-title">Donate Page</h1>
          <div className="donate-money-outter-container">
            <DonateMoney/>
          </div>
            
      </div>
    )
  }
}

export default DonatePage;
