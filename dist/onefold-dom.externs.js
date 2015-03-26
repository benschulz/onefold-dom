

/**
 * @namespace
 * @suppress {duplicate}
 */
var onefold = onefold || {};

/** @namespace */
onefold.dom = {};

/**
 * @template E
 * @param {Node} root
 * @param {Node} node
 * @returns {number}
 */
onefold.dom.determineDepth = function (root, node) {};

/**
 * @param {Node} container
 * @param {Node} node
 * @returns {boolean}
 */
onefold.dom.isOrContains = function (container, node) {};

/**
 * @param {Node} container
 * @param {Node} node
 * @returns {boolean}
 */
onefold.dom.strictlyContains = function (container, node) {};

/** @namespace */
onefold.dom.element = {};

/**
 * @param {Element} element
 * @param {string} selector
 * @returns {?Element}
 */
onefold.dom.element.closest = function (element, selector) {};

/**
 * @param {Element} element
 * @param {string} selector
 * @returns {boolean}
 */
onefold.dom.element.matches = function (element, selector) {};