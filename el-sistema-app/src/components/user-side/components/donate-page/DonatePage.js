import React, { Component } from 'react';
import DonateMoney from './components/DonateMoney';
import DonateInstrument from './components/DonateInstrument';

import './Donate-Page.style.css';

class DonatePage extends Component {
  render() {
    return (
      <div className="donate-page-container">
        <div className="donate-page-header">
          <h1 className="donate-title">Support El Sistema Pittsburgh</h1>
          <div className="donate-first-p">
              <h4 className="donate-first-p-title">Our Goals</h4>
              <p className="donate-first-paragraph">
                  El Sistema Pittsburgh provides Pittsburgh’s youth with accessible and intensive classical music instruction. Utilizing music as a vehicle for positive change, ESPGH promotes the development of music, cognitive and social skills, self-esteem, and community pride in youth.
              </p>
              <h4 className="donate-second-p-title">How Donations are Used</h4>
              <p className="donate-second-paragraph">
                100% of all Donations are used to help fund El Systema’s materials, teachers, and concerts. Paypal takes a slight cut of 7% but the rest is distributed based on what is needed at the time. El Systema complies with all E32c regulations and takes great pride in it’s transparency. 
              </p>
          </div>
          <div className="help-info">
            <h4 className="help-text">3 Ways to Help:</h4>
          </div>
        </div>

          
          <div className="donate-money-outter-container">
            <DonateMoney/>
            <DonateInstrument/>
          </div> {/* end of donate-money-outter-container */}
          <div className="donate-instrument-outter-container">
              
          </div>
            
      </div> 
    )
  }
}

export default DonatePage;
