import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then((client) => {
    console.log('Connected to PostgreSQL');
    client.release();
  })
  .catch((err) => console.error('PostgreSQL connection error', err.stack));

export default pool;
