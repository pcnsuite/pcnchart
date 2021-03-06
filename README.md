pcnchart
========

Utility for generating an SVG flowchart from Process Chain Network 

*pcnchart* takes a single input; data conforming to the following specification:

https://github.com/mjswensen/pcn-spec

It outputs an SVG String except when run in the Browser where it parses that
string into an [SVGSVGElement](https://developer.mozilla.org/en-US/docs/Web/API/SVGSVGElement)
node.

For information about this implementation, see the [wiki](https://github.com/pcnsuite/pcnchart/wiki).

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
var pcnchart = require('pcnchart'); // Browserify or similar for using NPM

/* Get pcnDataStructure conforming to Specification */
var pcnDataStructure;

var svgElement = pcnchart(pcnDataStructure);

// Append the parsed SVG into a container
var container = document.getElementById('someContainerId');
container.appendChild(svgElement);
```

For your convenience, I've included pre-built files in the `dist/` directory
for using *pcnchart* in the browser.  They expose the method `pcnchart()`
that behaves exactly as demonstrated above (ignore the `require()`
statement).

