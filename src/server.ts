import 'reflect-metadata';

import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  return res.json({ message: 'asbaba' });
});

app.listen(3333, () => {
  console.log('Server started on port 3333');
});
