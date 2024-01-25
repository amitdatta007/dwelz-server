const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const multer = require('multer');
const { uploadImage } = require('./controllers/Upload.Controller');
require('dotenv').config();

const app = express();
app.use(express.static('public'))

/** middlewares */
app.use(express.json());
app.use(cors())

const port = process.env.PORT | 8000;

// app.post('/upload', upload.single('image'), uploadImage)

app.use('/', router)



app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});