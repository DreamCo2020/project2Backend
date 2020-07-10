require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();


const PORT = process.env.PORT || 9000;


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
router.createRoutes(app);

app.listen(PORT, () => console.log(`API is listening on port ${PORT}`));

