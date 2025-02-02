import redisClient from '../utilities/redis.js';

export function getResponse() {
  return {
    message: 'This is the way',
    timestamp: 'from a galaxy far far away',
    data: 'Hello there, General Kenobi',
  };
}

export async function setCache(key, value) {
  // Set the key-value pair in Redis
  try {
    console.log(key, value);
    await redisClient.set(key, value);
    return {
      data: { key: key, value: value },
      message: 'Data stored in Redis cache',
    };
  } catch (error) {
    console.error('Redis error:', error);
    throw new Error('Internal server error');
  }
}

export async function readFromDb() {
  try {
    
  } catch (error) {
    throw new Error('Internal server error');
  }
}
export async function writeToDb() {
  try {
    
  } catch (error) {
    throw new Error('Internal server error');
  }
}