'use strict';

module.exports = typeof window === 'undefined' ? require('./xml/builder') : require('./dom/builder');

