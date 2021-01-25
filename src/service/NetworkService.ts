import { Service, Inject } from 'typedi';
import { BlockIdentifier } from '../interfaces/BlockIdentifier';
import { NetworkStatusResponse, Peer } from '../interfaces/NetworkStatusResponse';
import {
  BlockhashAndFeeCalculator,
  Connection,
  RpcResponseAndContext
} from '@solana/web3.js';
import { Block } from 'typescript';
import { NetworkIdentifier } from '../interfaces/NetworkIdentifier';
import { cluster } from '../loaders/cluster';

@Service()
export default class NetworkService {
  constructor(
    @Inject('solnode') private solNode: Connection,
    @Inject('logger') private logger
  ) { }

  public getAvailableNetworks() {
    return {
        "network_identifiers": [
            {
                "blockchain": "solana",
                "network": "mainnet",
                "sub_network_identifier": {}
            },
            {
              "blockchain": "solana",
              "network": "testnet",
              "sub_network_identifier": {}
            },
            {
              "blockchain": "solana",
              "network": "devnet",
              "sub_network_identifier": {}
            }
        ]
    }
  }
 
  public async getNetworkStatus(networkIdentifier): Promise<NetworkStatusResponse> {
    const genesisIdentifier = await this.solNode.getConfirmedBlock(0)
  
    const recentBlock: RpcResponseAndContext<BlockhashAndFeeCalculator> = await this.solNode.getRecentBlockhashAndContext('max');
    const recentBlockTime: number = await this.solNode.getBlockTime(recentBlock.context.slot);

    const clusterNodes = (await this.solNode.getClusterNodes()).map( contactInfo => {return {peer_id: contactInfo.pubkey} as Peer});

    return {
      current_block_identifier: {index: recentBlock.context.slot, hash: recentBlock.value.blockhash} as BlockIdentifier,
      current_block_timestamp: recentBlockTime,
      genesis_block_identifier: {index: 0, hash: genesisIdentifier.blockhash},
      peers: clusterNodes,
    } as NetworkStatusResponse
  }
}