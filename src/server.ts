const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const url = 'mongodb://mongo_db:27017/test';

dotenv.config();

const app = express();
const port = 9000;

init_mongodb_instance().catch(console.dir);

async function init_mongodb_instance() {
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
   return res
       .status(200)
       .json({
		   code: 'SUCCESSFUL_SERVER_CONNECTION',
		   message: 'Successfully connected to the server',
       });
});

app.listen(port, () => {
    console.log(`Server is running on port 9000`);
});