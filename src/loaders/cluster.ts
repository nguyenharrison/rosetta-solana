/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import {
    clusterApiUrl,
    Cluster, 
    Connection
  } from '@solana/web3.js';
  import fs from 'mz/fs';
  import config from '../config';
  
  function chooseCluster(): Cluster | undefined {
    if (!config.live) return;
    switch (config.cluster) {
      case 'devnet':
      case 'testnet':
      case 'mainnet-beta': {
        return config.cluster;
      }
    }
    if (config.cluster) {
      throw `Unknown cluster "${config.cluster}", check the .env file`;
    } else {
      throw new Error('CLUSTER is not specified, check the .env file');
    }
  }
  
  export const cluster = chooseCluster();
  
  /**
   * Connection to the networkpi
   */
  let connection: Connection;

  const SolanaInstance = new Connection(clusterApiUrl(cluster), 'singleGossip')
  
  export default SolanaInstance;