const config = require('./config')

var exports = module.exports = {}


const aws = require('aws-sdk')
    , fs = require('fs')
    , S3FS = require('s3fs')
// var s3fsInstance = new S3FS('elsitematest', {
//     region: 'us-west-2',
//     accessKeyId: config.aws.accessKeyId,
//     secretAccessKey: config.aws.sectretAccess
// })
// s3fsInstance.create();

aws.config.update({
    aws_access_key_id: config.aws.accessKeyId,
    aws_secret_access_key: config.aws.secretAccess
})

console.log(aws.config);

var s3 = new aws.S3()

exports.addBlog = function (req, res) {
    let db = req.app.get('db');

    let pic1 = req.body.image1;

    let buf = new Buffer(pic1.replace(/^data:image\/\w+;base64,/, ""), 'base64');

    // console.log(Object.keys(buf));

    // var stream = fs.createReadStream(buf);
    // s3fsImp.bucket = 'elsistematest/blog';
    var params = {
        Bucket: 'elsitematest/blog',
        Key: 'imagename',
        Body: pic1,
        region: 'us-west-2',    
        // Content: 'image/jpeg',
        ACL: 'public-read'
    }

    s3.putObject(params, function (err, data){
        if(err){
            console.log(err)
            return res.status(500).send(err)
        } else {
            console.log('YAY!!!')
            return res.json(data)
        }
    })

    //  return s3fsInstance.writeFile('file.originalFilename', stream)
    // .then((response)=>{
    //     console.log(response);
    //     fs.unlink(buf, function(err){
    //         if (err){
    //             console.log(err)
    //         }
    //     })
    //     res.status(200).send('Yay');
    // })

    // console.log('Ciao: '+req.body.image1.slice(0,100));
    
    // db.blog.add_blog([req.body.title, req.body.caption, req.body.content, "req.body.image1"]).then((blog)=>{
    //     console.log(blog);
    //     res.status(200).send('Blog Recieved.');
    
    // }).catch((error)=>{
    //     console.log(error);
    //     res.status(400).send(error);        
    // })
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