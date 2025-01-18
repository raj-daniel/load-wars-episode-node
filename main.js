process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import express from 'express';
import router from './routes.js';
import https from 'https';
import fs from 'fs';

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});