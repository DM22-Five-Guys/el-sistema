
const config = require('./../config')
const stripe = require('stripe')(config.stripeKeys.secretKey)
module.exports = {
    charge: function(req, res){
        let db = req.app.get('db');
        let paymentToken = req.body.stripeToken;
        let chargeAmount = req.body.chargeAmount;
        let charge = stripe.charges.create({
            amount: chargeAmount,
            currency: 'usd',
            source: paymentToken
        }, function(err, charge){
            if(err && err.type === "StripeCardError"){
                console.log("Your card was declined");
            }
        });
        res.status(200).json({success:true, msg: "Thank you for your support!"});
    }
}