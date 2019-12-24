import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(400).end('status code and message')
});

app.listen(3000, () => {
  console.log('listen on http://localhost:3000')
});
