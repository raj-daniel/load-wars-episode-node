import express from 'express';
import { getResponse } from './service.js';

const router = express.Router();

router.get('/endpoint', (req, res) => {
  res.json(getResponse());
});

export default router;
