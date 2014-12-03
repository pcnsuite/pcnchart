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

Rendering on the client is also simple by using tools such as Browserify
to include *pcnchart* into your browser scripts.

```javascript
var charter = require('pcnchart'); // Browserify or similar for using NPM

/* Get pcnDataStructure conforming to Specification */
var pcnDataStructure;

var svgElement = charter(pcnDataStructure);

// Append the parsed SVG into a container
var container = document.getElementById('someContainerId');
container.appendChild(svgElement);
```
