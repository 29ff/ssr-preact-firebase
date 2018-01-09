'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrpreact = undefined;

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _preact = require('preact');

var _preactRenderToString = require('preact-render-to-string');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

var _facts = require('./src/facts');

var _facts2 = _interopRequireDefault(_facts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var app = (0, _express2.default)();

app.get('**', function (req, res) {
  (0, _facts2.default)().then(function (facts) {
    var index = _fs2.default.readFileSync(__dirname + '/index.html', 'utf8');
    var reactHtml = renderToString((0, _preact.h)(_App2.default, { facts: facts }));
    var html = index.replace('<!-- ::APP:: -->', reactHtml);
    html = html.replace('/* ::facts:: */', 'window.facts = ' + JSON.stringify(facts));
    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(html);
  });
});

var ssrpreact = exports.ssrpreact = functions.https.onRequest(app);