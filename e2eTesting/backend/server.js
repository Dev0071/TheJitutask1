const express = require('express');
const dotenv = require('dotenv');
const { connectToPool } = require('../backend/database/dbConfig.js');
const router = require('./routes/registerUserRoute.js');
const cors = require('cors');

dotenv.config();

const port = process.env.PORT || 5001;
const app = express();

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

connectToPool().then(() => {
	app.listen(port, () => {
		console.log(`Server started on port ${port}`);
	});
});
