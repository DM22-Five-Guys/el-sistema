const app = require('./index');
const db = app.get('db');
const nodemailer = require('nodemailer');
const config = require('./config');

var exports = module.exports = {}

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: config.nodemailer.auth.user,
        pass: config.nodemailer.auth.pass
    }
}, {
    // sender info
    from: 'elsistema@gmail.com'
});

exports.testEmail = function (req, res) {
    let message = {
        from: 'elsistema@gmail.com',
        to: req.params.emailAddress,
        subject: 'NodeMailer Test from NodeJS ✔',
        text: 'If you are reading this message (plain text), then the test was sucessful.',
        html: '<p>If you are reading this message (HTML), then the test was <h6>sucessful</h6>.</p>'
    }

    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return;
        }
        console.log('Message sent successfully!');
        console.log('Server responded with "%s"', info.response);
        transporter.close();
    });
    res.status(200).send("Test Complete")
}