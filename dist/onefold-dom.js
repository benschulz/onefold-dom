/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function e(){return function(a){return a}(function(a){return{dom:{determineDepth:a.b,isOrContains:a.c,strictlyContains:a.d,element:{closest:a.element.a,matches:a.element.matches}}}}(function(){function a(b,c){return!!(b.compareDocumentPosition(c)&16)}var d=window.Element,f=d.prototype.webkitMatchesSelector||d.prototype.mozMatchesSelector||d.prototype.msMatchesSelector||d.prototype.matches;return{b:function(b,c){for(var a=0;c;){if(c===b)return a;c=c.parentNode;++a}throw Error("The given node is not part of the subtree.");
},c:function(b,c){return b===c||a(b,c)},d:a,element:{a:function(b,a){do{if(f.call(b,a))return b;b=b.parentElement}while(b);return null},matches:function(a,c){return f.call(a,c)}}}}()))}"function"===typeof define&&define.amd?define([],e):window["onefold-dom"]=e();
