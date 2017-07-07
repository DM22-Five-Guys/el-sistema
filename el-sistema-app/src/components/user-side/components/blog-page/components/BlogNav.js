import React, {Component} from 'react';
import '../style.css';
import JazzBand from '../../../../../img/jazzband.jpg';
import share from '../../../../../img/share.png';
import oval from '../../../../../img/oval-2.png';
import arrow from '../../../../../img/chevron-right.png';
import profile from '../../../../../img/oval-88.png';
import notes from '../../../../../img/notes.png';
import blueTree from '../../../../../img/tree.jpg';
import violin from '../../../../../img/violin.jpg';
import blog6 from '../../../../../img/blog6.jpg';
import MusicNotes from '../../../../../img/musicNotes.jpeg';
import devmtn from '../../../../../img/maxresdefault.jpg';
import hair from '../../../../../img/hair.jpeg';
import pitts from '../../../../../img/Pitts.jpg';
import music from '../../../../../img/Music.png';
import violinKid from '../../../../../img/violinKid.jpg';
import venezuela from '../../../../../img/venezuela.jpg';
import conduct from '../../../../../img/conduct.jpg';
import sistema from '../../../../../img/elsistema.jpg';


class BlogNav extends Component {
  render() {
    return (
      <div className='blog-container'>
        <div className='blog-nav-header'>
          <h1>El Sistema Blog</h1>
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
 <div className='col-md-4'>
<div className='year-box'>
  <div className='year-number'>2017</div>
</div>
<div className='recent-post-boxes'>
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
<div className='recent-post-boxes'>
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
<div className='recent-post-boxes'>
  <div className='profile-images'>
<img src={blueTree} className='blue-tree'></img>
</div>
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

<div className='recent-post-boxes'>
  <div className='profile-images'>
<img src={violin} className='violin'></img>
</div>
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
 </div>
<div className='col-md-4'>
  <div className='recent-post-boxes'>
    <div className='profile-images'>
  <img src={blog6} className='blog-trumpet-kid'></img>
  </div>
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
  <div className='recent-post-boxes'>
    <div className='profile-images'>
  <img src={devmtn} className='devmtn'></img>
  </div>
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
  <div className='recent-post-boxes'>
    <div className='profile-images'>
  <img src={hair} className='hair'></img>
  </div>
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
  <div className='recent-post-boxes'>
    <div className='profile-images'>
  <img src={pitts} className='pitts'></img>
  </div>
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
  <div className='recent-post-boxes'>
    <div className='profile-images'>
  <img src={music} className='music'></img>
  </div>
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


</div>
<div className='col-md-4'>
  <div className='recent-post-boxes'>
    <div className='profile-images'>
  <img src={violinKid} className='violin-kid'></img>
  </div>
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
  <div className='year-box-2016'>
    <div className='year-number'>2016</div>
  </div>
  <div className='recent-post-boxes'>
    <div className='profile-images'>
  <img src={venezuela} className='venezuela'></img>
  </div>
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
  <div className='recent-post-boxes'>
    <div className='profile-images'>
  <img src={conduct} className='conduct'></img>
  </div>
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
  <div className='recent-post-boxes'>
    <div className='profile-images'>
  <img src={sistema} className='sistema-image'></img>
  </div>
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




</div>



</div>

</div>

    )
  }
}
export default BlogNav;
