import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import { completeCheckout } from './../../../../../reducers/donate.reducer';
import './DonateMoney.style.css';
import visa from './../../../../../img/visa.png';
import paypal from './../../../../../img/paypal.png';
import ssl_verisign from './../../../../../img/ssl_verisign.png';
import ssl_badge from './../../../../../img/ssl_badge.png'


class DonateMoney extends Component{  
    constructor(){
        super()
        this.state={
            value: "100"
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderEmailField(field){
        return(
            <div>
                <input className={field.className} type="email" placeholder={field.placeholder} {...field.input}/>
                <div className="donate-error-message">{field.meta.touched?field.meta.error:''}</div>
            </div>
        )
    }
    renderNumberField(field){
        return(
            <div>
                <input className={field.className} placeholder={field.placeholder} {...field.input} type={field.type} value={field.value}/>
                <div className="donate-error-message">{field.meta.touched?field.meta.error:''}</div>
            </div>
        )
    }
    renderDateField(field){
        return(
            <div>
                <input className={field.className} placeholder={field.placeholder} {...field.input} type="date" />
                <div className="donate-error-message">{field.meta.touched?field.meta.error:''}</div>
            </div>
        )
    }
    renderSliderField(field){
        return (
        <div>
            <input min="0" max="200" type="range" className={field.className} {...field.input} />
        </div>
        )
    }

    onSubmit(values){
        console.log(values)
        completeCheckout(values);
       
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <div>
                <div className="donate-money-container">
                    <h1 className="donate-money-title">Donate</h1>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <div className="email-field">
                            <label className="donate-money-email-label" htmlFor="email">Email</label>
                            <Field className="donate-money-email" name="email" component={this.renderEmailField}/>
                        </div>
                    <div className="amount-field">
                        <Field className="donate-money-amount" name="amount" id="money-amount" placeholder={100} component={this.renderNumberField} type="number" value={ this.state.value }/>
                        <input min="5" max="200" step="1" type="range" className="donate-money-slider" name="slider" id="money-slider" onChange={(e)=> this.setState({value: e.target.value.toString()})}/>
                
                        <img className="visa-logo" src={visa} alt="visa-logo"/>
                    </div>
                    
                    <div className="card-field">
                        <label className="donate-money-card-label" htmlFor="card">Credit card number</label>
                        <Field className="donate-money-card" name="card" placeholder="ex: 4242 4242 4242 4242" component={this.renderNumberField}/>                     
                    </div>
                    
                    
                    <div className="donate-money-cvc-exp">
                        <div>
                            <label className="donate-money-cvc-label" htmlFor="cvc">CVC/CVV</label>
                            <Field className="donate-money-cvc" name="cvc" placeholder="ex: 123" component={this.renderNumberField}/>
                        </div>
                       <div>
                            <label htmlFor="exp" className="donate-money-exp-label">Expiration</label>
                            <Field name="exp" className="donate-money-exp" component={this.renderDateField}/>
                       </div>
                        
                    </div>
                    
                    <div className="button-container">
                        <button className="donate-btn" type="submit">Submit</button>
                    </div>
                    <hr className="divider"/>
                    <div className="bottom-title-container">
                        <h4 className="bottom-title" >or select other payment method</h4>
                    </div>
                    <div className="paypal-container">
                        <div className="paypal-btn"><span className="paypal-text">Pay with </span><img className="paypal-img" src={paypal} alt="PayPal Logo"/></div>
                    </div>
                    <div className="security-container">
                        <img className="ssl-verisign-img" src={ssl_verisign} alt="ssl_verisign"/>
                        <img className="ssl-badge-img" src={ssl_badge} alt="ssl_badge"/>
                    </div>

                    

                    </form>
                </div>
                
            </div>
        )
    }
}
// validating form
function validate(values){
    const errors = {}
    function emailValidator(str){
        let reg = /(\w+|\d+)\.?(\w+|\d+)@\w+\.\w{2,}/
        return reg.test(str)
    }
    if(!emailValidator(values.email)){
        errors.email = "You must enter a valid email";
    }
    if(!values.amount){
        errors.amount = "You must enter an amount";
    }
    if(!values.card){
        errors.card = "You must enter a valid card number";
    }
    if(!values.exp){
        errors.exp = "You must enter a valid date";
    }
    if(!values.cvc){
        errors.cvc = "You must enter a valid cvc"
    }
    return errors;
}

function mapStateToProps(state){
    return {
    }
}

export default reduxForm({validate, form: 'donateForm', fields: ['email','amount','card','exp','cvc']})(connect(mapStateToProps, { completeCheckout })(DonateMoney));