import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
//import { addBlog } from './../../../../../reducers/blog.reducer';
import Iframe from 'react-iframe'

import '../style.css';
import camera from '../../../../../img/blue-camera.png';

class AddMedia extends Component{
  
    constructor(){
        super();
        this.state = {
            type: "photo",
            video: ""
        }
    }
    

    setType(value){
        if(value == "photo"){
            this.setState({
                type: "photo"
            })
        } else {
            this.setState({
                type: "video"
            })
        }
    }
    
    setVideo(value){
        var url = value.replace("watch?v=", "embed/");
        this.setState({
            video: url
        })
    }

  renderTitleField(field){
    return (
      <li className='blog-title-li'>
          <input placeholder='Title' type='text' className='blog-title' {...field.input}></input>
          <div className='blog-title-line'></div>
          <div className="error-message">{field.meta.touched?field.meta.error:''}</div>
      </li>
    )
  }
  renderCaptionField(field){
    return (
      <li className='blog-caption-li'>
          <select type='text' className='category-selector' {...field.input}>
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>
          <div className='blog-caption-line'></div>
      </li>
    )
  }
  renderContentField(field){
    return (
      <div>
        <h2 className='blog-content-header'>Media Description</h2>
        <textarea placeholder='Write your description here:' type='text' className='blog-content-textarea' {...field.input}></textarea>
        <div className="error-message">{field.meta.touched?field.meta.error:''}</div>
      </div>
    )
  }

  onSubmit(values){
    this.props.addBlog(values);
    this.props.reset(); 
  }
  cancel(){
    if(window.confirm("⚠ Are you sure you want to discard all changes?")){
      this.props.reset();
    }
  }

  render(){
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className='container'>
        <div className='row'>
            <h1 className='add-blog-header'>Add New Media</h1>
            <div className='blog-caption-title-container'>
                <div className='col-md-9'>
                    <ul className='blog-title-caption'>
                        <Field name="title" component={this.renderTitleField}/>
                        <Field name="caption" onChange={(e) => this.setType(e.target.value)} component={this.renderCaptionField}/>
                    </ul>
                    <Field name="content" component={this.renderContentField}/>
                    
                    <div className='blog-rectangle'>
                        <figcaption className='video-icon-text'>
                            {this.state.type === "photo" ? "Photo" : "Video"}
                        </figcaption>
                        {
                            this.state.type ==="photo" ? <img src={camera} className='camera img-responsive' alt=""></img> : <Iframe url={this.state.video}
                                width="100%"
                                height="90%"
                                display="initial"
                                position="relative"
                                allowFullScreen/>
                        }
                    </div>
                    {
                        this.state.type === "photo" ? <input type="file"/> : <input onChange={(e) => this.setVideo(e.target.value)} placeholder="YouTube URL here" type="url"/>
                    }
                </div>
            </div>

            <div className='col-md-2 rectangles'>

                
                

                
            </div>
        </div>
        <div className='buttons-container'>
            <ul className='buttons'>
                <li className='list-button'>
                    <button type="submit" className='save-button save-text'>SAVE</button>
                </li>
                <li className='list-button'>
                    <button type="button" className='cancel-button cancel-text' onClick={(e)=>this.cancel()}>CANCEL</button>
                </li>
            </ul>
        </div>
    </form>
    )
  }
}

function validate(values){
  let errors = {};
  if (!values.title){
    errors.title = "⚠ Please enter a title for the blog post.";
  }
  if (!values.content){
    errors.content = "⚠ Please enter some content in the blog post."
  }
  console.log(errors);  
  return errors;
}

function mapStateToProps(state) {
    return {
      user: state.user
    }
}

export default connect(mapStateToProps, null)( reduxForm({ validate, form: 'addMedia' }) ( AddMedia ));
