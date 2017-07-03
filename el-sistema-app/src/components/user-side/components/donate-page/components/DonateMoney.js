import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux'
import { completeCheckout } from './../../../../../reducers/donate.reducer';
import './DonateMoney.style.css'
import Iframe from 'react-iframe'

class DonateMoney extends Component{  
    constructor(){
        super()
        this.onSubmit = this.onSubmit.bind(this)
    }
    renderEmailField(field){
        return(
            <div>
                <input type="email" placeholder={field.placeholder} {...field.input} type="email"/>
            </div>
        )
    }
    renderNumberField(field){
        return(
            <div>
                <input placeholder={field.placeholder} {...field.input} type="number" />
            </div>
        )
    }
    renderDateField(field){
        return(
            <div>
                <input placeholder={field.placeholder} {...field.input} type="date" />
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
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field name="email" placeholder="email" component={this.renderEmailField}/>
                    <Field name="amount" placeholder="ex: 100" component={this.renderNumberField}/>
                    <Field name="card" placeholder="ex: 4242 4242 4242 4242" component={this.renderNumberField}/>
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