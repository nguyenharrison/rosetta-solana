import { Service, Inject } from 'typedi';
import { NetworkIdentifier } from '../interfaces/NetworkIdentifier';

@Service()
export default class NetworkService {
  constructor(
  ) { }

  public async getAvailableNetworks() {
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

  public async getNetworkStatus() {
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
}