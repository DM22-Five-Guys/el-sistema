import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendNotification } from './../../../../../reducers/notify.reducer';


import '../style.css';

class Notifications extends Component {
    renderMessage(field){
        return(
            <textarea name="message"></textarea>
        )
    }
    renderCheckbox(field){
        return(
            <div>
                <label>All=></label>
                <input type="checkbox"></input>
            </div>
        )
    }

    render() {
        return (
            <div className='container'>
                <div className='text-content-container'>
                    <h1 className='container-fluid-text'>Send: Text Notifications</h1>
                    <div className="notification-body">
                        <form>
                            <input type="text" name=""></input>
                            <br/>
                            <Field name="message" component={this.renderMessage}/>
                            <hr/> 
                            <div>
                                <label>All=></label>
                                <input type="checkbox"></input>
                            </div>
                            <div>
                                <label>1=></label>
                                <input type="checkbox"></input>
                            </div>
                            <div>
                                <label>2=></label>
                                <input type="checkbox"></input>
                            </div>
                            <hr/> 
                            <div> 
                                <div> 
                                    <p>CANCEL</p>                           
                                </div>
                                <div>
                                    <p>SEND</p>                                                                               
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