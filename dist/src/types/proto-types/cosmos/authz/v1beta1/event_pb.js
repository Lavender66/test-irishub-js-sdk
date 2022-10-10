// source: cosmos/authz/v1beta1/event.proto
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

goog.exportSymbol('proto.cosmos.authz.v1beta1.EventGrant', null, global);
goog.exportSymbol('proto.cosmos.authz.v1beta1.EventRevoke', null, global);
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
proto.cosmos.authz.v1beta1.EventGrant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.authz.v1beta1.EventGrant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.authz.v1beta1.EventGrant.displayName = 'proto.cosmos.authz.v1beta1.EventGrant';
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
proto.cosmos.authz.v1beta1.EventRevoke = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.authz.v1beta1.EventRevoke, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.authz.v1beta1.EventRevoke.displayName = 'proto.cosmos.authz.v1beta1.EventRevoke';
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
proto.cosmos.authz.v1beta1.EventGrant.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.authz.v1beta1.EventGrant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.authz.v1beta1.EventGrant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.EventGrant.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgTypeUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    granter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    grantee: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cosmos.authz.v1beta1.EventGrant}
 */
proto.cosmos.authz.v1beta1.EventGrant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.authz.v1beta1.EventGrant;
  return proto.cosmos.authz.v1beta1.EventGrant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.authz.v1beta1.EventGrant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.authz.v1beta1.EventGrant}
 */
proto.cosmos.authz.v1beta1.EventGrant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgTypeUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGranter(value);
      break;
    case 4:
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
proto.cosmos.authz.v1beta1.EventGrant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.authz.v1beta1.EventGrant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.authz.v1beta1.EventGrant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.EventGrant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGranter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGrantee();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string msg_type_url = 2;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.EventGrant.prototype.getMsgTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.EventGrant} returns this
 */
proto.cosmos.authz.v1beta1.EventGrant.prototype.setMsgTypeUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string granter = 3;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.EventGrant.prototype.getGranter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.EventGrant} returns this
 */
proto.cosmos.authz.v1beta1.EventGrant.prototype.setGranter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string grantee = 4;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.EventGrant.prototype.getGrantee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.EventGrant} returns this
 */
proto.cosmos.authz.v1beta1.EventGrant.prototype.setGrantee = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.cosmos.authz.v1beta1.EventRevoke.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.authz.v1beta1.EventRevoke.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.authz.v1beta1.EventRevoke} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.EventRevoke.toObject = function(includeInstance, msg) {
  var f, obj = {
    msgTypeUrl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    granter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    grantee: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.cosmos.authz.v1beta1.EventRevoke}
 */
proto.cosmos.authz.v1beta1.EventRevoke.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.authz.v1beta1.EventRevoke;
  return proto.cosmos.authz.v1beta1.EventRevoke.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.authz.v1beta1.EventRevoke} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.authz.v1beta1.EventRevoke}
 */
proto.cosmos.authz.v1beta1.EventRevoke.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgTypeUrl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGranter(value);
      break;
    case 4:
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
proto.cosmos.authz.v1beta1.EventRevoke.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.authz.v1beta1.EventRevoke.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.authz.v1beta1.EventRevoke} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.authz.v1beta1.EventRevoke.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMsgTypeUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGranter();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGrantee();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string msg_type_url = 2;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.EventRevoke.prototype.getMsgTypeUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.EventRevoke} returns this
 */
proto.cosmos.authz.v1beta1.EventRevoke.prototype.setMsgTypeUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string granter = 3;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.EventRevoke.prototype.getGranter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.EventRevoke} returns this
 */
proto.cosmos.authz.v1beta1.EventRevoke.prototype.setGranter = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string grantee = 4;
 * @return {string}
 */
proto.cosmos.authz.v1beta1.EventRevoke.prototype.getGrantee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.authz.v1beta1.EventRevoke} returns this
 */
proto.cosmos.authz.v1beta1.EventRevoke.prototype.setGrantee = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto.cosmos.authz.v1beta1);
