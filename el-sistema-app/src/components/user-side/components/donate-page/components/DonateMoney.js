import React, { Component } from 'react';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';
import {Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux'
import { donate } from './../../../../../reducers/donate.reducer';
import './DonateMoney.style.css'

class DonateMoney extends Component{
    constructor(){
        super()
        this.state ={
            email: ''
        }
    }    
    
    render(){
        return(
            <div>
                <div className="donate-money-container">
                    
                    <input value={this.state.email} type="email" placeholder="email" onChange={ (e)=> {this.setState({email: e.target.value })}}/>
                    
                    <CardNumberElement/>
                    <CardExpiryElement/>
                    <CardCVCElement/>
                    {this.props.stripe.createToken({email: this.state.email}).then(token => console.log(token))}
                    

                </div>
                
            </div>
        )
    }
}

export default connect(null, { donate })(injectStripe(DonateMoney));