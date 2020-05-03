import express from 'express';
import cors from 'cors';
const app = express();

app.use(cors());

app.use(express.json());

app.get('/getTest', (_req: express.Request, res: express.Response) => {
  res.json({ a: 'pass1' });
});

app.post('/postTest', (req: express.Request, res: express.Response) => {
  console.log('---->', req.body);

  res.json({ b: 'pass2' });
});

app.listen(3000);
