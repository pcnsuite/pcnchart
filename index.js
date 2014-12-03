'use strict';

var pcnlint = require('pcnlint');
var LayoutGraph = require('./lib/layout/LayoutGraph');
var builder = require('./lib/builder');

module.exports = function(pcn) {
  var cleanData;

  try {
    if (typeof pcn === 'object') {
      pcnlint.testDocument(JSON.stringify(pcn));
      cleanData = pcn;
    } else if (typeof pcn === 'string') {
      pcnlint.testDocument(pcn);
      cleanData = JSON.parse(pcn);
    } else {
      throw new Error('Unsupported input to pcnchart.  Must be object or JSON string.');
    }
  } catch (e) {
    throw new Error('PCN Input Invalid - ' + e.message);
  }

  var layoutGraph = new LayoutGraph(cleanData);
  var data = builder(cleanData.metadata.title, layoutGraph);

  return data;
};

