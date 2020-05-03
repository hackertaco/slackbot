import { connectDatabase } from './database';
import { runServer } from './server';

async function startApplication() {
  try {
    await connectDatabase();
    console.log('database is connected successfully');
    await runServer();
    console.log('server is running on 3000');
  } catch (err) {
    console.error(err);
    throw err;
  }
}

startApplication();
