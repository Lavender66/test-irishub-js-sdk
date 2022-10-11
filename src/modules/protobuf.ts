import { Client } from '../client';
import * as types from '../types';
import { SdkError, CODES } from '../errors';

/**
 * ProtobufModel module allows you to deserialize protobuf serialize string
 *
 * @category Modules
 * @since v0.17
 */
export class Protobuf {
  /** @hidden */
  private client: Client;
  /** @hidden */
  constructor(client: Client) {
    this.client = client;
  }

  /**
   * deserialize Pubkey
   * @param  {[type]} pubKey:{typeUrl:string, value:string}
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} pubKey object                        
   */
  deserializePubkey(pubKey:{typeUrl:string, value:string}, returnProtobufModel?:boolean):object{
    if (!pubKey) {
      throw new SdkError('pubKey can not be empty');
    }
    let result:{typeUrl:string, value:any} = {...pubKey};
    switch(pubKey.typeUrl){
      case '/cosmos.crypto.ed25519.PubKey':
      result.value = types.crypto_ed25519_keys_pb.PubKey.deserializeBinary(pubKey.value);
      break;
      case '/cosmos.crypto.multisig.LegacyAminoPubKey':
      result.value = types.crypto_multisig_keys_pb.LegacyAminoPubKey.deserializeBinary(pubKey.value);
      break;
      case '/cosmos.crypto.secp256k1.PubKey':
      result.value = types.crypto_secp256k1_keys_pb.PubKey.deserializeBinary(pubKey.value);
      break;
      case '/cosmos.crypto.secp256r1.PubKey':
      result.value = types.crypto_secp256r1_keys_pb.PubKey.deserializeBinary(pubKey.value);
      break;
      case '/cosmos.crypto.sm2.PubKey':
      result.value = types.crypto_sm2_keys_pb.PubKey.deserializeBinary(pubKey.value);
      break;
    }
    if (!returnProtobufModel && result.value && result.value.toObject) {
      result.value = result.value.toObject();
    }
    return result;
  }
}
