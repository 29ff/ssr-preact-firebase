'use strict';

var _preact = require('preact');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _facts = require('./facts');

var _facts2 = _interopRequireDefault(_facts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var facts = window.facts ? window.facts : {};
(0, _preact.render)((0, _preact.h)(_App2.default, { facts: facts }), document.getElementById('root'));