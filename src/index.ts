import { connectDatabase } from './database';
import { runServer } from './server';
const port = Number(process.env.PORT)||3000;
const host = String(process.env.HOST)||'localhost';

async function startApplication() {
  try {
    await connectDatabase();
    console.log('database is connected successfully');
    await runServer(port, host);
    console.log('server is running on 3000');
  } catch (err) {
    console.error(err);
    throw err;
  }
}

startApplication();
