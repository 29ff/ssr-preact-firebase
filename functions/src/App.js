'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _preact = require('preact');

var App = function App(props) {

  var facts = props.facts.map(function (fact, index) {
    return (0, _preact.h)(
      'li',
      { key: index },
      fact.text
    );
  });

  return (0, _preact.h)(
    'ul',
    null,
    facts
  );
};

exports.default = App;