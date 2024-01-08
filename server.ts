import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
	res.send('Welcome to Express & TypeScript Server')
});

app.listen(port, ()=> {
	console.log(`SERVER IS LISTENING AT http://localhost:${port}`);
})
