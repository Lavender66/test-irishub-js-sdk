"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultKeyDAOImpl = exports.DefaultClientConfig = exports.Client = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var consts = _interopRequireWildcard(require("./types/constants"));

var modules = _interopRequireWildcard(require("./modules"));

var _rpcClient = require("./nets/rpc-client");

var types = _interopRequireWildcard(require("./types"));

var _errors = require("./errors");

var AES = _interopRequireWildcard(require("crypto-js/aes"));

var ENC = _interopRequireWildcard(require("crypto-js/enc-utf8"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/** IRISHub Client */
var Client = /*#__PURE__*/function () {
  /** Staking module */
  // private _staking?: modules.Staking;
  // get staking():modules.Staking{
  //   if (!this._staking) {this._staking = new modules.Staking(this)}
  //   return this._staking;
  // }

  /** Tx module */
  // private _tx?: modules.Tx;
  // get tx():modules.Tx{
  //   if (!this._tx) {this._tx = new modules.Tx(this)}
  //   return this._tx;
  // }

  /** Gov module */
  // private _gov?: modules.Gov;
  // get gov():modules.Gov{
  //   if (!this._gov) {this._gov = new modules.Gov(this)}
  //   return this._gov;
  // }

  /** Slashing module */
  // private _slashing?: modules.Slashing;
  // get slashing(): modules.Slashing{
  //   if (!this._slashing) {this._slashing = new modules.Slashing(this)}
  //   return this._slashing;
  // }

  /** Distribution module */
  // private _distribution?: modules.Distribution;
  // get distribution(): modules.Distribution{
  //   if (!this._distribution) {this._distribution = new modules.Distribution(this)}
  //   return this._distribution;
  // }

  /** Service module */
  // private _service?: modules.Service;
  // get service(): modules.Service{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._service) {this._service = new modules.Service(this)}
  //   return this._service;
  // }

  /** Oracle module */
  // private _oracle?: modules.Oracle;
  // get oracle(): modules.Oracle{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._oracle) {this._oracle = new modules.Oracle(this)}
  //   return this._oracle;
  // }

  /** Random module */
  // private _random?: modules.Random;
  // get random(): modules.Random{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._random) {this._random = new modules.Random(this)}
  //   return this._random;
  // }
  // /** Utils module */
  // private _utils?: modules.Utils;
  // get utils(): modules.Utils{
  //   if (!this._utils) {this._utils = new modules.Utils(this)}
  //   return this._utils;
  // }
  // /** Tendermint module */
  // private _tendermint?: modules.Tendermint;
  // get tendermint(): modules.Tendermint{
  //   if (!this._tendermint) {this._tendermint = new modules.Tendermint(this)}
  //   return this._tendermint;
  // }
  // /** Coinswap module */
  // private _coinswap?: modules.Coinswap;
  // get coinswap(): modules.Coinswap{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._coinswap) {this._coinswap = new modules.Coinswap(this)}
  //   return this._coinswap;
  // }
  // /** Farm module */
  // private _farm?: modules.Farm;
  // get farm(): modules.Farm{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._farm) {this._farm = new modules.Farm(this)}
  //   return this._farm;
  // }
  // /** NFT module */
  // private _nft?: modules.Nft;
  // get nft(): modules.Nft{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._nft) {this._nft = new modules.Nft(this)}
  //   return this._nft;
  // }
  // /** Htlc module */
  // private _htlc?: modules.Htlc;
  // get htlc():modules.Htlc{
  //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
  //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
  //   }
  //   if (!this._htlc) {this._htlc = new modules.Htlc(this)}
  //   return this._htlc;
  // }
  // /** Ibc module */
  // private _ibc?: modules.Ibc;
  // get ibc():modules.Ibc{
  //   if (!this._ibc) {this._ibc = new modules.Ibc(this)}
  //   return this._ibc;
  // }

  /** IRISHub SDK Constructor */
  function Client(config) {
    (0, _classCallCheck2["default"])(this, Client);
    (0, _defineProperty2["default"])(this, "config", void 0);
    (0, _defineProperty2["default"])(this, "_rpcClient", void 0);
    (0, _defineProperty2["default"])(this, "_keys", void 0);
    (0, _defineProperty2["default"])(this, "_protobuf", void 0);
    this.config = config;
    if (!this.config.rpcConfig) this.config.rpcConfig = {};

    if (!this.config.bech32Prefix || !this.config.bech32Prefix.AccAddr) {
      switch (this.config.chainNetwork) {
        case consts.ChainNetwork.Cosmos:
          this.config.bech32Prefix = types.Bech32Prefix_Cosmos;
          break;

        case consts.ChainNetwork.Akash:
          this.config.bech32Prefix = types.Bech32Prefix_Akash;
          break;

        case consts.ChainNetwork.Iris:
        default:
          this.config.bech32Prefix = types.Bech32Prefix_Iris;
          break;
      }
    }

    this.config.rpcConfig.baseURL = this.config.node; // Set default encrypt/decrypt methods

    if (!this.config.keyDAO.encrypt || !this.config.keyDAO.decrypt) {
      var defaultKeyDAO = new DefaultKeyDAOImpl();
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


  (0, _createClass2["default"])(Client, [{
    key: "rpcClient",
    get:
    /** IRISHub Client Config */

    /** Axios client for tendermint rpc requests */
    function get() {
      if (!this._rpcClient) {
        this._rpcClient = new _rpcClient.RpcClient(this.config.rpcConfig);
      }

      return this._rpcClient;
    }
    /** Auth module */
    // private _auth?: modules.Auth;
    // get auth(): modules.Auth{
    //   if (!this._auth) {this._auth = new modules.Auth(this)}
    //   return this._auth;
    // }

    /** Token module */
    // private _token?: modules.Token;
    // get token(): modules.Token{
    //   if (this.config.chainNetwork != consts.ChainNetwork.Iris) {
    //     throw new SdkError('This module is not supported on the current chain network.',CODES.Panic);
    //   }
    //   if (!this._token) {
    //     this._token = new modules.Token(this)
    //   }
    //   return this._token;
    // }

    /** Bank module */
    // private _bank?: modules.Bank;
    // get bank():modules.Bank{
    //   if (!this._bank) {this._bank = new modules.Bank(this)}
    //   return this._bank;
    // }

    /** Key management module */

  }, {
    key: "keys",
    get: function get() {
      if (!this._keys) {
        this._keys = new modules.Keys(this);
      }

      return this._keys;
    }
    /** Protobuf module */

  }, {
    key: "protobuf",
    get: function get() {
      if (!this._protobuf) {
        this._protobuf = new modules.Protobuf(this);
      }

      return this._protobuf;
    }
  }, {
    key: "withKeyDAO",
    value: function withKeyDAO(keyDAO) {
      // Set default encrypt/decrypt methods
      if (!keyDAO.encrypt || !keyDAO.decrypt) {
        var defaultKeyDAO = new DefaultKeyDAOImpl();
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

  }, {
    key: "withNetwork",
    value: function withNetwork(network) {
      this.config.network = network;
      return this;
    }
    /**
     * Set IRISHub network type
     *
     * @param network IRISHub network type, mainnet / testnet
     * @returns The SDK itself
     */

  }, {
    key: "withChainNetwork",
    value: function withChainNetwork(chainNetwork) {
      this.config.chainNetwork = chainNetwork;
      return this;
    }
    /**
     * Set IRISHub chain-id
     *
     * @param chainId IRISHub chain-id
     * @returns The SDK itself
     */

  }, {
    key: "withChainId",
    value: function withChainId(chainId) {
      this.config.chainId = chainId;
      return this;
    }
    /**
     * Set default gas limit
     *
     * @param gas Default gas limit
     * @returns The SDK itself
     */

  }, {
    key: "withGas",
    value: function withGas(gas) {
      this.config.gas = gas;
      return this;
    }
    /**
     * Set default fees
     *
     * @param fee Default fee amount
     * @returns The SDK itself
     */

  }, {
    key: "withFee",
    value: function withFee(fee) {
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

  }, {
    key: "withRpcConfig",
    value: function withRpcConfig(rpcConfig) {
      rpcConfig.baseURL = this.config.node;
      this.config.rpcConfig = rpcConfig;
      this._rpcClient = new _rpcClient.RpcClient(this.config.rpcConfig);
      return this;
    }
  }]);
  return Client;
}();
/** IRISHub SDK Config */


exports.Client = Client;

/** Default IRISHub Client Config */
var DefaultClientConfig = function DefaultClientConfig() {
  (0, _classCallCheck2["default"])(this, DefaultClientConfig);
  (0, _defineProperty2["default"])(this, "node", void 0);
  (0, _defineProperty2["default"])(this, "chainNetwork", void 0);
  (0, _defineProperty2["default"])(this, "network", void 0);
  (0, _defineProperty2["default"])(this, "chainId", void 0);
  (0, _defineProperty2["default"])(this, "gas", void 0);
  (0, _defineProperty2["default"])(this, "fee", void 0);
  (0, _defineProperty2["default"])(this, "keyDAO", void 0);
  (0, _defineProperty2["default"])(this, "bech32Prefix", void 0);
  (0, _defineProperty2["default"])(this, "rpcConfig", void 0);
  this.node = '';
  this.network = types.Network.Mainnet;
  this.chainNetwork = types.ChainNetwork.Iris;
  this.chainId = '';
  this.gas = '100000';
  this.fee = {
    amount: '',
    denom: ''
  };
  this.keyDAO = new DefaultKeyDAOImpl();
  this.bech32Prefix = {};
  this.rpcConfig = {
    timeout: 2000
  };
};
/**
 * Key DAO Interface, to be implemented by apps if they need the key management.
 */


exports.DefaultClientConfig = DefaultClientConfig;

var DefaultKeyDAOImpl = /*#__PURE__*/function () {
  function DefaultKeyDAOImpl() {
    (0, _classCallCheck2["default"])(this, DefaultKeyDAOImpl);
  }

  (0, _createClass2["default"])(DefaultKeyDAOImpl, [{
    key: "write",
    value: function write(name, key) {
      throw new _errors.SdkError('Method not implemented. Please implement KeyDAO first.', _errors.CODES.Panic);
    }
  }, {
    key: "read",
    value: function read(name) {
      throw new _errors.SdkError('Method not implemented. Please implement KeyDAO first.', _errors.CODES.Panic);
    }
  }, {
    key: "delete",
    value: function _delete(name) {
      throw new _errors.SdkError('Method not implemented. Please implement KeyDAO first.', _errors.CODES.Panic);
    }
  }, {
    key: "encrypt",
    value: function encrypt(privKey, password) {
      var encrypted = AES.encrypt(privKey, password).toString();

      if (!encrypted) {
        throw new _errors.SdkError('Private key encrypt failed', _errors.CODES.Internal);
      }

      return encrypted;
    }
  }, {
    key: "decrypt",
    value: function decrypt(encrptedPrivKey, password) {
      var decrypted;

      try {
        decrypted = AES.decrypt(encrptedPrivKey, password).toString(ENC);

        if (!decrypted) {
          throw new _errors.SdkError('Wrong password', _errors.CODES.InvalidPassword);
        }
      } catch (e) {
        throw new _errors.SdkError('Wrong password', _errors.CODES.InvalidPassword);
      }

      return decrypted;
    }
  }]);
  return DefaultKeyDAOImpl;
}();

exports.DefaultKeyDAOImpl = DefaultKeyDAOImpl;