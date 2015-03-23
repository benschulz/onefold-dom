'use strict';

define([], function () {
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
        isOrContains: (container, node) => container === node || strictlyContains(container, node),
        strictlyContains: strictlyContains,

        element: {
            closest: closest,
            matches: (element, selector) => matches.call(element, selector)
        }
    };
});