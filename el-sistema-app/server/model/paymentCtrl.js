
const config = require('./../config')
const stripe = require('stripe')(config.stripeKeys.secretKey)
module.exports = {
    charge: function(req, res){
        let db = req.app.get('db');
        console.log(req.body)
        let email = req.body.email
        stripe.customers.create({email: email})
            .then((customer)=>{
                 return stripe.customers.createSource(customer.id, {
                    source: {
                        object: 'card',
                        exp_month: req.body.exp.split('-')[1],
                        exp_year: req.body.exp.split('-')[0],
                        number: req.body.card,
                        cvc: req.body.cvc
                    }
                })
            })
            .then((source)=> {
                 return stripe.charges.create({
                    amount: (req.body.amount *100),
                    currency: 'usd',
                    customer: source.customer
                })
            }).then((charge) => {
                console.log(charge)
                 return res.status(200).json({success: true, msg: "Thank you for your support!"})
            }).catch((error) => {
                console.log(error)
                 return res.status(500).json({success: false, msg: "There was a problem with your payment, please try again!"})
            })
    }
}