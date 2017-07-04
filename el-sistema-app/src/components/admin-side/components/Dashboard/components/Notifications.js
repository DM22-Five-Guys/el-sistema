import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendNotification } from './../../../../../reducers/notify.reducer';


import '../style.css';

class Notifications extends Component {
    constructor(){
        super();
        this.state = {
            type: 1
        }
    }
    renderMessage(field){
        return(
            <textarea name="message" {...field.input}></textarea>
        )
    }

    onSubmit(values){
        console.log(values)
        if (this.state.type){
            values.type = this.state.type;
            this.props.sendNotification(values);
        }
        this.props.reset(); 
    }
    cancel(){
        this.props.reset();
    }
    render() {
    const { handleSubmit } = this.props;
        return (
            <div className='container'>
                <div className='text-content-container'>
                    <h1 className='container-fluid-text'>Send: Text Notifications</h1>
                    <div className="notification-body">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <input type="text" name=""></input>
                            <br/>
                            <Field name="message" component={this.renderMessage}/>
                            <hr/> 
                            <div>
                                <label>All</label>
                                <input type="checkbox"></input>
                            </div>
                            <div>
                                <label>1</label>
                                <input type="checkbox"></input>
                            </div>
                            <div>
                                <label>2</label>
                                <input type="checkbox"></input>
                            </div>
                            <hr/> 
                            <div> 
                                <div className='list-button'> 
                                    <button type="button" className='cancel-button cancel-text' onClick={(e)=>this.cancel()}>CANCEL</button>                         
                                </div>
                                <div className='list-button'>
                                    <button type="submit" className='save-button save-text'>SEND</button>                                                                         
                                </div>                           
                            </div>                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values){
  let errors = {};
  if (!values.message){
    errors.title = "⚠ Please enter a message to send.";
  }
  return errors;
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, { sendNotification })( reduxForm({ validate, form: 'sendNotification' }) ( Notifications ));