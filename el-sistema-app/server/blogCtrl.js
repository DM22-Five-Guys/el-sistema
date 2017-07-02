const config = require('./config')

var exports = module.exports = {}

const aws = require('aws-sdk')
    , fs = require('fs')
    , S3FS = require('s3fs')
// var s3fsInstance = new S3FS('elsistematest', {
//     accessKeyId: config.aws.accessKeyId,
//     secretAccessKey: config.aws.sectretAccess
// })
// s3fsInstance.create();

aws.config.update({
    accessKeyId: config.aws.accessKeyId,
    secretAccessKey: config.aws.secretAccess
})

var s3 = new aws.S3()

exports.addBlog = function (req, res) {
    let db = req.app.get('db');
    let pic1 = req.body.image1;

    let buf = new Buffer(pic1.replace(/^data:image\/\w+;base64,/, ""), 'base64');

    // console.log(Object.keys(buf));

    // var stream = fs.createReadStream(buf);
    // s3fsImp.bucket = 'elsistematest/blog';
    var params = {
        Bucket: 'elsistematest/blog',
        Key: 'imagename',
        Body: buf,
        Content: 'image/jpeg',
        ACL: 'public-read'
    }

    s3.upload(params, function (err, data){
        if(err){
            return res.status(500).send(err)
        } else {
            return res.json(data)
        }
    })


    // s3fsInstance.writeFile('file.originalFilename', stream)
    // .then((response)=>{
    //     console.log(response);
    //     fs.unlink(buf, function(err){
    //         console.log(err)
    //     })})



    // console.log('Ciao: '+req.body.image1.slice(0,100));
    
    db.blog.add_blog([req.body.title, req.body.caption, req.body.content, "req.body.image1"]).then((blog)=>{
        console.log(blog);
        res.status(200).send('Blog Recieved.');
    
    }).catch((error)=>{
        console.log(error);
        res.status(400).send(error);        
    })
}

// app.post('/images', (req,res) => {
//     var file = req.files;
//     // var file = req.files.null;
//     // console.log('--------------------', file.path);
//     var stream = fs.createReadStream(file.path);
//     s3fsImp.bucket = 'elsistematest/blog';
//     return s3fsInstance.writeFile(file.originalFilename, stream).then(function(){
//         fs.unlink(file.path, function(err){
//             if(err){
//                 console.log(err);
//             }
//         })
//         res.send('POSTED MEDIA!');
//     });
// })