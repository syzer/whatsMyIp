'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _execa = require('execa');

var _execa2 = _interopRequireDefault(_execa);

var _ip = require('ip');

var _ip2 = _interopRequireDefault(_ip);

var _qrcode = require('qrcode');

var _qrcode2 = _interopRequireDefault(_qrcode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultPort = process.env.PORT || 3000;
const ipAddress = process.env.IP || _ip2.default.address();
const ipPublicAddress = _execa2.default.shell('curl ipinfo.io/ip').then(({ stdout }) => stdout).catch((0, _ramda.tap)(() => console.error('You are offline!')));

exports.default = (port = defaultPort) => Promise.all([ipAddress, ipPublicAddress]).then((0, _ramda.pipe)((0, _ramda.map)(e => `http://${e}:${port}`), (0, _ramda.tap)(console.log), (0, _ramda.map)(e => [e, _qrcode2.default.toString(e, {
  errorCorrectionLevel: 'H',
  type: 'terminal'
}).then(console.log)]))) // warning not A+ promise
.catch(console.error);
