import dotenv from 'dotenv';
import {clusterApiUrl, Cluster} from '@solana/web3.js';



// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT, 10),

  /*
  * Manually set cluster for now
  */ 
  cluster: process.env.CLUSTER,

  live: process.env.LIVE,
  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
