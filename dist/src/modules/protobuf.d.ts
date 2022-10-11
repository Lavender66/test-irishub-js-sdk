import { Client } from '../client';
/**
 * ProtobufModel module allows you to deserialize protobuf serialize string
 *
 * @category Modules
 * @since v0.17
 */
export declare class Protobuf {
    /** @hidden */
    private client;
    /** @hidden */
    constructor(client: Client);
    /**
     * deserialize Pubkey
     * @param  {[type]} pubKey:{typeUrl:string, value:string}
     * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
     * @return {[type]} pubKey object
     */
    deserializePubkey(pubKey: {
        typeUrl: string;
        value: string;
    }, returnProtobufModel?: boolean): object;
}
