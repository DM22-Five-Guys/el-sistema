import React, {Component} from 'react';
import '../style.css';
import switchOn from '../../../../../img/switch-on.png';

class MediaNav extends Component {
  render() {
    return (
      <div className='media-container'>
        <div className='media-header-container'>
          <ul className='photo-video'>
            <li className='media-photo-header'>
              <h1>Photo</h1>
            </li>
            <li className='media-header-button'>
              <img src={switchOn} className='switch-button'></img>
            </li>
            <li className='media-video-header'>
              <p>Video</p>
            </li>
          </ul>
        </div>
        <div className='media-blocks-container'>
          <div className='row'>
          <ul className='five-row-block'>
            <li><div className='media-blocks  col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          </ul>
          <ul className='four-row-block'>
            <li><div className='media-blocks'>

            </div></li>
            <li><div className='media-blocks'>

            </div></li>
            <li><div className='media-blocks'>

            </div></li>
            <li><div className='media-blocks'>

            </div></li>
          </ul>
          <ul className='five-row-block'>
            <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          </ul>
          <ul className='four-row-block'>
            <li><div className='media-blocks'>

            </div></li>
            <li><div className='media-blocks'>

            </div></li>
            <li><div className='media-blocks'>

            </div></li>
            <li><div className='media-blocks'>

              </div></li>
          </ul>
          <ul className='five-row-block'>
            <li><div className='media-blocks col-md-2'>

            </div>
          </li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

            </div></li>
          <li><div className='media-blocks col-md-2'>

          </div></li>
          </ul>
        </div>
</div>
      </div>
    )
  }
}

export default MediaNav;
