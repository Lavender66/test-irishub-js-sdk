// source: irismod/coinswap/query.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var cosmos_base_query_v1beta1_pagination_pb = require('../../cosmos/base/query/v1beta1/pagination_pb.js');
goog.object.extend(proto, cosmos_base_query_v1beta1_pagination_pb);
goog.exportSymbol('proto.irismod.coinswap.PoolInfo', null, global);
goog.exportSymbol('proto.irismod.coinswap.QueryLiquidityPoolRequest', null, global);
goog.exportSymbol('proto.irismod.coinswap.QueryLiquidityPoolResponse', null, global);
goog.exportSymbol('proto.irismod.coinswap.QueryLiquidityPoolsRequest', null, global);
goog.exportSymbol('proto.irismod.coinswap.QueryLiquidityPoolsResponse', null, global);
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
proto.irismod.coinswap.QueryLiquidityPoolRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.coinswap.QueryLiquidityPoolRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.coinswap.QueryLiquidityPoolRequest.displayName = 'proto.irismod.coinswap.QueryLiquidityPoolRequest';
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
proto.irismod.coinswap.QueryLiquidityPoolResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.coinswap.QueryLiquidityPoolResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.coinswap.QueryLiquidityPoolResponse.displayName = 'proto.irismod.coinswap.QueryLiquidityPoolResponse';
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
proto.irismod.coinswap.QueryLiquidityPoolsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.coinswap.QueryLiquidityPoolsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.coinswap.QueryLiquidityPoolsRequest.displayName = 'proto.irismod.coinswap.QueryLiquidityPoolsRequest';
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
proto.irismod.coinswap.QueryLiquidityPoolsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.irismod.coinswap.QueryLiquidityPoolsResponse.repeatedFields_, null);
};
goog.inherits(proto.irismod.coinswap.QueryLiquidityPoolsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.coinswap.QueryLiquidityPoolsResponse.displayName = 'proto.irismod.coinswap.QueryLiquidityPoolsResponse';
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
proto.irismod.coinswap.PoolInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.irismod.coinswap.PoolInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.coinswap.PoolInfo.displayName = 'proto.irismod.coinswap.PoolInfo';
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
proto.irismod.coinswap.QueryLiquidityPoolRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.coinswap.QueryLiquidityPoolRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.QueryLiquidityPoolRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    lptDenom: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolRequest}
 */
proto.irismod.coinswap.QueryLiquidityPoolRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.coinswap.QueryLiquidityPoolRequest;
  return proto.irismod.coinswap.QueryLiquidityPoolRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolRequest}
 */
proto.irismod.coinswap.QueryLiquidityPoolRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLptDenom(value);
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
proto.irismod.coinswap.QueryLiquidityPoolRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.coinswap.QueryLiquidityPoolRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.QueryLiquidityPoolRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLptDenom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string lpt_denom = 1;
 * @return {string}
 */
proto.irismod.coinswap.QueryLiquidityPoolRequest.prototype.getLptDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolRequest} returns this
 */
proto.irismod.coinswap.QueryLiquidityPoolRequest.prototype.setLptDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.irismod.coinswap.QueryLiquidityPoolResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.coinswap.QueryLiquidityPoolResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.QueryLiquidityPoolResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pool: (f = msg.getPool()) && proto.irismod.coinswap.PoolInfo.toObject(includeInstance, f)
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
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolResponse}
 */
proto.irismod.coinswap.QueryLiquidityPoolResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.coinswap.QueryLiquidityPoolResponse;
  return proto.irismod.coinswap.QueryLiquidityPoolResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolResponse}
 */
proto.irismod.coinswap.QueryLiquidityPoolResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.irismod.coinswap.PoolInfo;
      reader.readMessage(value,proto.irismod.coinswap.PoolInfo.deserializeBinaryFromReader);
      msg.setPool(value);
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
proto.irismod.coinswap.QueryLiquidityPoolResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.coinswap.QueryLiquidityPoolResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.QueryLiquidityPoolResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPool();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.irismod.coinswap.PoolInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional PoolInfo pool = 1;
 * @return {?proto.irismod.coinswap.PoolInfo}
 */
proto.irismod.coinswap.QueryLiquidityPoolResponse.prototype.getPool = function() {
  return /** @type{?proto.irismod.coinswap.PoolInfo} */ (
    jspb.Message.getWrapperField(this, proto.irismod.coinswap.PoolInfo, 1));
};


/**
 * @param {?proto.irismod.coinswap.PoolInfo|undefined} value
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolResponse} returns this
*/
proto.irismod.coinswap.QueryLiquidityPoolResponse.prototype.setPool = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolResponse} returns this
 */
proto.irismod.coinswap.QueryLiquidityPoolResponse.prototype.clearPool = function() {
  return this.setPool(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.coinswap.QueryLiquidityPoolResponse.prototype.hasPool = function() {
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
proto.irismod.coinswap.QueryLiquidityPoolsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.coinswap.QueryLiquidityPoolsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.QueryLiquidityPoolsRequest.toObject = function(includeInstance, msg) {
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
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsRequest}
 */
proto.irismod.coinswap.QueryLiquidityPoolsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.coinswap.QueryLiquidityPoolsRequest;
  return proto.irismod.coinswap.QueryLiquidityPoolsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsRequest}
 */
proto.irismod.coinswap.QueryLiquidityPoolsRequest.deserializeBinaryFromReader = function(msg, reader) {
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
proto.irismod.coinswap.QueryLiquidityPoolsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.coinswap.QueryLiquidityPoolsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.QueryLiquidityPoolsRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.irismod.coinswap.QueryLiquidityPoolsRequest.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageRequest} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageRequest, 1));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageRequest|undefined} value
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsRequest} returns this
*/
proto.irismod.coinswap.QueryLiquidityPoolsRequest.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsRequest} returns this
 */
proto.irismod.coinswap.QueryLiquidityPoolsRequest.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.coinswap.QueryLiquidityPoolsRequest.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.repeatedFields_ = [1];



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
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.coinswap.QueryLiquidityPoolsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    poolsList: jspb.Message.toObjectList(msg.getPoolsList(),
    proto.irismod.coinswap.PoolInfo.toObject, includeInstance),
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
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsResponse}
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.coinswap.QueryLiquidityPoolsResponse;
  return proto.irismod.coinswap.QueryLiquidityPoolsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsResponse}
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.irismod.coinswap.PoolInfo;
      reader.readMessage(value,proto.irismod.coinswap.PoolInfo.deserializeBinaryFromReader);
      msg.addPools(value);
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
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.coinswap.QueryLiquidityPoolsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.coinswap.QueryLiquidityPoolsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPoolsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.irismod.coinswap.PoolInfo.serializeBinaryToWriter
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
 * repeated PoolInfo pools = 1;
 * @return {!Array<!proto.irismod.coinswap.PoolInfo>}
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.getPoolsList = function() {
  return /** @type{!Array<!proto.irismod.coinswap.PoolInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.irismod.coinswap.PoolInfo, 1));
};


/**
 * @param {!Array<!proto.irismod.coinswap.PoolInfo>} value
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsResponse} returns this
*/
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.setPoolsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.irismod.coinswap.PoolInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.irismod.coinswap.PoolInfo}
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.addPools = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.irismod.coinswap.PoolInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsResponse} returns this
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.clearPoolsList = function() {
  return this.setPoolsList([]);
};


/**
 * optional cosmos.base.query.v1beta1.PageResponse pagination = 2;
 * @return {?proto.cosmos.base.query.v1beta1.PageResponse}
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.getPagination = function() {
  return /** @type{?proto.cosmos.base.query.v1beta1.PageResponse} */ (
    jspb.Message.getWrapperField(this, cosmos_base_query_v1beta1_pagination_pb.PageResponse, 2));
};


/**
 * @param {?proto.cosmos.base.query.v1beta1.PageResponse|undefined} value
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsResponse} returns this
*/
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.setPagination = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.coinswap.QueryLiquidityPoolsResponse} returns this
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.clearPagination = function() {
  return this.setPagination(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.coinswap.QueryLiquidityPoolsResponse.prototype.hasPagination = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.irismod.coinswap.PoolInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.coinswap.PoolInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.coinswap.PoolInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.PoolInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    escrowAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    standard: (f = msg.getStandard()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    token: (f = msg.getToken()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    lpt: (f = msg.getLpt()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    fee: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.irismod.coinswap.PoolInfo}
 */
proto.irismod.coinswap.PoolInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.coinswap.PoolInfo;
  return proto.irismod.coinswap.PoolInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.coinswap.PoolInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.coinswap.PoolInfo}
 */
proto.irismod.coinswap.PoolInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEscrowAddress(value);
      break;
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setStandard(value);
      break;
    case 4:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 5:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setLpt(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFee(value);
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
proto.irismod.coinswap.PoolInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.coinswap.PoolInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.coinswap.PoolInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.coinswap.PoolInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEscrowAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStandard();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getLpt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getFee();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.irismod.coinswap.PoolInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.coinswap.PoolInfo} returns this
 */
proto.irismod.coinswap.PoolInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string escrow_address = 2;
 * @return {string}
 */
proto.irismod.coinswap.PoolInfo.prototype.getEscrowAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.coinswap.PoolInfo} returns this
 */
proto.irismod.coinswap.PoolInfo.prototype.setEscrowAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional cosmos.base.v1beta1.Coin standard = 3;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.irismod.coinswap.PoolInfo.prototype.getStandard = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.irismod.coinswap.PoolInfo} returns this
*/
proto.irismod.coinswap.PoolInfo.prototype.setStandard = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.coinswap.PoolInfo} returns this
 */
proto.irismod.coinswap.PoolInfo.prototype.clearStandard = function() {
  return this.setStandard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.coinswap.PoolInfo.prototype.hasStandard = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional cosmos.base.v1beta1.Coin token = 4;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.irismod.coinswap.PoolInfo.prototype.getToken = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 4));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.irismod.coinswap.PoolInfo} returns this
*/
proto.irismod.coinswap.PoolInfo.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.coinswap.PoolInfo} returns this
 */
proto.irismod.coinswap.PoolInfo.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.coinswap.PoolInfo.prototype.hasToken = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional cosmos.base.v1beta1.Coin lpt = 5;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.irismod.coinswap.PoolInfo.prototype.getLpt = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 5));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.irismod.coinswap.PoolInfo} returns this
*/
proto.irismod.coinswap.PoolInfo.prototype.setLpt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.irismod.coinswap.PoolInfo} returns this
 */
proto.irismod.coinswap.PoolInfo.prototype.clearLpt = function() {
  return this.setLpt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.irismod.coinswap.PoolInfo.prototype.hasLpt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string fee = 6;
 * @return {string}
 */
proto.irismod.coinswap.PoolInfo.prototype.getFee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.coinswap.PoolInfo} returns this
 */
proto.irismod.coinswap.PoolInfo.prototype.setFee = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.irismod.coinswap);