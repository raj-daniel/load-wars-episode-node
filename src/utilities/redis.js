import { createClient } from 'redis';

const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient
  .connect()
  .then(() => {
    console.log('Connected to Redis');
  })
  .catch((err) => console.error('Redis connection error', err));

export default redisClient;
