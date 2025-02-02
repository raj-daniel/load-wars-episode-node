process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import express from 'express';
import router from './route/routes.js';
import './utilities/postgress.js';
import './utilities/redis.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
