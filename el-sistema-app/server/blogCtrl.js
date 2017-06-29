var exports = module.exports = {}

exports.addBlog = function (req, res) {
    let db = req.app.get('db');
    console.log(req.user);
    db.blog.add_blog([req.body.title, req.body.caption, req.body.content]).then((blog)=>{
        console.log(blog);
        res.status(200).send('Blog Recieved.');
    }).catch((error)=>{
        console.log(error);
        res.status(400).send(error);        
    })
}