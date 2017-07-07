import React, {Component} from 'react';
import '../style.css';
import switchOn from '../../../../../img/switch-on.png';
import Image1 from '../../../../../img/cello.jpeg';
import Image2 from '../../../../../img/Music.png';
import Image3 from '../../../../../img/3.jpg';
import Image4 from '../../../../../img/4.jpeg';
import Image5 from '../../../../../img/5.jpeg';
import Image6 from '../../../../../img/9.jpeg';
import Image7 from '../../../../../img/12.jpeg';
import Image8 from '../../../../../img/15.jpeg';
import Image9 from '../../../../../img/17.jpg';
import Image10 from '../../../../../img/conduct.jpg';
import Image11 from '../../../../../img/musicNotes.jpeg';
import Image12 from '../../../../../img/Penguins.png';
import Image13 from '../../../../../img/violinKid.jpg';
import Image14 from '../../../../../img/love.jpg';
import Image15 from '../../../../../img/hair.jpeg';
import pitts from '../../../../../img/Pitts.jpg';
import music from '../../../../../img/Music.png';
import violinKid from '../../../../../img/violinKid.jpg';
import venezuela from '../../../../../img/venezuela.jpg';
import conduct from '../../../../../img/conduct.jpg';
import devmtn from '../../../../../img/maxresdefault.jpg';
import sistema from '../../../../../img/elsistema.jpg';
import shareButton from '../../../../../img/share.png';
import loadPhotos from '../../../../../img/read-more-button.png';
import backToTop from '../../../../../img/return-to-top.png';


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
            <li className='media-block-list-one'><div className='media-blocks  col-md-2'>
<img src={Image1} className='media-picture'></img>
<ul className='media-block-header'>
  <li>3 Days</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-two'><div className='media-blocks col-md-2'>
<img src={Image2} className='media-picture'></img>
<ul className='media-block-header'>
  <li>6 Days</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-three'><div className='media-blocks col-md-2'>
<img src={Image3} className='media-picture'></img>
<ul className='media-block-header'>
  <li>7 Days</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-four'><div className='media-blocks col-md-2'>
<img src={Image4} className='media-picture'></img>
<ul className='media-block-header'>
  <li>10 Days</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-five'><div className='media-blocks col-md-2'>
<img src={Image5} className='media-picture'></img>
<ul className='media-block-header'>
  <li>23 Days</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          </ul>
          <ul className='four-row-block'>
            <li  className='media-block-list-one'><div className='media-blocks col-md-4'>
<img src={Image6} className='media-picture'></img>
<ul className='media-block-header'>
  <li>25 Days</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-two'><div className='media-blocks col-md-4'>
<img src={Image7} className='media-picture'></img>
<ul className='media-block-header'>
  <li>29 Days</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-three'><div className='media-blocks col-md-4'>
<img src={Image8} className='media-picture'></img>
<ul className='media-block-header'>
  <li>1 Month</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-four'><div className='media-blocks col-md-4'>
<img src={Image9} className='media-picture'></img>
<ul className='media-block-header'>
  <li>1 month</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          </ul>
          <ul className='five-row-block'>
            <li className='media-block-list-one'><div className='media-blocks col-md-2'>
<img src={Image10} className='media-picture'></img>
<ul className='media-block-header'>
  <li>1 month</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-two'><div className='media-blocks col-md-2'>
<img src={Image11} className='media-picture'></img>
<ul className='media-block-header'>
  <li>2 months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-three'><div className='media-blocks col-md-2'>
<img src={Image12} className='media-picture'></img>
<ul className='media-block-header'>
  <li>2 months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-four'><div className='media-blocks col-md-2'>
<img src={Image13} className='media-picture'></img>
<ul className='media-block-header'>
  <li>2 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-five'><div className='media-blocks col-md-2'>
<img src={Image14} className='media-picture'></img>
<ul className='media-block-header'>
  <li>3 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          </ul>
          <ul className='four-row-block'>
            <li className='media-block-list-one'><div className='media-blocks col-md-4'>
<img src={pitts} className='media-picture'></img>
<ul className='media-block-header'>
  <li>3 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-two'><div className='media-blocks col-md-4'>
<img src={music} className='media-picture'></img>
<ul className='media-block-header'>
  <li>3 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-three'><div className='media-blocks col-md-4'>
<img src={sistema} className='media-picture'></img>
<ul className='media-block-header'>
  <li>4 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-four'><div className='media-blocks col-md-4'>
<img src={conduct} className='media-picture'></img>
<ul className='media-block-header'>
  <li>4 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
              </div></li>
          </ul>
          <ul className='five-row-block'>
            <li className='media-block-list-one'><div className='media-blocks col-md-2'>
      <img src={venezuela} className='media-picture'></img>
      <ul className='media-block-header'>
        <li>4 Months</li>
        <li><img src={shareButton} className='share-img'></img></li>
      </ul>
            </div>
          </li>
          <li className='media-block-list-two'><div className='media-blocks col-md-2'>
<img src={violinKid} className='media-picture'></img>
<ul className='media-block-header'>
  <li>4 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-three'><div className='media-blocks col-md-2'>
<img src={devmtn} className='media-picture'></img>
<ul className='media-block-header'>
  <li>5 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-four'><div className='media-blocks col-md-2'>
<img src={music} className='media-picture'></img>
<ul className='media-block-header'>
  <li>1 month</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-five'><div className='media-blocks col-md-2'>
<img src={Image2} className='media-picture'></img>
<ul className='media-block-header'>
  <li>5 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>

          </div></li>
          </ul>
          <ul className='four-row-block'>
            <li className='media-block-list-one'><div className='media-blocks col-md-4'>
<img src={Image2} className='media-picture'></img>
<ul className='media-block-header'>
  <li>6 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-two'><div className='media-blocks col-md-4'>
<img src={Image2} className='media-picture'></img>
<ul className='media-block-header'>
  <li>6 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-three'><div className='media-blocks col-md-4'>
<img src={Image2} className='media-picture'></img>
<ul className='media-block-header'>
  <li>7 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
            </div></li>
          <li className='media-block-list-four'><div className='media-blocks col-md-4'>
<img src={Image2} className='media-picture'></img>
<ul className='media-block-header'>
  <li>7 Months</li>
  <li><img src={shareButton} className='share-img'></img></li>
</ul>
              </div></li>
          </ul>
        </div>
</div>
<div className='load-top-buttons-container'>
  <ul className='media-buttons'>
    <li className='load-more-button'>
      <img src={loadPhotos}></img>
    </li>
    <li className='back-to-top'>
      <img src={backToTop}></img>
    </li>
  </ul>
</div>
      </div>
    )
  }
}

export default MediaNav;
