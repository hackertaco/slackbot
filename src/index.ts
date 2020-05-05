import { connectDatabase } from './database';
import { runServer } from './server';

const PORT = Number(process.env.PORT) || 3000; //default port
async function startApplication() {
  try {
    await connectDatabase();
    console.log('database is connected successfully');
    await runServer(PORT);
    console.log('server is running on 3000');
  } catch (err) {
    console.error(err);
    throw err;
  }
}

startApplication();
