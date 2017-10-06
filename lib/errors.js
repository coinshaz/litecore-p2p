'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on unitedcore-p2p Module {0}'
};

module.exports = require('unitedcore-lib').errors.extend(spec);
