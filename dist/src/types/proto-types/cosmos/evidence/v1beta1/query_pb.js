// source: cosmos/evidence/v1beta1/query.proto
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

var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
goog.object.extend(proto, cosmos_base_query_v1beta1_pagination_pb);
var gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest', null, global);
goog.exportSymbol('proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse', null, global);
goog.exportSymbol('proto.cosmos.evidence.v1beta1.QueryEvidenceRequest', null, global);
goog.exportSymbol('proto.cosmos.evidence.v1beta1.QueryEvidenceResponse', null, global);
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
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.evidence.v1beta1.QueryEvidenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.displayName = 'proto.cosmos.evidence.v1beta1.QueryEvidenceRequest';
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
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.evidence.v1beta1.QueryEvidenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.displayName = 'proto.cosmos.evidence.v1beta1.QueryEvidenceResponse';
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
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.displayName = 'proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest';
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
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.displayName = 'proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse';
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
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    evidenceHash: msg.getEvidenceHash_asB64()
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
 * @return {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest}
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.evidence.v1beta1.QueryEvidenceRequest;
  return proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest}
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEvidenceHash(value);
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
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvidenceHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes evidence_hash = 1;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.prototype.getEvidenceHash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes evidence_hash = 1;
 * This is a type-conversion wrapper around `getEvidenceHash()`
 * @return {string}
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.prototype.getEvidenceHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEvidenceHash()));
};


/**
 * optional bytes evidence_hash = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEvidenceHash()`
 * @return {!Uint8Array}
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.prototype.getEvidenceHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEvidenceHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.cosmos.evidence.v1beta1.QueryEvidenceRequest} returns this
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceRequest.prototype.setEvidenceHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
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
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    evidence: (f = msg.getEvidence()) && google_protobuf_any_pb.Any.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.evidence.v1beta1.QueryEvidenceResponse}
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.evidence.v1beta1.QueryEvidenceResponse;
  return proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.evidence.v1beta1.QueryEvidenceResponse}
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setEvidence(value);
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
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.evidence.v1beta1.QueryEvidenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvidence();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Any evidence = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.prototype.getEvidence = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 1));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.cosmos.evidence.v1beta1.QueryEvidenceResponse} returns this
*/
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.prototype.setEvidence = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.evidence.v1beta1.QueryEvidenceResponse} returns this
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.prototype.clearEvidence = function() {
  return this.setEvidence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.evidence.v1beta1.QueryEvidenceResponse.prototype.hasEvidence = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageRequest.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest;
  return proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageRequest;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageRequest.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 1;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 1));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest} returns this
*/
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest} returns this
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.repeatedFields_ = [1];



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
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    evidenceList: jspb.Message.toObjectList(msg.getEvidenceList(),
    google_protobuf_any_pb.Any.toObject, includeInstance),
    pagination: (f = msg.getPagination()) && cosmos_base_query_v1beta1_pagination_pb.PageResponse.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse;
  return proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addEvidence(value);
      break;
    case 2:
      var value = new cosmos_base_query_v1beta1_pagination_pb.PageResponse;
      reader.readMessage(value,cosmos_base_query_v1beta1_pagination_pb.PageResponse.deserializeBinaryFromReader);
      msg.setPagination(value);
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
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvidenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageResponse.serializeBinaryToWriter
    );
  }
};


/**
 * repeated google.protobuf.Any evidence = 1;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.getEvidenceList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 1));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse} returns this
*/
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.setEvidenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.addEvidence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse} returns this
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.clearEvidenceList = function() {
  return this.setEvidenceList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse} returns this
*/
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse} returns this
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.evidence.v1beta1.QueryAllEvidenceResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.cosmos.evidence.v1beta1);
