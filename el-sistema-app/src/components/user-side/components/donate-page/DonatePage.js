import React, { Component } from 'react';
import DonateMoney from './components/DonateMoney';
import { Elements } from 'react-stripe-elements';

import './Donate-Page.style.css';

class DonatePage extends Component {
  render() {
    return (
      <div>
          <h1 className="donate-title">Donate Page</h1>
          <Elements>
            <DonateMoney/>
          </Elements>
      </div>
    )
  }
}

export default DonatePage;
