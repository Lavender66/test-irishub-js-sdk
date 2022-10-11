"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crypto_sm2_keys_pb = exports.crypto_secp256r1_keys_pb = exports.crypto_secp256k1_keys_pb = exports.crypto_multisig_keys_pb = exports.crypto_ed25519_keys_pb = void 0;

//cosmos module
// ->keys
var crypto_ed25519_keys_pb = require('./proto-types/cosmos/crypto/ed25519/keys_pb');

exports.crypto_ed25519_keys_pb = crypto_ed25519_keys_pb;

var crypto_multisig_keys_pb = require('./proto-types/cosmos/crypto/multisig/keys_pb');

exports.crypto_multisig_keys_pb = crypto_multisig_keys_pb;

var crypto_secp256k1_keys_pb = require('./proto-types/cosmos/crypto/secp256k1/keys_pb');

exports.crypto_secp256k1_keys_pb = crypto_secp256k1_keys_pb;

var crypto_secp256r1_keys_pb = require('./proto-types/cosmos/crypto/secp256r1/keys_pb');

exports.crypto_secp256r1_keys_pb = crypto_secp256r1_keys_pb;

var crypto_sm2_keys_pb = require('./proto-types/cosmos/crypto/sm2/keys_pb');

exports.crypto_sm2_keys_pb = crypto_sm2_keys_pb;