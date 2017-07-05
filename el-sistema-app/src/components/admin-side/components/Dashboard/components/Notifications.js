import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendNotification } from './../../../../../reducers/notify.reducer';


import '../style.css';

class Notifications extends Component {
    constructor(){
        super();
        this.state = {
            noteLen: 0,
            type: [],
            ca: false,
            c1: false,
            c2: false
        }
        this.checkboxChange = this.checkboxChange.bind(this);
    }
    renderMessage(field){
        return(
            <div>
                <label>Message</label> 
                <br/>           
                <textarea className="message-box" name="message" {...field.input}></textarea>
            </div>
        )
    }

    renderCheckbox(field){
        return(
            <div>
                <input className="checkbox-custom" type="checkbox" checked={field.val} {...field.input} onChange={(e)=>{field.checkboxChange(e.target.value, field.input.name)}}></input>
                <label className="checkbox-label">{field.label}</label>
            </div>
        )
    }

    checkboxChange(val, name){
        if (name === 'ca'){
            this.setState({
                ca: !this.state.ca,
                c1: !this.state.ca,
                c2: !this.state.ca
            })
        } else if( name === 'c1'){
            if (this.state.ca && this.state.c1){
                this.setState({
                    ca: !this.state.ca,
                    c1: !this.state.c1
                })
            } else {
                this.setState({
                    c1: !this.state.c1
                })
            }
        } else if( name === 'c2'){
            if (this.state.ca && this.state.c2){
                this.setState({
                    ca: !this.state.ca,
                    c2: !this.state.c2
                })
            } else {
                this.setState({
                    c2: !this.state.c2
                })
            }
        }

    }

    onSubmit(values){
        console.log(values)
        let tempArr = this.state.type.slice(0);
        if (this.state.c1){
            tempArr.push('1');
        }
        if (this.state.c2){
            tempArr.push('2');
        }
        console.log(tempArr);
        if (tempArr.length){
            values.type = tempArr;
            console.log(values)
            sendNotification(values);
        }
        this.props.reset();
        this.setState({
            ca: false,
            c1: false,
            c2: false
        })
    }
    cancel(){
        this.props.reset();
        this.setState({
            ca: false,
            c1: false,
            c2: false,
            noteLen: 0
        })
    }
    handleChange(e){
        this.setState({
            noteLen: e.length
        })
    }
    render() {
    const { handleSubmit } = this.props;
        return (
            <div className='container'>
                <div className='text-content-container'>
                    <h1 className='container-fluid-text'>Send: Text Notifications</h1>
                    <div className="notification-body">
                        <form className='notify-form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            {/*<input type="text" name="title" placeholder="Title" ></input>
                            <p>{this.state.noteLen}/40</p>*/}
                            <br/>
                            <Field name="message" onChange={(e) => {this.handleChange(e.target.value)}} component={this.renderMessage}/>
                            <p>{this.state.noteLen}/140</p>                            
                            <hr/>
                            <div className="checkbox-container">
                                <Field name='ca' val={this.state.ca} label="All" checkboxChange={this.checkboxChange} component={this.renderCheckbox}/> 
                                <Field name='c1' val={this.state.c1} label="1" checkboxChange={this.checkboxChange} component={this.renderCheckbox}/> 
                                <Field name='c2' val={this.state.c2} label="2" checkboxChange={this.checkboxChange} component={this.renderCheckbox}/>
                            </div>
                            <hr/> 
                            <div className="button-container"> 
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