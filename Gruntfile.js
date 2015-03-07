'use strict';

module.exports = function (grunt) {
    require('grunt-commons')(grunt, {
        name: 'onefold-dom',
        main: 'dom',
        internalMain: 'internal'
    }).initialize({});
};
