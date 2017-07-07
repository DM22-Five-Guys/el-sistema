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
            type: "picture",
            fileurl: null
        }
    }
    

    setType(value){
        if(value === "picture"){
            this.setState({
                type: "picture"
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
            fileurl: url
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
            <option value="picture">Picture</option>
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
        <textarea placeholder='Write your description here:' type='text' className='media-description-textarea' {...field.input}></textarea>
        <div className="error-message">{field.meta.touched?field.meta.error:''}</div>
      </div>
    )
  }

  onSubmit(values){
//    if(this.state.type === 'video' && this.state.video){
//        this.props.addVideo(values)
//    } else {
//        this.props.addPicture(values);
//    }
//    this.props.reset(); 
      values.fileurl = this.state.fileurl
      if(this.state.type === 'video'){values.mediatypeid = 2}
      if(this.state.type === 'picture'){values.mediatypeid = 1}
      console.log(values)
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
                    <Field name="desc" component={this.renderContentField}/>
                    
                    <div className='blog-rectangle'>
                        <figcaption className='video-icon-text'>
                            {this.state.type === "picture" ? "Picture" : "Video"}
                        </figcaption>
                        {
                            this.state.type === "picture" ? <img src={camera} className='camera img-responsive' alt=""></img> : <Iframe url={this.state.fileurl}
                                width="100%"
                                height="90%"
                                display="initial"
                                position="relative"
                                allowFullScreen/>
                        }
                    </div>
                    {
                        this.state.type === "picture" ? <input type="file"/> : <input onChange={(e) => this.setVideo(e.target.value)} placeholder="YouTube URL here" type="url"/>
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
    errors.title = "⚠ Please enter a title for the media.";
  }
  if (!values.desc){
    errors.desc = "⚠ Please enter some description of the media."
  }
//  console.log(errors);  
  return errors;
}

function mapStateToProps(state) {
    return {
      user: state.user
    }
}

export default connect(mapStateToProps, null)( reduxForm({ validate, form: 'addMedia' }) ( AddMedia ));

