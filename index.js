'use strict';

var LayoutGraph = require('./lib/layout/LayoutGraph');
var svgBuilder = require('./lib/svg/builder');

module.exports = function(pcn) {
  var layoutGraph = new LayoutGraph(pcn);
  var root = svgBuilder(pcn.metadata.title, layoutGraph);

  return root.toString();
};

