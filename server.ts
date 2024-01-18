const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const { PORT, ENV } = require('./src/configs/config.ts');

require('dotenv').config({
	path: path.join(__dirname, `./.env.${process.env.NODE_ENV}`),
});

/** Express Server Instance **/
const server_instance = express();
server_instance.use(cors());

const http_server = http.createServer(server_instance);

http_server.listen(PORT, () => {
	console.log(`Server (${ENV}) has started and it is now listening to port ${PORT}`);
})

/** MongoDB Server Instance **/
init_mongodb_instance().catch(console.dir);

async function init_mongodb_instance() {
	try {
		mongoose.connect(process.env.MONGODB_URI);

		console.log('Successfully connected to MongoDB.');
	} catch (err) {
		console.log('Failed to connect to MongoDB.');
		console.log('Error stack =  ', err);
	}
}

/** API routes **/
server_instance.get('/', (req, res) => {
	return res.json({
		message: "Successfully called / route"
	})
});