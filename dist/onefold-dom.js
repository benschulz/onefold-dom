/*
 Copyright (c) 2015, Ben Schulz
 License: BSD 3-clause (http://opensource.org/licenses/BSD-3-Clause)
*/
function d(){return function(a){return a}(function(a){return{dom:{determineDepth:a.c,isOrContains:a.d,strictlyContains:a.f,element:{closest:a.element.b,matches:a.element.matches},classes:{add:a.a.add,isPresent:a.a.e,remove:a.a.remove}}}}(function(){function a(g,b){var a=(" "+g+" ").replace(" "+b+" "," ");return a.substring(" "===a[0]?1:0," "===a[a.length-1]?a.length-1:a.length)}function e(a,b){return!!(a.compareDocumentPosition(b)&16)}var c=window.Element,f=c.prototype.webkitMatchesSelector||c.prototype.mozMatchesSelector||
c.prototype.msMatchesSelector;return{c:function(a,b){for(var c=0;b;){if(b===a)return c;b=b.parentNode;++c}throw Error("The given node is not part of the subtree.");},d:function(a,b){return a===b||e(a,b)},f:e,element:{b:function(a,b){do{if(f.call(a,b))return a;a=a.parentElement}while(a);return null},matches:function(a,b){return f.call(a,b)}},a:{add:function(c,b){return a(c,b)+" "+b},e:function(a,b){return 0<=(" "+a+" ").indexOf(" "+b+" ")},remove:a}}}()))}
"function"===typeof define&&define.amd?define([],d):window["onefold-dom"]=d();
