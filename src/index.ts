import express, { Request, Response } from 'express';
import env from 'dotenv'

env.config()

const app = express();
const port = process.env.PORT || 8080;

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

// Start the HTTP server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
