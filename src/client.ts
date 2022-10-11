import * as consts from './types/constants';
import * as modules from './modules';
import { AxiosRequestConfig } from 'axios';
import * as types from './types';
import { SdkError, CODES } from './errors';
import * as AES from 'crypto-js/aes';
import * as ENC from 'crypto-js/enc-utf8';
import {Wallet} from "./types";

/** IRISHub Client */
export class Client {
  /** IRISHub Client Config */
  config: DefaultClientConfig;

  /** Key management module */
  private _keys?: modules.Keys;
  get keys():modules.Keys{
    if (!this._keys) {this._keys = new modules.Keys(this)}
    return this._keys;
  }

  /** IRISHub SDK Constructor */
  constructor(config: DefaultClientConfig) {
    this.config = config;
    if (!this.config.rpcConfig) this.config.rpcConfig = {};
    if (!this.config.bech32Prefix || !this.config.bech32Prefix.AccAddr) {
      switch(this.config.chainNetwork){
        case consts.ChainNetwork.Cosmos:
        this.config.bech32Prefix = types.Bech32Prefix_Cosmos;
        break;
        case consts.ChainNetwork.Akash:
        this.config.bech32Prefix = types.Bech32Prefix_Akash;
        break;
        case consts.ChainNetwork.Iris:
        default:
        this.config.bech32Prefix = types.Bech32Prefix_Iris;
        break
      }
    }

    this.config.rpcConfig.baseURL = this.config.node;

    // Set default encrypt/decrypt methods
    if (!this.config.keyDAO.encrypt || !this.config.keyDAO.decrypt) {
      const defaultKeyDAO = new DefaultKeyDAOImpl();
      this.config.keyDAO.encrypt = defaultKeyDAO.encrypt;
      this.config.keyDAO.decrypt = defaultKeyDAO.decrypt;
    }
  }

  /**
   * Set Key DAO Implemention
   *
   * @param keyDAO Key DAO Implemention
   * @returns The SDK itself
   */
  withKeyDAO(keyDAO: KeyDAO) {
    // Set default encrypt/decrypt methods
    if (!keyDAO.encrypt || !keyDAO.decrypt) {
      const defaultKeyDAO = new DefaultKeyDAOImpl();
      keyDAO.encrypt = defaultKeyDAO.encrypt;
      keyDAO.decrypt = defaultKeyDAO.decrypt;
    }
    this.config.keyDAO = keyDAO;
    return this;
  }

  /**
   * Set IRISHub network type
   *
   * @param network IRISHub network type, mainnet / testnet
   * @returns The SDK itself
   */
  withNetwork(network: consts.Network) {
    this.config.network = network;
    return this;
  }

  /**
   * Set IRISHub network type
   *
   * @param network IRISHub network type, mainnet / testnet
   * @returns The SDK itself
   */
  withChainNetwork(chainNetwork: consts.ChainNetwork) {
    this.config.chainNetwork = chainNetwork;
    return this;
  }

  /**
   * Set IRISHub chain-id
   *
   * @param chainId IRISHub chain-id
   * @returns The SDK itself
   */
  withChainId(chainId: string) {
    this.config.chainId = chainId;
    return this;
  }

  /**
   * Set default gas limit
   *
   * @param gas Default gas limit
   * @returns The SDK itself
   */
  withGas(gas: string) {
    this.config.gas = gas;
    return this;
  }

  /**
   * Set default fees
   *
   * @param fee Default fee amount
   * @returns The SDK itself
   */
  withFee(fee: types.Coin) {
    this.config.fee = fee;
    return this;
  }

  /**
   * Set Axios config for tendermint rpc requests, refer to: https://github.com/axios/axios#request-config.
   *
   * Note the `baseURL` is set by `SdkConfig.node` and cannot be overwritten by this config
   *
   * @param rpcConfig Axios config for tendermint rpc requests
   * @returns The SDK itself
   */
  withRpcConfig(rpcConfig: AxiosRequestConfig) {
    rpcConfig.baseURL = this.config.node;
    this.config.rpcConfig = rpcConfig;
    // this._rpcClient = new RpcClient(this.config.rpcConfig);
    return this;
  }
}

/** IRISHub SDK Config */
export interface ClientConfig {
  /** IRISHub node rpc address */
  node: string;

  /** IRISHub network type, mainnet / testnet */
  network?: consts.Network;

  /** IRISHub chain-id */
  chainId?: string;

  /** Default gas limit */
  gas?: string;

  /** Default fee amount */
  fee?: types.Coin;

  /** Key DAO Implemention */
  keyDAO?: KeyDAO;

  /** Bech32 prefix of the network, will be overwritten by network type */
  bech32Prefix?: types.Bech32Prefix;

  /** Axios request config for tendermint rpc requests */
  rpcConfig?: AxiosRequestConfig;
}

/** Default IRISHub Client Config */
export class DefaultClientConfig implements ClientConfig {
  node: string;
  chainNetwork: consts.ChainNetwork;
  network: consts.Network;
  chainId: string;
  gas: string;
  fee: types.Coin;
  keyDAO: KeyDAO;
  bech32Prefix: types.Bech32Prefix;
  rpcConfig: AxiosRequestConfig;

  constructor() {
    this.node = '';
    this.network = types.Network.Mainnet;
    this.chainNetwork = types.ChainNetwork.Iris;
    this.chainId = '';
    this.gas = '100000';
    this.fee = { amount: '', denom: '' };
    this.keyDAO = new DefaultKeyDAOImpl();
    this.bech32Prefix = {} as types.Bech32Prefix;
    this.rpcConfig = { timeout: 2000 };
  }
}

/**
 * Key DAO Interface, to be implemented by apps if they need the key management.
 */
export interface KeyDAO {
  /**
   * Save the encrypted private key to app
   *
   * @param name Name of the key
   * @param key The encrypted private key object
   * @throws `SdkError` if the save fails.
   */
  write(name: string, key: Wallet): void;

  /**
   * Get the encrypted private key by name
   *
   * @param name Name of the key
   * @returns The encrypted private key object or undefined
   */
  read(name: string): Wallet;

  /**
   * Delete the key by name
   * @param name Name of the key
   * @throws `SdkError` if the deletion fails.
   */
  delete?(name: string): void;

  /**
   * Optional function to encrypt the private key by yourself. Default to AES Encryption
   * @param privKey The plain private key
   * @param password The password to encrypt the private key
   * @returns The encrypted private key
   * @throws `SdkError` if encrypt failed
   */
  encrypt?(privKey: string, password: string): string;

  /**
   * Optional function to decrypt the private key by yourself. Default to AES Decryption
   * @param encrptedPrivKey The encrpted private key
   * @param password The password to decrypt the private key
   * @returns The plain private key
   * @throws `SdkError` if decrypt failed
   */
  decrypt?(encrptedPrivKey: string, password: string): string;
}

export class DefaultKeyDAOImpl implements KeyDAO {
  write(name: string, key: Wallet): void {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.',
      CODES.Panic
    );
  }
  read(name: string): Wallet {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.',
      CODES.Panic
    );
  }
  delete(name: string): void {
    throw new SdkError(
      'Method not implemented. Please implement KeyDAO first.',
      CODES.Panic
    );
  }
  encrypt(privKey: string, password: string): string {
    const encrypted = AES.encrypt(privKey, password).toString();
    if (!encrypted) {
      throw new SdkError('Private key encrypt failed',CODES.Internal);
    }
    return encrypted;
  }

  decrypt(encrptedPrivKey: string, password: string): string {
    let decrypted:string;
    try{
      decrypted = AES.decrypt(encrptedPrivKey, password).toString(ENC);
      if (!decrypted) {
        throw new SdkError('Wrong password',CODES.InvalidPassword);
      }
    }catch(e){
      throw new SdkError('Wrong password',CODES.InvalidPassword);
    }
    return decrypted;
  }
}
