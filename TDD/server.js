import express, { json } from 'express';
import dotenv from 'dotenv';
import { connectToPool } from './db/dbconfig.js';
import studentRouter from './routes/studentsroutes.js';
dotenv.config();

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use('/api/v1/students', studentRouter);

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

connectToPool().then(() => {
	app.listen(port, () => {
		console.log(`server started on port ${port}`);
	});
});

// export default app;
module.exports = app;
