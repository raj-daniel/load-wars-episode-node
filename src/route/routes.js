import express from 'express';
import * as service from '../service/service.js';


const router = express.Router();

router.get('/basic-read', (req, res) => {
  res.json(service.getResponse());
});

// @ts-ignore
router.post('/redis-cache', async (req, res) => {
  try {
    const { key, value } = req.body;
    if (!key || !value) {
      return res.status(400).json({ message: 'Key and value are required' });
    }
    const result = await service.setCache(key, value);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.post('/db-read', async (req, res) => { 
  try {
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
})

router.post('/db-write', async (req,res)=>{
  try {
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
})

export default router;
