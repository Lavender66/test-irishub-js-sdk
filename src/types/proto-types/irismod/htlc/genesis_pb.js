// source: irismod/htlc/genesis.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var irismod_htlc_htlc_pb = require('../../irismod/htlc/htlc_pb.js');
goog.object.extend(proto, irismod_htlc_htlc_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.irismod.htlc.GenesisState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.htlc.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.irismod.htlc.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.irismod.htlc.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.htlc.GenesisState.displayName = 'proto.irismod.htlc.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.irismod.htlc.GenesisState.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.htlc.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.htlc.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.htlc.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.htlc.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && irismod_htlc_htlc_pb.Params.toObject(includeInstance, f),
    htlcsList: jspb.Message.toObjectList(msg.getHtlcsList(),
    irismod_htlc_htlc_pb.HTLC.toObject, includeInstance),
    suppliesList: jspb.Message.toObjectList(msg.getSuppliesList(),
    irismod_htlc_htlc_pb.AssetSupply.toObject, includeInstance),
    previousBlockTime: (f = msg.getPreviousBlockTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.htlc.GenesisState}
 */
proto.irismod.htlc.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.htlc.GenesisState;
  return proto.irismod.htlc.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.htlc.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.htlc.GenesisState}
 */
proto.irismod.htlc.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new irismod_htlc_htlc_pb.Params;
      reader.readMessage(value,irismod_htlc_htlc_pb.Params.deserializeBinaryFromReader);
      msg.setParams(value);
      break;
    case 2:
      var value = new irismod_htlc_htlc_pb.HTLC;
      reader.readMessage(value,irismod_htlc_htlc_pb.HTLC.deserializeBinaryFromReader);
      msg.addHtlcs(value);
      break;
    case 3:
      var value = new irismod_htlc_htlc_pb.AssetSupply;
      reader.readMessage(value,irismod_htlc_htlc_pb.AssetSupply.deserializeBinaryFromReader);
      msg.addSupplies(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPreviousBlockTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.htlc.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.htlc.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.htlc.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.htlc.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      irismod_htlc_htlc_pb.Params.serializeBinaryToWriter
    );
  }
  f = message.getHtlcsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      irismod_htlc_htlc_pb.HTLC.serializeBinaryToWriter
    );
  }
  f = message.getSuppliesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      irismod_htlc_htlc_pb.AssetSupply.serializeBinaryToWriter
    );
  }
  f = message.getPreviousBlockTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional Params params = 1;
 * @return {?proto.irismod.htlc.Params}
 */
proto.irismod.htlc.GenesisState.prototype.getParams = function() {
  return /** @type{?proto.irismod.htlc.Params} */ (
    jspb.Message.getWrapperField(this, irismod_htlc_htlc_pb.Params, 1));
};


/**
 * @param {?proto.irismod.htlc.Params|undefined} value
 * @return {!proto.irismod.htlc.GenesisState} returns this
*/
proto.irismod.htlc.GenesisState.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.htlc.GenesisState} returns this
 */
proto.irismod.htlc.GenesisState.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.htlc.GenesisState.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated HTLC htlcs = 2;
 * @return {!Array<!proto.irismod.htlc.HTLC>}
 */
proto.irismod.htlc.GenesisState.prototype.getHtlcsList = function() {
  return /** @type{!Array<!proto.irismod.htlc.HTLC>} */ (
    jspb.Message.getRepeatedWrapperField(this, irismod_htlc_htlc_pb.HTLC, 2));
};


/**
 * @param {!Array<!proto.irismod.htlc.HTLC>} value
 * @return {!proto.irismod.htlc.GenesisState} returns this
*/
proto.irismod.htlc.GenesisState.prototype.setHtlcsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.irismod.htlc.HTLC=} opt_value
 * @param {number=} opt_index
 * @return {!proto.irismod.htlc.HTLC}
 */
proto.irismod.htlc.GenesisState.prototype.addHtlcs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.irismod.htlc.HTLC, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irismod.htlc.GenesisState} returns this
 */
proto.irismod.htlc.GenesisState.prototype.clearHtlcsList = function() {
  return this.setHtlcsList([]);
};


/**
 * repeated AssetSupply supplies = 3;
 * @return {!Array<!proto.irismod.htlc.AssetSupply>}
 */
proto.irismod.htlc.GenesisState.prototype.getSuppliesList = function() {
  return /** @type{!Array<!proto.irismod.htlc.AssetSupply>} */ (
    jspb.Message.getRepeatedWrapperField(this, irismod_htlc_htlc_pb.AssetSupply, 3));
};


/**
 * @param {!Array<!proto.irismod.htlc.AssetSupply>} value
 * @return {!proto.irismod.htlc.GenesisState} returns this
*/
proto.irismod.htlc.GenesisState.prototype.setSuppliesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.irismod.htlc.AssetSupply=} opt_value
 * @param {number=} opt_index
 * @return {!proto.irismod.htlc.AssetSupply}
 */
proto.irismod.htlc.GenesisState.prototype.addSupplies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.irismod.htlc.AssetSupply, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irismod.htlc.GenesisState} returns this
 */
proto.irismod.htlc.GenesisState.prototype.clearSuppliesList = function() {
  return this.setSuppliesList([]);
};


/**
 * optional google.protobuf.Timestamp previous_block_time = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.irismod.htlc.GenesisState.prototype.getPreviousBlockTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.irismod.htlc.GenesisState} returns this
*/
proto.irismod.htlc.GenesisState.prototype.setPreviousBlockTime = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.htlc.GenesisState} returns this
 */
proto.irismod.htlc.GenesisState.prototype.clearPreviousBlockTime = function() {
  return this.setPreviousBlockTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.htlc.GenesisState.prototype.hasPreviousBlockTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.irismod.htlc);
