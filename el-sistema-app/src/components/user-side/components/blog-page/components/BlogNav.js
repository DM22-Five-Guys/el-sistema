import React, {Component} from 'react';
import '../style.css';
import JazzBand from '../../../../../img/jazzband.jpg';
import share from '../../../../../img/share.png';
import oval from '../../../../../img/oval-2.png';
import arrow from '../../../../../img/chevron-right.png';
import profile from '../../../../../img/oval-88.png';
import notes from '../../../../../img/notes.png';

class BlogNav extends Component {
  render() {
    return (
      <div className='blog-container'>
        <div className='blog-nav-header'>
          <h1>El Sistema Blog</h1>
          <p>Button placeholder</p>
        </div>
        <div className='recent-post-header'>
          <h2>Recent Posts</h2>
        </div>
        <div className='recent-container'>
          <div className='col-md-4 shadow-box'>
            <img src={JazzBand} className='jazz-band'></img>

            <div className='details-box'>
              <ul className='shadow-box-ul'>
                <li className='shadow-box-title shadow-box-title'>Jazz Band Fired Up</li>
                <li>
                  <div className='details-line'></div>
                </li>
                <li>
                  <p className='box-date shadow-box-date'>June 5th, 2017</p>
                </li>
                <li>
                  <img src={share} className='share-img'></img>
                </li>
              </ul>
              <div className='box-link'>
                El Sistema Brass Brings The Heat
              </div>
              <div className='button'>
                <img src={oval} className='oval'></img>
                <img src={arrow} className='arrow'></img>
              </div>
              <div className='profile-box'>
                <ul className='shadow-box-ul'>
                  <li>
                    <img src={profile} className='profile'></img>
                  </li>
                  <li className='profile-name'>
                    Greg McCann
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className='col-md-4 shadow-box'>
            <img src={JazzBand} className='jazz-band'></img>
            <div className='details-box'>
              <ul className='shadow-box-ul'>
                <li className='shadow-box-title shadow-box-title'>Jazz Band Fired Up</li>
                <li>
                  <div className='details-line'></div>
                </li>
                <li>
                  <p className='box-date shadow-box-date'>June 5th, 2017</p>
                </li>
                <li>
                  <img src={share} className='share-img'></img>
                </li>
              </ul>
              <div className='box-link'>
                El Sistema Brass Brings The Heat
              </div>
              <div className='button'>
                <img src={oval} className='oval'></img>
                <img src={arrow} className='arrow'></img>
              </div>
              <div className='profile-box'>
                <ul className='shadow-box-ul'>
                  <li>
                    <img src={profile} className='profile'></img>
                  </li>
                  <li className='profile-name'>
                    Greg McCann
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className='col-md-4 shadow-box'>
            <img src={JazzBand} className='jazz-band'></img>
            <div className='details-box'>
              <ul className='shadow-box-ul'>
                <li className='shadow-box-title shadow-box-title'>Jazz Band Fired Up</li>
                <li>
                  <div className='details-line'></div>
                </li>
                <li>
                  <p className='box-date shadow-box-date'>June 5th, 2017</p>
                </li>
                <li>
                  <img src={share} className='share-img'></img>
                </li>
              </ul>
              <div className='box-link'>
                El Sistema Brass Brings The Heat
              </div>
              <div className='button'>
                <img src={oval} className='oval'></img>
                <img src={arrow} className='arrow'></img>
              </div>
              <div className='profile-box'>
                <ul className='shadow-box-ul'>
                  <li>
                    <img src={profile} className='profile'></img>
                  </li>
                  <li className='profile-name'>
                    Greg McCann
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='notes-container'>
            <img src={notes} className='notes-img'></img>
          </div>

</div>




</div>

    )
  }
}
export default BlogNav;
