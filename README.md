pcnchart
========

Utility for generating an SVG flowchart from Process Chain Network 

*pcnchart* takes a single input; data conforming to the following specification:

https://github.com/mjswensen/pcn-spec

It outputs an SVG String.

##Installation##

`npm install pcnchart`

##Server-Side Usage##

For simple server-side rendering with an Express controller:

```javascript
var charter = require('pcnchart');

exports.graph = function(req, res) {

  // Send PCN data conforming to Specification to chart utility
  var svg = charter(pcnDataStructure);

  // Set HTTP Headers for SVG
  res.set({
    'Content-Type': 'image/svg+xml',
    // Note: Sometimes necessary for embedding on a page 
    // 'X-Frame-Options': 'SAMEORIGIN' 
  });
  res.send(svg);
}
```
##Client-Side Usage##

Rendering on the client is also simple by combining tools such as Browserify
to include *pcnchart* and then parsing the SVG string to DOM.

```javascript
var charter = require('pcnchart'); // Browserify or similar for using NPM

/* Get pcnDataStructure conforming to Specification */

var svgString = charter(pcnDataStructure);

// Use built-in DOMParser to parse SVG string
var parser = new DOMParser();
var svgDoc = parser.parseFromString(svgString);

// Get the SVG element from the Parsed Document
var svgElement = svgDoc.body.getElementsByTagName('svg')[0];

// Append the parsed SVG into a container
var container = document.getElementById('someContainerId');
container.appendChild(svgElement);
```
