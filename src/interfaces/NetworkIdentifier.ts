
export type NetworkIdentifier = {
  blockchain: string;
  network: string;
  sub_network_identifier: SubNetworkIdentifier;
}

// no shards baby
export type SubNetworkIdentifier = {
}