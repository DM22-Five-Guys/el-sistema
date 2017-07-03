import React, { Component } from 'react';
import '../style.css';
import camera from '../../../../../img/blue-camera.png';
import { connect } from 'react-redux'
import {Field, reduxForm } from 'redux-form'
import { register } from './../../../../../reducers/users.reducer'

class AddVolunteer extends Component{
  
        renderTextField(field){
        return(
            <div>
                <input placeholder={field.placeholder} className={field.className} {...field.input} type="text" />
            </div>
        )
    }
    renderEmailField(field){
        return(
            <div>
                <input placeholder={field.placeholder} {...field.input} className={field.className} type="email"/>
            </div>
        )
    }
    renderBoolFields(field){
        return(
        <div>
            <label htmlFor={field.name}>{field.label}</label>
            <input type="checkbox" {...field.input} className='permission'/>
        </div>
        )
    }
    onSubmit(values){
        this.props.register(values)
        this.props.reset()
    }

  // change.
  render(){
     const { handleSubmit } = this.props;
    return(
      <div className='container'>

      <div className='add-volunteer-container'>
          <h1 className='add-volunteer'>Add New Volunteer</h1>
      </div>
<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
<div className='container '>
  <div className='row'>
    <div className='col-md-9'>
<div className='first-last-name-container'>
<ul className='first-last-name-ul'>
<li className='first-name-li'>
<Field name="firstname" placeholder='First name' className='first-name' component={this.renderTextField}></Field>
<div className='first-name-line' ></div>
</li>
<li className='last-name-li'>
<Field name="lastname" placeholder='Last name' className='last-name' component={this.renderTextField}></Field>
<div className='last-name-line'></div>
</li>
</ul>
</div>



  <Field name="email" placeholder='Email Address' className='email-placeholder' component={this.renderEmailField}></Field>
  <div className='email-address-line'></div>



  <Field name="job" placeholder='Job' className='job-placeholder' component={this.renderTextField}></Field>
  <div className='job-line'></div>


  <Field name="shortbio" placeholder='Short Bio' className='short-bio-placeholder' component={this.renderTextField}></Field>
  <div className='short-bio-line'></div>



  <Field name="longbio" placeholder='Long Bio' className='long-bio-placeholder' component={this.renderTextField}></Field>
  <div className='long-bio-line'></div>


<div className='permissions-container'>
  <h1 className='permissions-header'>Permissions</h1>
<div className='checkbox-container'>
<ul className='all-permissions'>
<li className='permissions'><Field name="superadmin" placeholder='All' component={this.renderBoolFields}></Field>       All</li>
<li className='permissions'><Field name="caneditblogs" placeholder='Blog'  component={this.renderBoolFields}></Field>       Blog</li>
  <li className='permissions'><Field name="caneditvideos" placeholder='Videos' component={this.renderBoolFields}></Field>     Videos</li>
    <li className='permissions'><Field name="caneditclasses" placeholder='Classes'  component={this.renderBoolFields}></Field>     Classes</li>
      <li className='permissions'><Field name="caneditperformances" placeholder='Performance'  component={this.renderBoolFields}></Field>        Performance</li>
        <li className='permissions'><Field name="caneditcontent" placeholder='Content'  component={this.renderBoolFields}></Field>    Content</li>
</ul>
<div className='buttons-container'>
<ul className='buttons'>
  <li className='list-button'>
    <div className='save-button'>
      <button className='save-text' type="submit">SAVE</button>
    </div>
    </li>
  <li className='list-button'>
    <div className='cancel-button' >
    <button onClick={()=> this.props.reset()} type='button' className='cancel-text'>CANCEL</button>
    </div>
  </li>
</ul>
</div>
</div>
</div>
</div>
<div className='col-md-1'>
  <div className='circle'>
    <img src={camera} className='camera img-responsive'></img>
  </div>
  <div className='rectangle'>
    <img src={camera} className='camera img-responsive'></img>
  </div>
</div>
</div>
</div>
</form>
</div>





    )
  }
}
export default connect(null, { register })(reduxForm({form: 'registerUserForm'})(AddVolunteer))
