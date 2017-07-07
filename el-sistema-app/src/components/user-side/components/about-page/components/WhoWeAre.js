import React, { Component } from 'react';
import '../style.css';
import readmore from '../../../../../img/read-more-button.png';
import oval from '../../../../../img/oval-2.png';
import arrow from '../../../../../img/chevron-right.png';
import snoopy from '../../../../../img/snoopy.png';
import patty from '../../../../../img/peanut2.png';
import lucy from '../../../../../img/peanut5.png';
import frank from '../../../../../img/Franklin_link.png';
import linus from '../../../../../img/linus.png';
import charlie from '../../../../../img/charlie.png';
import blackBook from '../../../../../img/fill-183.png';
import blackTwit from '../../../../../img/fill-184.png';
import blackLinked from '../../../../../img/fill-209.png';
import connect from '../../../../../img/button-yellow.png';

class WhoWeAre extends Component {
  render() {
    return (
    <div className='about-us-container'>

      <div className='container'>
     <div className='who-we-are-header'>
       <h1>Who We Are</h1>
       <p>El Sistema is a philosophy of music education created in Venezuela in 1975. It is the brainchild of Venezuelan musician, politician, economist and philanthropist Dr. José Antonio Abreu. At the root of this philosophy is the idea that music education – specifically classical music education – can and should be used as a means of uplifting and unifying an underserved community, starting with the youth. All children over the age of 2 years are afforded the opportunity to own their own instrument, take private lessons, sing in a choir, and play in an orchestra for no cost. Most of the expenses are paid through government funding. El Sistema has touched the lives of over 2 million Venezuelan children, and over 180 núcleos* have been established in virtually every town and city, no matter how rural or urban.
</p>
<img src={readmore} className='readmore' alt=""></img>
     </div>
     </div>
<div className='parallax'></div>

    <div className='container'>
   <div className='mission-header'>
     <h1>Mission Statement</h1>
     <p>El Sistema Pittsburgh provides Pittsburgh’s youth with accessible and intensive classical music instruction. Utilizing music as a vehicle for positive change, ESPGH promotes the development of music, cognitive and social skills, self-esteem, and community pride in youth.
  </p>
  <img src={readmore} className='readmore' alt=""></img>
   </div>
   </div>
   <div className='parallax'></div>
     <div className='container'>
    <div className='curriculum-header'>
      <h1>Curriculum</h1>
      <p>Rehearsals for ESPGH are three days per week after the standard school day. On occasion, there are weekend rehearsal dates to help preparedness for upcoming events. Rehearsals address balances between instrument sections and emphasize playing exactly together, matching rhythms, styles, tones, and executions, such as bow strokes and articulations.
   </p>
   <img src={readmore} className='readmore' alt=""></img>
    </div>
    </div>
<div className='parallax'></div>

    <div className='container'>
   <div className='volunteers-header'>
     <h1>Volunteers</h1>
     <p>Curabitur elementum risus eget justo rhoncus placerat. Nunc suscipit mi vel ipsum rhoncus, dignissim malesuada purus convallis. Donec malesuada facilisis nunc, at lobortis dui tristique eu. Nunc auctor ipsum vel nisl finibus, at lacinia sapien commodo. Pellentesque varius eleifend enim, at mattis turpis pellentesque id. Fusce eget tincidunt quam, id suscipit ante.
  </p>
   </div>
   </div>
<div className='about-volunteer-profile'>
  <div className='container'>
  <div className='row'>
    <div className='col-md-4 volunteer-box'>
      <div className='blue-bg'></div>
        <ul className='volunteer-prof-button'>
          <li><img src={charlie} className='head-prof' alt=""></img></li>
          <li><img src={oval} className='oval-button' alt=""></img></li>
          <li><img src={arrow} className='arrow-button' alt=""></img></li>
        </ul>

       <div className='white-bg'>
         <div className='volunteer-name'>
           <h1>Charlie Brown</h1>
           <p>Volunteer Block Head</p>
         </div>
         <ul className='black-icons'>
           <li className='black-icon'><img src={blackBook} alt=""></img></li>
           <li className='black-icon'><img src={blackTwit} alt=""></img></li>
           <li className='black-icon'><img src={blackLinked} alt=""></img></li>
         </ul>
       </div>



    </div>

    <div className='col-md-4 volunteer-box'>
      <div className='gray-bg'></div>
      <ul className='volunteer-prof-button'>
        <li><img src={patty} className='head-prof' alt=""></img></li>
        <li><img src={oval} className='oval-button' alt=""></img></li>
        <li><img src={arrow} className='arrow-button' alt=""></img></li>
      </ul>
      <div className='white-bg'>
        <div className='volunteer-name'>
          <h1>Peppermint Patty</h1>
          <p>Volunteer Accountant</p>
        </div>
        <ul className='black-icons'>
          <li className='black-icon'><img src={blackBook} alt=""></img></li>
          <li className='black-icon'><img src={blackTwit} alt=""></img></li>
          <li className='black-icon'><img src={blackLinked} alt=""></img></li>
        </ul>
      </div>



    </div>
   <div className='col-md-4 volunteer-box'>
     <div className='blue-bg'></div>
       <ul className='volunteer-prof-button'>
         <li><img src={lucy} className='head-prof' alt=""></img></li>
         <li><img src={oval} className='oval-button' alt=""></img></li>
         <li><img src={arrow} className='arrow-button' alt=""></img></li>
       </ul>
     <div className='white-bg'>
       <div className='volunteer-name'>
         <h1>Lucy van Pelt</h1>
         <p>Volunteer Student Aid</p>
       </div>
       <ul className='black-icons'>
         <li className='black-icon'><img src={blackBook} alt=""></img></li>
         <li className='black-icon'><img src={blackTwit} alt=""></img></li>
         <li className='black-icon'><img src={blackLinked} alt=""></img></li>
       </ul>
     </div>




   </div>
  </div>
  <div className='row'>
    <div className='col-md-4 volunteer-box'>
        <div className='gray-bg'></div>
          <ul className='volunteer-prof-button'>
            <li><img src={frank} className='head-prof' alt=""></img></li>
            <li><img src={oval} className='oval-button' alt=""></img></li>
            <li><img src={arrow} className='arrow-button' alt=""></img></li>
          </ul>
      <div className='white-bg'>
        <div className='volunteer-name'>
        <h1>Franklin</h1>
        <p>Volunteer Music Teacher</p>
      </div>
      <ul className='black-icons'>
        <li className='black-icon'><img src={blackBook} alt=""></img></li>
        <li className='black-icon'><img src={blackTwit} alt=""></img></li>
        <li className='black-icon'><img src={blackLinked} alt=""></img></li>
      </ul>
        </div>




    </div>
    <div className='col-md-4 volunteer-box'>
      <div className='blue-bg'></div>
        <ul className='volunteer-prof-button'>
          <li><img src={snoopy} className='head-prof' alt=""></img></li>
          <li><img src={oval} className='oval-button' alt=""></img></li>
          <li><img src={arrow} className='arrow-button' alt=""></img></li>
        </ul>
      <div className='white-bg'>
        <div className='volunteer-name'>
          <h1>Snoopy</h1>
          <p>Volunteer Fighter Pilot</p>
        </div>
        <ul className='black-icons'>
          <li className='black-icon'><img src={blackBook} alt=""></img></li>
          <li className='black-icon'><img src={blackTwit} alt=""></img></li>
          <li className='black-icon'><img src={blackLinked} alt=""></img></li>
        </ul>
      </div>



    </div>
   <div className='col-md-4 volunteer-box'>
     <div className='gray-bg'></div>
       <ul className='volunteer-prof-button'>
         <li><img src={linus} className='head-prof' alt=""></img></li>
         <li><img src={oval} className='oval-button' alt=""></img></li>
         <li><img src={arrow} className='arrow-button' alt=""></img></li>
       </ul>
     <div className='white-bg'>
       <div className='volunteer-name'>
         <h1>Linus van Pelt</h1>
         <p>Volunteer UX Designer</p>
       </div>
       <ul className='black-icons'>
         <li className='black-icon'><img src={blackBook} alt=""></img></li>
         <li className='black-icon'><img src={blackTwit} alt=""></img></li>
         <li className='black-icon'><img src={blackLinked} alt=""></img></li>
       </ul>
     </div>
   </div>
  </div>
<div className='interested-volunteer'>
  <h1>Interested in becoming a volunteer?</h1>
  </div>
  <div className='connect-volunteer'>
    <img src={connect} alt=""></img>
  </div>
  <div className='location'>
    <h1>Our Location</h1>
  </div>
  <div className='street-address-container'>
<div className='street-address1'>
  <h1>6 Loop St, # 4 </h1>
</div>
<div className='street-address2'>
  <h1>
Pittsburgh, PA 15215</h1>

</div>
<div className='oval-thing'>

</div>
</div>

  </div>
</div>

<div className='container-whitespace'></div>

     </div>


    )
  }
}

export default WhoWeAre;
