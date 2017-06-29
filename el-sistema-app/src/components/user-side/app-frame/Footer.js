import React, { Component } from 'react';
import StayConnected from './components/StayConnected';
import Committed from './components/Committed';
import FooterNav from './components/FooterNav';
// import FooterFooter from './component/FooterFooter';
import footerContent from './assets/footerContent';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <StayConnected content={footerContent.stay_connected}/>
          <Committed content={footerContent.committed} />
          <FooterNav {...this.props} />
        </div>
      </footer>
    )
  }
}

export default Footer;
