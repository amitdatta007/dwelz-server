const { Router } = require('express');
const { uploadImage } = require('../controllers/Upload.Controller');
const upload = require('../middleware/uploadMiddleware');



const router = Router();

router.route('/upload').post(upload.single('image') ,uploadImage);

module.exports = router;