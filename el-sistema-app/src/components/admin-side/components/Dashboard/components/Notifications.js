import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendNotification } from './../../../../../reducers/notify.reducer';


import '../style.css';

class Notifications extends Component {
    constructor(){
        super();
        this.state = {
            type: null
        }
        this.checkboxChange = this.checkboxChange.bind(this);
    }
    renderMessage(field){
        return(
            <textarea name="message" {...field.input}></textarea>
        )
    }

    renderCheckbox(field){
        return(
            <div>
                <input type="checkbox" {...field.input} onChange={(e)=>{field.checkboxChange(e.target.value, field.input.name)}}></input>
                <label>{field.label}</label>
            </div>
        )
    }

    checkboxChange(val, type){
        console.log(type);
        this.setState({
            type: type
        })
        console.log(this.state.type);
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
                            <Field name='all' label="All" checkboxChange={this.checkboxChange} component={this.renderCheckbox}/> 
                            <Field name='1' label="1" checkboxChange={this.checkboxChange} component={this.renderCheckbox}/> 
                            <Field name='2' label="2" checkboxChange={this.checkboxChange} component={this.renderCheckbox}/> 
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