'use strict';

var xmlBuilder = require('../xml/builder');

module.exports = function buildDOM(diagramTitle, layoutTree) {
  var xml = xmlBuilder(diagramTitle, layoutTree);
  var parser = new DOMParser();
  var svgDocument = parser.parseFromString(xml.toString(), 'image/svg+xml');

  return svgDocument.getElementsByTagName('svg')[0];
};
