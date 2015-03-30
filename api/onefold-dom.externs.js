/** @namespace */
de.benshu.onefold.dom = {};

/**
 * @template E
 * @param {Node} root
 * @param {Node} node
 * @returns {number}
 */
de.benshu.onefold.dom.determineDepth = function (root, node) {};

/**
 * @param {Node} container
 * @param {Node} node
 * @returns {boolean}
 */
de.benshu.onefold.dom.isOrContains = function (container, node) {};

/**
 * @param {Node} container
 * @param {Node} node
 * @returns {boolean}
 */
de.benshu.onefold.dom.strictlyContains = function (container, node) {};

/** @namespace */
de.benshu.onefold.dom.element = {};

/**
 * @param {Element} element
 * @param {string} selector
 * @returns {?Element}
 */
de.benshu.onefold.dom.element.closest = function (element, selector) {};

/**
 * @param {Element} element
 * @param {string} selector
 * @returns {boolean}
 */
de.benshu.onefold.dom.element.matches = function (element, selector) {};
