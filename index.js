const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

/** middlewares */
app.use(express.json());
app.use(cors())

const port = process.env.PORT | 8000;

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Dwelz Server."
    })
})

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});