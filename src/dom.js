'use strict';

define(['./internal'], function (internal) {
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
});