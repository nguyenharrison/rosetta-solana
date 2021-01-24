import { Block } from "typescript";
import { BlockIdentifier } from "./BlockIdentifier";

export interface NetworkStatusResponse{
  current_block_identifier: BlockIdentifier;
  current_block_timestamp: number;
  genesis_block_identifier: BlockIdentifier;
  oldest_block_identifier?: BlockIdentifier;
  sync_status?: SyncStatus;
  peers: [Peer];
}

interface SyncStatus {
  current_index: number;
  target_index: number;
  stage: string, 
  synced: boolean;
}

//TO-DO
interface Peer {
  peer_id: string
}