import express from 'express';
import dotenv from 'dotenv';
import { connectToPool } from './database/config/dbconfig.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

connectToPool().then(() => {
	app.listen(port, () => {
		console.log(`server started on port ${port}`);
	});
});
