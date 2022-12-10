// source: cosmos/authz/v1beta1/tx.proto
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

var cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
goog.object.extend(proto, cosmos_proto_cosmos_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var cosmos_base_abci_v1beta1_abci_pb = require('../../../cosmos/base/abci/v1beta1/abci_pb.js');
goog.object.extend(proto, cosmos_base_abci_v1beta1_abci_pb);
var cosmos_authz_v1beta1_authz_pb = require('../../../cosmos/authz/v1beta1/authz_pb.js');
goog.object.extend(proto, cosmos_authz_v1beta1_authz_pb);
goog.exportSymbol('proto.cosmos.authz.v1beta1.MsgExec', null, global);
goog.exportSymbol('proto.cosmos.authz.v1beta1.MsgExecResponse', null, global);
goog.exportSymbol('proto.cosmos.authz.v1beta1.MsgGrant', null, global);
goog.exportSymbol('proto.cosmos.authz.v1beta1.MsgGrantResponse', null, global);
goog.exportSymbol('proto.cosmos.authz.v1beta1.MsgRevoke', null, global);
goog.exportSymbol('proto.cosmos.authz.v1beta1.MsgRevokeResponse', null, global);
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
proto.cosmos.authz.v1beta1.MsgGrant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.authz.v1beta1.MsgGrant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.authz.v1beta1.MsgGrant.displayName = 'proto.cosmos.authz.v1beta1.MsgGrant';
}
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
proto.cosmos.authz.v1beta1.MsgExecResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.authz.v1beta1.MsgExecResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.authz.v1beta1.MsgExecResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.authz.v1beta1.MsgExecResponse.displayName = 'proto.cosmos.authz.v1beta1.MsgExecResponse';
}
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
proto.cosmos.authz.v1beta1.MsgExec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.authz.v1beta1.MsgExec.repeatedFields_, null);
};
goog.inherits(proto.cosmos.authz.v1beta1.MsgExec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.authz.v1beta1.MsgExec.displayName = 'proto.cosmos.authz.v1beta1.MsgExec';
}
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
proto.cosmos.authz.v1beta1.MsgGrantResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.authz.v1beta1.MsgGrantResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.authz.v1beta1.MsgGrantResponse.displayName = 'proto.cosmos.authz.v1beta1.MsgGrantResponse';
}
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
proto.cosmos.authz.v1beta1.MsgRevoke = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.authz.v1beta1.MsgRevoke, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.authz.v1beta1.MsgRevoke.displayName = 'proto.cosmos.authz.v1beta1.MsgRevoke';
}
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
proto.cosmos.authz.v1beta1.MsgRevokeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.authz.v1beta1.MsgRevokeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.authz.v1beta1.MsgRevokeResponse.displayName = 'proto.cosmos.authz.v1beta1.MsgRevokeResponse';
}



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
proto.cosmos.authz.v1beta1.MsgGrant.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.authz.v1beta1.MsgGrant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.authz.v1beta1.MsgGrant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgGrant.toObject = function(includeInstance, msg) {
  var f, obj = {
    granter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    grantee: jspb.Message.getFieldWithDefault(msg, 2, ""),
    grant: (f = msg.getGrant()) && cosmos_authz_v1beta1_authz_pb.Grant.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.authz.v1beta1.MsgGrant}
 */
proto.cosmos.authz.v1beta1.MsgGrant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.authz.v1beta1.MsgGrant;
  return proto.cosmos.authz.v1beta1.MsgGrant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.authz.v1beta1.MsgGrant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.authz.v1beta1.MsgGrant}
 */
proto.cosmos.authz.v1beta1.MsgGrant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGranter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantee(value);
      break;
    case 3:
      var value = new cosmos_authz_v1beta1_authz_pb.Grant;
      reader.readMessage(value,cosmos_authz_v1beta1_authz_pb.Grant.deserializeBinaryFromReader);
      msg.setGrant(value);
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
proto.cosmos.authz.v1beta1.MsgGrant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.authz.v1beta1.MsgGrant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.authz.v1beta1.MsgGrant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgGrant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGranter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantee();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGrant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cosmos_authz_v1beta1_authz_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional string granter = 1;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.MsgGrant.prototype.getGranter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.MsgGrant} returns this
 */
proto.cosmos.authz.v1beta1.MsgGrant.prototype.setGranter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string grantee = 2;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.MsgGrant.prototype.getGrantee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.MsgGrant} returns this
 */
proto.cosmos.authz.v1beta1.MsgGrant.prototype.setGrantee = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Grant grant = 3;
 * @return {?proto.cosmos.authz.v1beta1.Grant}
 */
proto.cosmos.authz.v1beta1.MsgGrant.prototype.getGrant = function() {
  return /** @type{?proto.cosmos.authz.v1beta1.Grant} */ (
    jspb.Message.getWrapperField(this, cosmos_authz_v1beta1_authz_pb.Grant, 3));
};


/**
 * @param {?proto.cosmos.authz.v1beta1.Grant|undefined} value
 * @return {!proto.cosmos.authz.v1beta1.MsgGrant} returns this
*/
proto.cosmos.authz.v1beta1.MsgGrant.prototype.setGrant = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.authz.v1beta1.MsgGrant} returns this
 */
proto.cosmos.authz.v1beta1.MsgGrant.prototype.clearGrant = function() {
  return this.setGrant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.authz.v1beta1.MsgGrant.prototype.hasGrant = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.repeatedFields_ = [1];



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
proto.cosmos.authz.v1beta1.MsgExecResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.authz.v1beta1.MsgExecResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.authz.v1beta1.MsgExecResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: msg.getResultsList_asB64()
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
 * @return {!proto.cosmos.authz.v1beta1.MsgExecResponse}
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.authz.v1beta1.MsgExecResponse;
  return proto.cosmos.authz.v1beta1.MsgExecResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.authz.v1beta1.MsgExecResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.authz.v1beta1.MsgExecResponse}
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addResults(value);
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
proto.cosmos.authz.v1beta1.MsgExecResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.authz.v1beta1.MsgExecResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.authz.v1beta1.MsgExecResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes results = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.prototype.getResultsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes results = 1;
 * This is a type-conversion wrapper around `getResultsList()`
 * @return {!Array<string>}
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.prototype.getResultsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getResultsList()));
};


/**
 * repeated bytes results = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getResultsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.prototype.getResultsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getResultsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.cosmos.authz.v1beta1.MsgExecResponse} returns this
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.cosmos.authz.v1beta1.MsgExecResponse} returns this
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.prototype.addResults = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.authz.v1beta1.MsgExecResponse} returns this
 */
proto.cosmos.authz.v1beta1.MsgExecResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.authz.v1beta1.MsgExec.repeatedFields_ = [2];



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
proto.cosmos.authz.v1beta1.MsgExec.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.authz.v1beta1.MsgExec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.authz.v1beta1.MsgExec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgExec.toObject = function(includeInstance, msg) {
  var f, obj = {
    grantee: jspb.Message.getFieldWithDefault(msg, 1, ""),
    msgsList: jspb.Message.toObjectList(msg.getMsgsList(),
    google_protobuf_any_pb.Any.toObject, includeInstance)
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
 * @return {!proto.cosmos.authz.v1beta1.MsgExec}
 */
proto.cosmos.authz.v1beta1.MsgExec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.authz.v1beta1.MsgExec;
  return proto.cosmos.authz.v1beta1.MsgExec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.authz.v1beta1.MsgExec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.authz.v1beta1.MsgExec}
 */
proto.cosmos.authz.v1beta1.MsgExec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantee(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addMsgs(value);
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
proto.cosmos.authz.v1beta1.MsgExec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.authz.v1beta1.MsgExec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.authz.v1beta1.MsgExec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgExec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrantee();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMsgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional string grantee = 1;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.MsgExec.prototype.getGrantee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.MsgExec} returns this
 */
proto.cosmos.authz.v1beta1.MsgExec.prototype.setGrantee = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated google.protobuf.Any msgs = 2;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.cosmos.authz.v1beta1.MsgExec.prototype.getMsgsList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.cosmos.authz.v1beta1.MsgExec} returns this
*/
proto.cosmos.authz.v1beta1.MsgExec.prototype.setMsgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.cosmos.authz.v1beta1.MsgExec.prototype.addMsgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.authz.v1beta1.MsgExec} returns this
 */
proto.cosmos.authz.v1beta1.MsgExec.prototype.clearMsgsList = function() {
  return this.setMsgsList([]);
};





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
proto.cosmos.authz.v1beta1.MsgGrantResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.authz.v1beta1.MsgGrantResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.authz.v1beta1.MsgGrantResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgGrantResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.cosmos.authz.v1beta1.MsgGrantResponse}
 */
proto.cosmos.authz.v1beta1.MsgGrantResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.authz.v1beta1.MsgGrantResponse;
  return proto.cosmos.authz.v1beta1.MsgGrantResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.authz.v1beta1.MsgGrantResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.authz.v1beta1.MsgGrantResponse}
 */
proto.cosmos.authz.v1beta1.MsgGrantResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.cosmos.authz.v1beta1.MsgGrantResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.authz.v1beta1.MsgGrantResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.authz.v1beta1.MsgGrantResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgGrantResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





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
proto.cosmos.authz.v1beta1.MsgRevoke.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.authz.v1beta1.MsgRevoke.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.authz.v1beta1.MsgRevoke} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgRevoke.toObject = function(includeInstance, msg) {
  var f, obj = {
    granter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    grantee: jspb.Message.getFieldWithDefault(msg, 2, ""),
    msgTypeUrl: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.cosmos.authz.v1beta1.MsgRevoke}
 */
proto.cosmos.authz.v1beta1.MsgRevoke.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.authz.v1beta1.MsgRevoke;
  return proto.cosmos.authz.v1beta1.MsgRevoke.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.authz.v1beta1.MsgRevoke} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.authz.v1beta1.MsgRevoke}
 */
proto.cosmos.authz.v1beta1.MsgRevoke.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGranter(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setGrantee(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgTypeUrl(value);
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
proto.cosmos.authz.v1beta1.MsgRevoke.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.authz.v1beta1.MsgRevoke.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.authz.v1beta1.MsgRevoke} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgRevoke.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGranter();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getGrantee();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMsgTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string granter = 1;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.MsgRevoke.prototype.getGranter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.MsgRevoke} returns this
 */
proto.cosmos.authz.v1beta1.MsgRevoke.prototype.setGranter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string grantee = 2;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.MsgRevoke.prototype.getGrantee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.MsgRevoke} returns this
 */
proto.cosmos.authz.v1beta1.MsgRevoke.prototype.setGrantee = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string msg_type_url = 3;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.MsgRevoke.prototype.getMsgTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.MsgRevoke} returns this
 */
proto.cosmos.authz.v1beta1.MsgRevoke.prototype.setMsgTypeUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





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
proto.cosmos.authz.v1beta1.MsgRevokeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.authz.v1beta1.MsgRevokeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.authz.v1beta1.MsgRevokeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgRevokeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.cosmos.authz.v1beta1.MsgRevokeResponse}
 */
proto.cosmos.authz.v1beta1.MsgRevokeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.authz.v1beta1.MsgRevokeResponse;
  return proto.cosmos.authz.v1beta1.MsgRevokeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.authz.v1beta1.MsgRevokeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.authz.v1beta1.MsgRevokeResponse}
 */
proto.cosmos.authz.v1beta1.MsgRevokeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.cosmos.authz.v1beta1.MsgRevokeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.authz.v1beta1.MsgRevokeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.authz.v1beta1.MsgRevokeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.MsgRevokeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.cosmos.authz.v1beta1);
