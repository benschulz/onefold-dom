/**
 * @license Copyright (c) 2015, Ben Schulz
 * License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
 */
;(function(factory) {
    if (typeof define === 'function' && define['amd'])
        define([], factory);
    else
        window['onefold-dom'] = factory();
} (function() {
var onefold_dom_internal, onefold_dom_dom, onefold_dom;

onefold_dom_internal = function () {
  function strictlyContains(container, node) {
    return !!(container.compareDocumentPosition(node) & 16);
  }
  function determineDepth(root, node) {
    var depth = 0;
    while (node) {
      if (node === root)
        return depth;
      node = node.parentNode;
      ++depth;
    }
    throw new Error('The given node is not part of the subtree.');
  }
  var Element = window.Element;
  var matches = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.matches;
  function closest(element, selector) {
    do {
      if (matches.call(element, selector))
        return element;
      element = element.parentElement;
    } while (element);
    return null;
  }
  return {
    determineDepth: determineDepth,
    isOrContains: function (container, node) {
      return container === node || strictlyContains(container, node);
    },
    strictlyContains: strictlyContains,
    element: {
      closest: closest,
      matches: function (element, selector) {
        return matches.call(element, selector);
      }
    }
  };
}();

onefold_dom_dom = function (internal) {
  return {
    'dom': {
      'determineDepth': internal.determineDepth,
      'isOrContains': internal.isOrContains,
      'strictlyContains': internal.strictlyContains,
      'element': {
        'closest': internal.element.closest,
        'matches': internal.element.matches
      }
    }
  };
}(onefold_dom_internal);
onefold_dom = function (main) {
  return main;
}(onefold_dom_dom);return onefold_dom;
}));