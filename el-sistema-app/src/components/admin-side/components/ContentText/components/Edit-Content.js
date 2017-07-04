import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createContent } from './../../../../../reducers/content.reducer';
import '../style.css';

class EditContent extends Component{
  constructor(){
    super()
    
    this.onSubmit = this.onSubmit.bind(this)
  
  }
    renderTextField(field){
        return (
          <div>
            <input  placeholder={field.placeholder} className={field.className} {...field.input}  type="text"/>
          </div>
        )
    }
    renderSelectField(field){
        return(
          <div>
            <select type='text' className={field.className} {...field.input}> 
              <option value="Quotes">Quotes</option>
              <option value="Curriculum">Curriculum</option>
            </select>
          </div>
        )
      }
    onSubmit(values){
      console.log(values)
      this.props.createContent(values)
    }
  render(){
    const { handleSubmit } = this.props
    return(
      <div className='container'>
<div className='edit-container'>
<h1 className='add-text-content-header'>Add New Text Content</h1>
      <form onSubmit={handleSubmit(this.onSubmit)}>
<ul className='edit-catagory-title'>
<li className='catagory-title-li'>
  <Field name="type" component={this.renderSelectField} />

<div className='catagory-title-line' ></div>
</li>
<li className='edit-title-li'>
<Field name="title" placeholder='Title' className='edit-title' component={this.renderTextField}></Field>
<div className='edit-title-line'></div>
</li>
</ul>

<Field name="description" placeholder='Description' className='long-bio-placeholder' component={this.renderTextField}></Field>
<div className='long-bio-line'></div>

<div className='buttons-container'>
<ul className='buttons'>
  <li className='list-button'>
    <div className='save-button'>
      <button type="submit" className='save-text'>SAVE</button>
    </div>
    </li>
  <li className='list-button'>
    <div className='cancel-button' >
    <button type="button" className='cancel-text'>CANCEL</button>
    </div>
  </li>
</ul>
</div>
    </form>
</div>




</div>
)
}
}
export default connect(null, { createContent })(reduxForm({form: 'contentForm'})(EditContent));