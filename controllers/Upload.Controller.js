const multer = require('multer');

const uploadImage = (req, res) => {
    if(req.file){
        res.status(200).json({
            status: "success",
            file_url: `${process.env.DOMAIN_URL}/images/${req.file.filename}`
        });
    } else{
        res.status(500).json({
            status: "failed"
        })
    }
};

exports.uploadImage = uploadImage