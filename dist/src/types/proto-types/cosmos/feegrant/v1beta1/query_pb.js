// source: cosmos/feegrant/v1beta1/query.proto
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

var cosmos_feegrant_v1beta1_feegrant_pb = require('../../../cosmos/feegrant/v1beta1/feegrant_pb.js');
goog.object.extend(proto, cosmos_feegrant_v1beta1_feegrant_pb);
var cosmos_base_query_v1beta1_pagination_pb = require('../../../cosmos/base/query/v1beta1/pagination_pb.js');
goog.object.extend(proto, cosmos_base_query_v1beta1_pagination_pb);
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest', null, global);
goog.exportSymbol('proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse', null, global);
goog.exportSymbol('proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest', null, global);
goog.exportSymbol('proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse', null, global);
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
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.displayName = 'proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest';
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
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.displayName = 'proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse';
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
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.displayName = 'proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest';
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
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.repeatedFields_, null);
};
goog.inherits(proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.displayName = 'proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse';
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
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    granter: jspb.Message.getFieldWithDefault(msg, 1, ""),
    grantee: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest;
  return proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional string granter = 1;
 * @return {string}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.prototype.getGranter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest} returns this
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.prototype.setGranter = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string grantee = 2;
 * @return {string}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.prototype.getGrantee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest} returns this
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceRequest.prototype.setGrantee = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowance: (f = msg.getAllowance()) && cosmos_feegrant_v1beta1_feegrant_pb.Grant.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse;
  return proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_feegrant_v1beta1_feegrant_pb.Grant;
      reader.readMessage(value,cosmos_feegrant_v1beta1_feegrant_pb.Grant.deserializeBinaryFromReader);
      msg.setAllowance(value);
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
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowance();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_feegrant_v1beta1_feegrant_pb.Grant.serializeBinaryToWriter
    );
  }
};


/**
 * optional Grant allowance = 1;
 * @return {?proto.cosmos.feegrant.v1beta1.Grant}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.prototype.getAllowance = function() {
  return /** @type{?proto.cosmos.feegrant.v1beta1.Grant} */ (
    jspb.Message.getWrapperField(this, cosmos_feegrant_v1beta1_feegrant_pb.Grant, 1));
};


/**
 * @param {?proto.cosmos.feegrant.v1beta1.Grant|undefined} value
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse} returns this
*/
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.prototype.setAllowance = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse} returns this
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.prototype.clearAllowance = function() {
  return this.setAllowance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowanceResponse.prototype.hasAllowance = function() {
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
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    grantee: jspb.Message.getFieldWithDefault(msg, 1, ""),
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
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest;
  return proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGrantee();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPagination();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_query_v1beta1_pagination_pb.PageRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string grantee = 1;
 * @return {string}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.prototype.getGrantee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} returns this
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.prototype.setGrantee = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional cosmos.base.query.v1beta1.PageRequest pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageRequest}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} returns this
*/
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest} returns this
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.repeatedFields_ = [1];



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
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    allowancesList: jspb.Message.toObjectList(msg.getAllowancesList(),
    cosmos_feegrant_v1beta1_feegrant_pb.Grant.toObject, includeInstance),
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
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse;
  return proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_feegrant_v1beta1_feegrant_pb.Grant;
      reader.readMessage(value,cosmos_feegrant_v1beta1_feegrant_pb.Grant.deserializeBinaryFromReader);
      msg.addAllowances(value);
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
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAllowancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      cosmos_feegrant_v1beta1_feegrant_pb.Grant.serializeBinaryToWriter
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
 * repeated Grant allowances = 1;
 * @return {!Array<!proto.cosmos.feegrant.v1beta1.Grant>}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.getAllowancesList = function() {
  return /** @type{!Array<!proto.cosmos.feegrant.v1beta1.Grant>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_feegrant_v1beta1_feegrant_pb.Grant, 1));
};


/**
 * @param {!Array<!proto.cosmos.feegrant.v1beta1.Grant>} value
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse} returns this
*/
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.setAllowancesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.cosmos.feegrant.v1beta1.Grant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.feegrant.v1beta1.Grant}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.addAllowances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.cosmos.feegrant.v1beta1.Grant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse} returns this
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.clearAllowancesList = function() {
  return this.setAllowancesList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse} returns this
*/
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse} returns this
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.feegrant.v1beta1.QueryAllowancesResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.cosmos.feegrant.v1beta1);
