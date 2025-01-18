import express from 'express';
import { getResponse } from '../service/service.js';

const router = express.Router();

router.get('/endpoint', (req, res) => {
  res.json(getResponse());
});

export default router;
