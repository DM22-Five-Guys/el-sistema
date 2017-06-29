import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addBlog } from './../../../../../reducers/blog.reducer';



import '../style.css';
import camera from '../../../../../img/blue-camera.png';

class AddBlog extends Component{
  contentPH = 'Write your blog content here!';
  renderTitleField(field){
    return (
      <li className='blog-title-li'>
          <input placeholder='Title' type='text' className='blog-title' {...field.input}></input>
          <div className='blog-title-line'></div>
      </li>
    )
  }
  renderCaptionField(field){
    return (
      <li className='blog-caption-li'>
          <input placeholder='Caption' type='text' className='blog-caption' {...field.input}></input>
          <div className='blog-caption-line'></div>
      </li>
    )
  }
  renderContentField(field){
    return (
      <div>
        <h2 className='blog-content-header'>Blog Content</h2>
        <textarea placeholder='Write your blog here:' type='text' className='blog-content-textarea' {...field.input}></textarea>
        {/*<div className='blog-content-line'></div>*/}
      </div>
    )
  }

  onSubmit(values){
    console.log(values);
    this.props.addBlog(values);
    this.props.reset(); 
  }
  cancel(){
    this.props.reset();
  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='container'>
        <div className='row'>
            <h1 className='add-blog-header'>Add New Blog</h1>
            <div className='blog-caption-title-container'>
                <div className='col-md-9'>
                    <ul className='blog-title-caption'>
                        <Field name="title" component={this.renderTitleField}/>
                        <Field name="caption" component={this.renderCaptionField}/>
                    </ul>
                    <Field name="content" component={this.renderContentField}/>
                </div>
            </div>

            <div className='col-md-2 rectangles'>

                <div className='blog-rectangle'>
                    <img src={camera} className='camera img-responsive' alt=""></img>
                </div>
                <figcaption className='blog-picute-header'>Add Top Full Picture</figcaption>

                <div className='blog-rectangle'>
                    <img src={camera} className='camera img-responsive' alt=""></img>

                </div>
                <figcaption className='blog-picute-header'>Add 2nd Full Picture</figcaption>
            </div>
        </div>
        <div className='buttons-container'>
            <ul className='buttons'>
                <li className='list-button'>
                    <button className='save-button save-text'>SAVE</button>
                </li>
                <li className='list-button'>
                    <button className='cancel-button cancel-text' onClick={(e)=>this.cancel()}>CANCEL</button>
                </li>
            </ul>
        </div>
    </form>
    )
  }
}

// function validate(values){

// }

function mapStateToProps(state) {
    return {
      user: state.user
    }
}

export default connect(mapStateToProps, { addBlog })(reduxForm({form: 'addBlog'})(AddBlog));
