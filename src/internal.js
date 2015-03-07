'use strict';

define([], function () {
    function addClass(classes, classToAdd) {
        return removeClass(classes, classToAdd) + ' ' + classToAdd;
    }

    function isClassPresent(classes, classToCheckFor) {
        return (' ' + classes + ' ').indexOf(' ' + classToCheckFor + ' ') >= 0;
    }

    function removeClass(classes, classToRemove) {
        var raw = (' ' + classes + ' ').replace(' ' + classToRemove + ' ', ' ');
        var from = raw[0] === ' ' ? 1 : 0;
        var to = raw[raw.length - 1] === ' ' ? raw.length - 1 : raw.length;
        return raw.substring(from, to);
    }

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
    var matches = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;

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
        },

        classes: {
            add: addClass,
            isPresent: isClassPresent,
            remove: removeClass
        }
    };
});