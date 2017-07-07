import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux'
import { completeCheckout } from './../../../../../reducers/donate.reducer';
import './DonateMoney.style.css'

class DonateMoney extends Component{  
    constructor(){
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }
    renderEmailField(field){
        return(
            <div>
                <input className={field.className} type="email" placeholder={field.placeholder} {...field.input}/>
            </div>
        )
    }
    renderNumberField(field){
        return(
            <div>
                <input className={field.className} placeholder={field.placeholder} {...field.input} type="text" />
            </div>
        )
    }
    renderDateField(field){
        return(
            <div>
                <input className={field.className} placeholder={field.placeholder} {...field.input} type="date" />
            </div>
        )
    }
    renderSliderField(field){
        return (
        <div>
            <input type="range" className={field.className} {...field.input} value="50"/>
        </div>
        )
    }
    onSubmit(values){
        console.log(values)
        completeCheckout(values);
        // if(isValid){
        //     console.log("form is valid!");
        // } else {
        //     console.log("form is not valid!");
        // }
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
                        <Field className="donate-money-amount" name="amount" placeholder="100" component={this.renderNumberField}/>
                        <Field className="donate-money-slider" name="slider" id="money-slider" component={this.renderSliderField}></Field>
                    </div>
                    
                    <div className="card-field">
                        <label className="donate-money-card-label" htmlFor="card">Credit card number</label>
                        <Field className="donate-money-card" name="card" placeholder="ex: 4242 4242 4242 4242" component={this.renderNumberField}/>
                    </div>
                    
                    <Field name="exp" placeholder="Date" component={this.renderDateField}/>
                    <Field name="cvc" placeholder="ex: 123" component={this.renderNumberField}/>
                    <button type="submit">Submit</button>

                    </form>
                </div>
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return {

    }
}

export default reduxForm({form: 'donateForm', fields: ['email','amount','card','exp','cvc']})(connect(mapStateToProps, { completeCheckout })(DonateMoney));