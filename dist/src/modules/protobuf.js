"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Protobuf = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("../types"));

var _errors = require("../errors");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * ProtobufModel module allows you to deserialize protobuf serialize string
 *
 * @category Modules
 * @since v0.17
 */
var Protobuf = /*#__PURE__*/function () {
  /** @hidden */

  /** @hidden */
  function Protobuf(client) {
    (0, _classCallCheck2["default"])(this, Protobuf);
    (0, _defineProperty2["default"])(this, "client", void 0);
    this.client = client;
  }
  /**
   * deserialize Pubkey
   * @param  {[type]} pubKey:{typeUrl:string, value:string}
   * @param  {[type]} returnProtobufModel:bool If true, return the Protobuf model
   * @return {[type]} pubKey object                        
   */


  (0, _createClass2["default"])(Protobuf, [{
    key: "deserializePubkey",
    value: function deserializePubkey(pubKey, returnProtobufModel) {
      if (!pubKey) {
        throw new _errors.SdkError('pubKey can not be empty');
      }

      var result = _objectSpread({}, pubKey);

      switch (pubKey.typeUrl) {
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
  }]);
  return Protobuf;
}();

exports.Protobuf = Protobuf;