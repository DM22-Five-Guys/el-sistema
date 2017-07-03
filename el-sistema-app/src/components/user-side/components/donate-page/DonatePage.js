import React, { Component } from 'react';
import DonateMoney from './components/DonateMoney';

import './Donate-Page.style.css';

class DonatePage extends Component {
  render() {
    return (
      <div>
          <h1 className="donate-title">Donate Page</h1>
            <DonateMoney/>
      </div>
    )
  }
}

export default DonatePage;
