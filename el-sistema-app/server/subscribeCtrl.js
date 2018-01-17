var exports = module.exports = {}

exports.addSubsciption = function (req, res) {
    let db = req.app.get('db');
    console.log(req.user);
    console.log(req.body);
    res.status(200).send('It worked');
}