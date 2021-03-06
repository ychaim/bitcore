/*
 * Bitcore bindings for the browser
 */


module.exports.bignum = require('bignum');
module.exports.base58 = require('base58-native');
module.exports.EncodedData = require('./util/EncodedData');
module.exports.VersionedData = require('./util/VersionedData');
module.exports.Address = require('./Address');
module.exports.config = require('./config');
module.exports.log = require('./util/log');
module.exports.networks = require('./networks');
module.exports.Opcode = require('./Opcode');
module.exports.util = require('./util/util');
module.exports.Script = require('./Script');
module.exports.SINKey = require('./SINKey');
module.exports.Transaction = require('./Transaction');
module.exports.Peer = require('./Peer');
module.exports.Block = require('./Block');
module.exports.Connection = require('./Connection');
module.exports.ScriptInterpreter = require('./ScriptInterpreter');


if (typeof process.versions === 'undefined') {
  module.exports.bignum.config({EXPONENTIAL_AT: 9999999, DECIMAL_PLACES: 0, ROUNDING_MODE: 1});
}

