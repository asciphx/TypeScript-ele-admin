(function t(e,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r(require("echarts"));else if(typeof define==="function"&&define.amd)define(["echarts"],r);else if(typeof exports==="object")exports["echarts-wordcloud"]=r(require("echarts"));else e["echarts-wordcloud"]=r(e["echarts"])})(this,function(r){return function(r){var a={};function n(t){if(a[t])return a[t].exports;var e=a[t]={exports:{},id:t,loaded:false};r[t].call(e.exports,e,e.exports,n);e.loaded=true;return e.exports}n.m=r;n.c=a;n.p="";return n(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){var v=r(2);var d=r(3);r(11);r(13);var g=r(14);if(!g.isSupported){throw new Error("Sorry your browser not support wordCloud")}function p(t){var e=t.getContext("2d");var r=e.getImageData(0,0,t.width,t.height);var a=e.createImageData(r);for(var n=0;n<r.data.length;n+=4){var i=r.data[n]+r.data[n+1]+r.data[n+2];var o=r.data[n+3];if(o<128||i>128*3){a.data[n]=0;a.data[n+1]=0;a.data[n+2]=0;a.data[n+3]=0}else{a.data[n]=255;a.data[n+1]=255;a.data[n+2]=255;a.data[n+3]=255}}e.putImageData(a,0,0)}v.registerLayout(function(c,h){c.eachSeriesByType("wordCloud",function(r){var a=d.getLayoutRect(r.getBoxLayoutParams(),{width:h.getWidth(),height:h.getHeight()});var n=r.getData();var t=document.createElement("canvas");t.width=a.width;t.height=a.height;var e=t.getContext("2d");var i=r.get("maskImage");if(i){try{e.drawImage(i,0,0,t.width,t.height);p(t)}catch(t){console.error("Invalid mask image");console.error(t.toString())}}var o=r.get("sizeRange");var u=r.get("rotationRange");var f=n.getDataExtent("value");var l=Math.PI/180;var s=r.get("gridSize");g(t,{list:n.mapArray("value",function(t,e){var r=n.getItemModel(e);return[n.getName(e),r.get("textStyle.normal.textSize",true)||v.number.linearMap(t,f,o),e]}).sort(function(t,e){return e[1]-t[1]}),fontFamily:r.get("textStyle.normal.fontFamily")||r.get("textStyle.emphasis.fontFamily")||c.get("textStyle.fontFamily"),fontWeight:r.get("textStyle.normal.fontWeight")||r.get("textStyle.emphasis.fontWeight")||c.get("textStyle.fontWeight"),gridSize:s,ellipticity:a.height/a.width,minRotation:u[0]*l,maxRotation:u[1]*l,clearCanvas:!i,rotateRatio:1,rotationStep:r.get("rotationStep")*l,drawOutOfBound:false,shuffle:false});t.addEventListener("wordclouddrawn",function(t){var e=t.detail.item;if(t.detail.drawn&&r.layoutInstance.ondraw){t.detail.drawn.gx+=a.x/s;t.detail.drawn.gy+=a.y/s;r.layoutInstance.ondraw(e[0],e[1],e[2],t.detail.drawn)}});r.layoutInstance={ondraw:null}})})},function(t,e){t.exports=r},function(t,e,r){"use strict";var o=r(4);var g=r(6);var a=r(9);var p=r(10);var m=a.parsePercent;var v=o.each;var i={};var n=["left","right","top","bottom","width","height"];function u(s,c,h,v,d){var g=0;var p=0;if(v==null){v=Infinity}if(d==null){d=Infinity}var m=0;c.eachChild(function(t,e){var r=t.position;var a=t.getBoundingRect();var n=c.childAt(e+1);var i=n&&n.getBoundingRect();var o;var u;if(s==="horizontal"){var f=a.width+(i?-i.x+a.x:0);o=g+f;if(o>v||t.newline){g=0;o=f;p+=m+h;m=a.height}else{m=Math.max(m,a.height)}}else{var l=a.height+(i?-i.y+a.y:0);u=p+l;if(u>d||t.newline){g+=m+h;p=0;u=l;m=a.width}else{m=Math.max(m,a.width)}}if(t.newline){return}r[0]=g;r[1]=p;s==="horizontal"?g=o+h:p=u+h})}i.box=u;i.vbox=o.curry(u,"vertical");i.hbox=o.curry(u,"horizontal");i.getAvailableSize=function(t,e,r){var a=e.width;var n=e.height;var i=m(t.x,a);var o=m(t.y,n);var u=m(t.x2,a);var f=m(t.y2,n);(isNaN(i)||isNaN(parseFloat(t.x)))&&(i=0);(isNaN(u)||isNaN(parseFloat(t.x2)))&&(u=a);(isNaN(o)||isNaN(parseFloat(t.y)))&&(o=0);(isNaN(f)||isNaN(parseFloat(t.y2)))&&(f=n);r=p.normalizeCssArray(r||0);return{width:Math.max(u-i-r[1]-r[3],0),height:Math.max(f-o-r[0]-r[2],0)}};i.getLayoutRect=function(t,e,r){r=p.normalizeCssArray(r||0);var a=e.width;var n=e.height;var i=m(t.left,a);var o=m(t.top,n);var u=m(t.right,a);var f=m(t.bottom,n);var l=m(t.width,a);var s=m(t.height,n);var c=r[2]+r[0];var h=r[1]+r[3];var v=t.aspect;if(isNaN(l)){l=a-u-h-i}if(isNaN(s)){s=n-f-c-o}if(isNaN(l)&&isNaN(s)){if(v>a/n){l=a*.8}else{s=n*.8}}if(v!=null){if(isNaN(l)){l=v*s}if(isNaN(s)){s=l/v}}if(isNaN(i)){i=a-u-l-h}if(isNaN(o)){o=n-f-s-c}switch(t.left||t.right){case"center":i=a/2-l/2-r[3];break;case"right":i=a-l-h;break}switch(t.top||t.bottom){case"middle":case"center":o=n/2-s/2-r[0];break;case"bottom":o=n-s-c;break}i=i||0;o=o||0;if(isNaN(l)){l=a-i-(u||0)}if(isNaN(s)){s=n-o-(f||0)}var d=new g(i+r[3],o+r[0],l,s);d.margin=r;return d};i.positionGroup=function(t,e,r,a){var n=t.getBoundingRect();e=o.extend(o.clone(e),{width:n.width,height:n.height});e=i.getLayoutRect(e,r,a);t.position=[e.x-n.x,e.y-n.y]};i.mergeLayoutParam=function(f,l,s){!o.isObject(s)&&(s={});var t=["width","left","right"];var e=["height","top","bottom"];var r=n(t);var a=n(e);i(t,f,r);i(e,f,a);function n(t){var e={};var r=0;var a={};var n=0;var i=s.ignoreSize?1:2;v(t,function(t){a[t]=f[t]});v(t,function(t){c(l,t)&&(e[t]=a[t]=l[t]);h(e,t)&&r++;h(a,t)&&n++});if(n===i||!r){return a}else if(r>=i){return e}else{for(var o=0;o<t.length;o++){var u=t[o];if(!c(e,u)&&c(f,u)){e[u]=f[u];break}}return e}}function c(t,e){return t.hasOwnProperty(e)}function h(t,e){return t[e]!=null&&t[e]!=="auto"}function i(t,e,r){v(t,function(t){e[t]=r[t]})}};i.getLayoutParams=function(t){return i.copyLayoutParams({},t)};i.copyLayoutParams=function(e,r){r&&e&&v(n,function(t){r.hasOwnProperty(t)&&(e[t]=r[t])});return e};t.exports=i},function(t,e,r){var a=r(5);var n={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1};var i=Object.prototype.toString;var o=Array.prototype;var u=o.forEach;var f=o.filter;var l=o.slice;var s=o.map;var c=o.reduce;function h(t){if(typeof t=="object"&&t!==null){var e=t;if(t instanceof Array){e=[];for(var r=0,a=t.length;r<a;r++){e[r]=h(t[r])}}else if(!z(t)&&!L(t)){e={};for(var n in t){if(t.hasOwnProperty(n)){e[n]=h(t[n])}}}return e}return t}function v(t,e,r){if(!O(e)||!O(t)){return r?h(e):t}for(var a in e){if(e.hasOwnProperty(a)){var n=t[a];var i=e[a];if(O(i)&&O(n)&&!F(i)&&!F(n)&&!L(i)&&!L(n)&&!z(i)&&!z(n)){v(n,i,r)}else if(r||!(a in t)){t[a]=h(e[a],true)}}}return t}function d(t,e){var r=t[0];for(var a=1,n=t.length;a<n;a++){r=v(r,t[a],e)}return r}function g(t,e){for(var r in e){if(e.hasOwnProperty(r)){t[r]=e[r]}}return t}function p(t,e,r){for(var a in e){if(e.hasOwnProperty(a)&&(r?e[a]!=null:t[a]==null)){t[a]=e[a]}}return t}function m(){return document.createElement("canvas")}var w;function y(){if(!w){w=W.createCanvas().getContext("2d")}return w}function x(t,e){if(t){if(t.indexOf){return t.indexOf(e)}for(var r=0,a=t.length;r<a;r++){if(t[r]===e){return r}}}return-1}function M(t,e){var r=t.prototype;function a(){}a.prototype=e.prototype;t.prototype=new a;for(var n in r){t.prototype[n]=r[n]}t.prototype.constructor=t;t.superClass=e}function b(t,e,r){t="prototype"in t?t.prototype:t;e="prototype"in e?e.prototype:e;p(t,e,r)}function S(t){if(!t){return}if(typeof t=="string"){return false}return typeof t.length=="number"}function C(t,e,r){if(!(t&&e)){return}if(t.forEach&&t.forEach===u){t.forEach(e,r)}else if(t.length===+t.length){for(var a=0,n=t.length;a<n;a++){e.call(r,t[a],a,t)}}else{for(var i in t){if(t.hasOwnProperty(i)){e.call(r,t[i],i,t)}}}}function I(t,e,r){if(!(t&&e)){return}if(t.map&&t.map===s){return t.map(e,r)}else{var a=[];for(var n=0,i=t.length;n<i;n++){a.push(e.call(r,t[n],n,t))}return a}}function T(t,e,r,a){if(!(t&&e)){return}if(t.reduce&&t.reduce===c){return t.reduce(e,r,a)}else{for(var n=0,i=t.length;n<i;n++){r=e.call(a,r,t[n],n,t)}return r}}function k(t,e,r){if(!(t&&e)){return}if(t.filter&&t.filter===f){return t.filter(e,r)}else{var a=[];for(var n=0,i=t.length;n<i;n++){if(e.call(r,t[n],n,t)){a.push(t[n])}}return a}}function N(t,e,r){if(!(t&&e)){return}for(var a=0,n=t.length;a<n;a++){if(e.call(r,t[a],a,t)){return t[a]}}}function E(t,e){var r=l.call(arguments,2);return function(){return t.apply(e,r.concat(l.call(arguments)))}}function A(t){var e=l.call(arguments,1);return function(){return t.apply(this,e.concat(l.call(arguments)))}}function F(t){return i.call(t)==="[object Array]"}function P(t){return typeof t==="function"}function R(t){return i.call(t)==="[object String]"}function O(t){var e=typeof t;return e==="function"||!!t&&e=="object"}function z(t){return!!n[i.call(t)]||t instanceof a}function L(t){return t&&t.nodeType===1&&typeof t.nodeName=="string"}function D(t){for(var e=0,r=arguments.length;e<r;e++){if(arguments[e]!=null){return arguments[e]}}}function q(){return Function.call.apply(l,arguments)}function j(t,e){if(!t){throw new Error(e)}}var W={inherits:M,mixin:b,clone:h,merge:v,mergeAll:d,extend:g,defaults:p,getContext:y,createCanvas:m,indexOf:x,slice:q,find:N,isArrayLike:S,each:C,map:I,reduce:T,filter:k,bind:E,curry:A,isArray:F,isString:R,isObject:O,isFunction:P,isBuildInObject:z,isDom:L,retrieve:D,assert:j,noop:function(){}};t.exports=W},function(t,e){var r=function(t){this.colorStops=t||[]};r.prototype={constructor:r,addColorStop:function(t,e){this.colorStops.push({offset:t,color:e})}};t.exports=r},function(t,e,r){"use strict";var a=r(7);var i=r(8);var n=a.applyTransform;var o=Math.min;var u=Math.abs;var f=Math.max;function l(t,e,r,a){this.x=t;this.y=e;this.width=r;this.height=a}l.prototype={constructor:l,union:function(t){var e=o(t.x,this.x);var r=o(t.y,this.y);this.width=f(t.x+t.width,this.x+this.width)-e;this.height=f(t.y+t.height,this.y+this.height)-r;this.x=e;this.y=r},applyTransform:function(){var e=[];var r=[];return function(t){if(!t){return}e[0]=this.x;e[1]=this.y;r[0]=this.x+this.width;r[1]=this.y+this.height;n(e,e,t);n(r,r,t);this.x=o(e[0],r[0]);this.y=o(e[1],r[1]);this.width=u(r[0]-e[0]);this.height=u(r[1]-e[1])}}(),calculateTransform:function(t){var e=this;var r=t.width/e.width;var a=t.height/e.height;var n=i.create();i.translate(n,n,[-e.x,-e.y]);i.scale(n,n,[r,a]);i.translate(n,n,[t.x,t.y]);return n},intersect:function(t){var e=this;var r=e.x;var a=e.x+e.width;var n=e.y;var i=e.y+e.height;var o=t.x;var u=t.x+t.width;var f=t.y;var l=t.y+t.height;return!(a<o||u<r||i<f||l<n)},contain:function(t,e){var r=this;return t>=r.x&&t<=r.x+r.width&&e>=r.y&&e<=r.y+r.height},clone:function(){return new l(this.x,this.y,this.width,this.height)},copy:function(t){this.x=t.x;this.y=t.y;this.width=t.width;this.height=t.height}};t.exports=l},function(t,e){var a=typeof Float32Array==="undefined"?Array:Float32Array;var n={create:function(t,e){var r=new a(2);r[0]=t||0;r[1]=e||0;return r},copy:function(t,e){t[0]=e[0];t[1]=e[1];return t},clone:function(t){var e=new a(2);e[0]=t[0];e[1]=t[1];return e},set:function(t,e,r){t[0]=e;t[1]=r;return t},add:function(t,e,r){t[0]=e[0]+r[0];t[1]=e[1]+r[1];return t},scaleAndAdd:function(t,e,r,a){t[0]=e[0]+r[0]*a;t[1]=e[1]+r[1]*a;return t},sub:function(t,e,r){t[0]=e[0]-r[0];t[1]=e[1]-r[1];return t},len:function(t){return Math.sqrt(this.lenSquare(t))},lenSquare:function(t){return t[0]*t[0]+t[1]*t[1]},mul:function(t,e,r){t[0]=e[0]*r[0];t[1]=e[1]*r[1];return t},div:function(t,e,r){t[0]=e[0]/r[0];t[1]=e[1]/r[1];return t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:function(t,e,r){t[0]=e[0]*r;t[1]=e[1]*r;return t},normalize:function(t,e){var r=n.len(e);if(r===0){t[0]=0;t[1]=0}else{t[0]=e[0]/r;t[1]=e[1]/r}return t},distance:function(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))},distanceSquare:function(t,e){return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])},negate:function(t,e){t[0]=-e[0];t[1]=-e[1];return t},lerp:function(t,e,r,a){t[0]=e[0]+a*(r[0]-e[0]);t[1]=e[1]+a*(r[1]-e[1]);return t},applyTransform:function(t,e,r){var a=e[0];var n=e[1];t[0]=r[0]*a+r[2]*n+r[4];t[1]=r[1]*a+r[3]*n+r[5];return t},min:function(t,e,r){t[0]=Math.min(e[0],r[0]);t[1]=Math.min(e[1],r[1]);return t},max:function(t,e,r){t[0]=Math.max(e[0],r[0]);t[1]=Math.max(e[1],r[1]);return t}};n.length=n.len;n.lengthSquare=n.lenSquare;n.dist=n.distance;n.distSquare=n.distanceSquare;t.exports=n},function(t,e){var r=typeof Float32Array==="undefined"?Array:Float32Array;var a={create:function(){var t=new r(6);a.identity(t);return t},identity:function(t){t[0]=1;t[1]=0;t[2]=0;t[3]=1;t[4]=0;t[5]=0;return t},copy:function(t,e){t[0]=e[0];t[1]=e[1];t[2]=e[2];t[3]=e[3];t[4]=e[4];t[5]=e[5];return t},mul:function(t,e,r){var a=e[0]*r[0]+e[2]*r[1];var n=e[1]*r[0]+e[3]*r[1];var i=e[0]*r[2]+e[2]*r[3];var o=e[1]*r[2]+e[3]*r[3];var u=e[0]*r[4]+e[2]*r[5]+e[4];var f=e[1]*r[4]+e[3]*r[5]+e[5];t[0]=a;t[1]=n;t[2]=i;t[3]=o;t[4]=u;t[5]=f;return t},translate:function(t,e,r){t[0]=e[0];t[1]=e[1];t[2]=e[2];t[3]=e[3];t[4]=e[4]+r[0];t[5]=e[5]+r[1];return t},rotate:function(t,e,r){var a=e[0];var n=e[2];var i=e[4];var o=e[1];var u=e[3];var f=e[5];var l=Math.sin(r);var s=Math.cos(r);t[0]=a*s+o*l;t[1]=-a*l+o*s;t[2]=n*s+u*l;t[3]=-n*l+s*u;t[4]=s*i+l*f;t[5]=s*f-l*i;return t},scale:function(t,e,r){var a=r[0];var n=r[1];t[0]=e[0]*a;t[1]=e[1]*n;t[2]=e[2]*a;t[3]=e[3]*n;t[4]=e[4]*a;t[5]=e[5]*n;return t},invert:function(t,e){var r=e[0];var a=e[2];var n=e[4];var i=e[1];var o=e[3];var u=e[5];var f=r*o-i*a;if(!f){return null}f=1/f;t[0]=o*f;t[1]=-i*f;t[2]=-a*f;t[3]=r*f;t[4]=(a*u-o*n)*f;t[5]=(i*n-r*u)*f;return t}};t.exports=a},function(t,e){var i={};var r=1e-4;function a(t){return t.replace(/^\s+/,"").replace(/\s+$/,"")}i.linearMap=function(t,e,r,a){var n=e[1]-e[0];var i=r[1]-r[0];if(n===0){return i===0?r[0]:(r[0]+r[1])/2}if(a){if(n>0){if(t<=e[0]){return r[0]}else if(t>=e[1]){return r[1]}}else{if(t>=e[0]){return r[0]}else if(t<=e[1]){return r[1]}}}else{if(t===e[0]){return r[0]}if(t===e[1]){return r[1]}}return(t-e[0])/n*i+r[0]};i.parsePercent=function(t,e){switch(t){case"center":case"middle":t="50%";break;case"left":case"top":t="0%";break;case"right":case"bottom":t="100%";break}if(typeof t==="string"){if(a(t).match(/%$/)){return parseFloat(t)/100*e}return parseFloat(t)}return t==null?NaN:+t};i.round=function(t){return+(+t).toFixed(10)};i.asc=function(t){t.sort(function(t,e){return t-e});return t};i.getPrecision=function(t){if(isNaN(t)){return 0}var e=1;var r=0;while(Math.round(t*e)/e!==t){e*=10;r++}return r};i.getPixelPrecision=function(t,e){var r=Math.log;var a=Math.LN10;var n=Math.floor(r(t[1]-t[0])/a);var i=Math.round(r(Math.abs(e[1]-e[0]))/a);return Math.max(-n+i,0)};i.MAX_SAFE_INTEGER=9007199254740991;i.remRadian=function(t){var e=Math.PI*2;return(t%e+e)%e};i.isRadianAroundZero=function(t){return t>-r&&t<r};i.parseDate=function(t){return t instanceof Date?t:new Date(typeof t==="string"?t.replace(/-/g,"/"):Math.round(t))};i.quantity=function(t){return Math.pow(10,Math.floor(Math.log(t)/Math.LN10))};i.nice=function(t,e){var r=i.quantity(t);var a=t/r;var n;if(e){if(a<1.5){n=1}else if(a<2.5){n=2}else if(a<4){n=3}else if(a<7){n=5}else{n=10}}else{if(a<1){n=1}else if(a<2){n=2}else if(a<3){n=3}else if(a<5){n=5}else{n=10}}return n*r};t.exports=i},function(t,e,r){var f=r(4);var l=r(9);function a(t){if(isNaN(t)){return"-"}t=(t+"").split(".");return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+(t.length>1?"."+t[1]:"")}function n(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function i(t){var e=t.length;if(typeof t==="number"){return[t,t,t,t]}else if(e===2){return[t[0],t[1],t[0],t[1]]}else if(e===3){return[t[0],t[1],t[2],t[1]]}return t}function o(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var s=["a","b","c","d","e","f","g"];function c(t,e){return"{"+t+(e==null?"":e)+"}"}function u(t,e){if(!f.isArray(e)){e=[e]}var r=e.length;if(!r){return""}var a=e[0].$vars;for(var n=0;n<a.length;n++){var i=s[n];t=t.replace(c(i),c(i,0))}for(var o=0;o<r;o++){for(var u=0;u<a.length;u++){t=t.replace(c(s[u],o),e[o][a[u]])}}return t}function h(t,e){if(t==="week"||t==="month"||t==="quarter"||t==="half-year"||t==="year"){t="MM-dd\nyyyy"}var r=l.parseDate(e);var a=r.getFullYear();var n=r.getMonth()+1;var i=r.getDate();var o=r.getHours();var u=r.getMinutes();var f=r.getSeconds();t=t.replace("MM",v(n)).toLowerCase().replace("yyyy",a).replace("yy",a%100).replace("dd",v(i)).replace("d",i).replace("hh",v(o)).replace("h",o).replace("mm",v(u)).replace("m",u).replace("ss",v(f)).replace("s",f);return t}function v(t){return t<10?"0"+t:t}t.exports={normalizeCssArray:i,addCommas:a,toCamelCase:n,encodeHTML:o,formatTpl:u,formatTime:h}},function(t,e,r){var n=r(12);var i=r(2);i.extendSeriesModel({type:"series.wordCloud",visualColorAccessPath:"textStyle.normal.color",optionUpdated:function(){var t=this.option;t.gridSize=Math.max(Math.floor(t.gridSize),4)},getInitialData:function(t,e){var r=n(["value"],t.data);var a=new i.List(r,this);a.initData(t.data);return a},defaultOption:{maskImage:null,shape:"circle",left:"center",top:"center",width:"70%",height:"80%",sizeRange:[12,60],rotationRange:[-90,90],rotationStep:45,gridSize:8,textStyle:{normal:{fontWeight:"normal"}}}})},function(t,e,r){var f=r(4);function a(t,e,r,a){if(!e){return t}var n=s(e[0]);var i=f.isArray(n)&&n.length||1;r=r||[];a=a||"extra";for(var o=0;o<i;o++){if(!t[o]){var u=r[o]||a+(o-r.length);t[o]=l(e,o)?{type:"ordinal",name:u}:u}}return t}function l(t,e){for(var r=0,a=t.length;r<a;r++){var n=s(t[r]);if(!f.isArray(n)){return false}var n=n[e];if(n!=null&&isFinite(n)){return false}else if(f.isString(n)&&n!=="-"){return true}}return false}function s(t){return f.isArray(t)?t:f.isObject(t)?t.value:t}t.exports=a},function(t,e,r){var c=r(2);function h(t,e){return t&&t.getShallow(e)}c.extendChartView({type:"wordCloud",render:function(t,e,r){var f=this.group;f.removeAll();var l=t.getData();var s=t.get("gridSize");t.layoutInstance.ondraw=function(t,i,e,r){var a=l.getItemModel(e);var o=a.getModel("textStyle.normal");var n=a.getModel("textStyle.emphasis");var u=function(r,a){var t=r.ecModel;var n=t&&t.getModel("textStyle");return["fontStyle","fontWeight","fontSize","fontFamily"].map(function(t,e){if(e!==2){return r.getShallow(t)||a.getShallow(t)||h(n,t)}else{return(r.getShallow(t,true)||Math.round(r===o?i:a.getShallow(t,true)||i))+"px"}}).join(" ")};var t=new c.graphic.Text({style:{x:r.info.fillTextOffsetX,y:r.info.fillTextOffsetY+i*.5,text:t,textBaseline:"middle",font:u(o,n)},scale:[1/r.info.mu,1/r.info.mu],position:[(r.gx+r.info.gw/2)*s,(r.gy+r.info.gh/2)*s],rotation:r.rot});t.setStyle(o.getItemStyle());t.setStyle({fill:l.getItemVisual(e,"color")});f.add(t);l.setItemGraphicEl(e,t);c.graphic.setHoverStyle(t,c.util.extend(n.getItemStyle(),{font:u(n,o)}))}}})},function(r,a,t){var n,i;"use strict";if(!window.setImmediate){window.setImmediate=function t(){return window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function t(){if(!window.postMessage||!window.addEventListener){return null}var a=[undefined];var n="zero-timeout-message";var e=function t(e){var r=a.length;a.push(e);window.postMessage(n+r.toString(36),"*");return r};window.addEventListener("message",function t(e){if(typeof e.data!=="string"||e.data.substr(0,n.length)!==n){return}e.stopImmediatePropagation();var r=parseInt(e.data.substr(n.length),36);if(!a[r]){return}a[r]();a[r]=undefined},true);window.clearImmediate=function t(e){if(!a[e]){return}a[e]=undefined};return e}()||function t(e){window.setTimeout(e,0)}}()}if(!window.clearImmediate){window.clearImmediate=function t(){return window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function t(e){window.clearTimeout(e)}}()}(function(t){var h=function t(){var e=document.createElement("canvas");if(!e||!e.getContext){return false}var r=e.getContext("2d");if(!r.getImageData){return false}if(!r.fillText){return false}if(!Array.prototype.some){return false}if(!Array.prototype.push){return false}return true}();var j=function t(){if(!h){return}var e=document.createElement("canvas").getContext("2d");var r=20;var a,n;while(r){e.font=r.toString(10)+"px sans-serif";if(e.measureText("Ｗ").width===a&&e.measureText("m").width===n){return r+1}a=e.measureText("Ｗ").width;n=e.measureText("m").width;r--}return 0}();var W=function t(e){for(var r,a,n=e.length;n;r=Math.floor(Math.random()*n),a=e[--n],e[n]=e[r],e[r]=a){}return e};var e=function t(m,e){if(!h){return}if(!Array.isArray(m)){m=[m]}m.forEach(function(t,e){if(typeof t==="string"){m[e]=document.getElementById(t);if(!m[e]){throw"The element id specified is not found."}}else if(!t.tagName&&!t.appendChild){throw"You must pass valid HTML elements, or ID of the element."}});var N={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", '+'"Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:true,backgroundColor:"#fff",gridSize:8,drawOutOfBound:false,origin:null,drawMask:false,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function t(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationStep:.1,shuffle:true,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(e){for(var r in e){if(r in N){N[r]=e[r]}}}if(typeof N.weightFactor!=="function"){var a=N.weightFactor;N.weightFactor=function t(e){return e*a}}if(typeof N.shape!=="function"){switch(N.shape){case"circle":default:N.shape="circle";break;case"cardioid":N.shape=function t(e){return 1-Math.sin(e)};break;case"diamond":case"square":N.shape=function t(e){var r=e%(2*Math.PI/4);return 1/(Math.cos(r)+Math.sin(r))};break;case"triangle-forward":N.shape=function t(e){var r=e%(2*Math.PI/3);return 1/(Math.cos(r)+Math.sqrt(3)*Math.sin(r))};break;case"triangle":case"triangle-upright":N.shape=function t(e){var r=(e+Math.PI*3/2)%(2*Math.PI/3);return 1/(Math.cos(r)+Math.sqrt(3)*Math.sin(r))};break;case"pentagon":N.shape=function t(e){var r=(e+.955)%(2*Math.PI/5);return 1/(Math.cos(r)+.726543*Math.sin(r))};break;case"star":N.shape=function t(e){var r=(e+.955)%(2*Math.PI/10);if((e+.955)%(2*Math.PI/5)-2*Math.PI/10>=0){return 1/(Math.cos(2*Math.PI/10-r)+3.07768*Math.sin(2*Math.PI/10-r))}else{return 1/(Math.cos(r)+3.07768*Math.sin(r))}};break}}N.gridSize=Math.max(Math.floor(N.gridSize),4);var E=N.gridSize;var u=E-N.maskGapWidth;var n=Math.abs(N.maxRotation-N.minRotation);var i=Math.min(N.maxRotation,N.minRotation);var o=N.rotationStep;var w,y,x,M,b;var S;var C;function f(t,e){return"hsl("+(Math.random()*360).toFixed()+","+(Math.random()*30+70).toFixed()+"%,"+(Math.random()*(e-t)+t).toFixed()+"%)"}switch(N.color){case"random-dark":C=function t(){return f(10,50)};break;case"random-light":C=function t(){return f(50,90)};break;default:if(typeof N.color==="function"){C=N.color}break}var I=null;if(typeof N.classes==="function"){I=N.classes}var T=false;var k=[];var A;var l=function t(e){var r=e.currentTarget;var a=r.getBoundingClientRect();var n;var i;if(e.touches){n=e.touches[0].clientX;i=e.touches[0].clientY}else{n=e.clientX;i=e.clientY}var o=n-a.left;var u=i-a.top;var f=Math.floor(o*(r.width/a.width||1)/E);var l=Math.floor(u*(r.height/a.height||1)/E);return k[f][l]};var F=function t(e){var r=l(e);if(A===r){return}A=r;if(!r){N.hover(undefined,undefined,e);return}N.hover(r.item,r.dimension,e)};var P=function t(e){var r=l(e);if(!r){return}N.click(r.item,r.dimension,e);e.preventDefault()};var s=[];var v=function t(e){if(s[e]){return s[e]}var r=e*8;var a=r;var n=[];if(e===0){n.push([M[0],M[1],0])}while(a--){var i=1;if(N.shape!=="circle"){i=N.shape(a/r*2*Math.PI)}n.push([M[0]+e*i*Math.cos(-a/r*2*Math.PI),M[1]+e*i*Math.sin(-a/r*2*Math.PI)*N.ellipticity,a/r*2*Math.PI])}s[e]=n;return n};var R=function t(){return N.abortThreshold>0&&(new Date).getTime()-S>N.abortThreshold};var d=function t(){if(N.rotateRatio===0){return 0}if(Math.random()>N.rotateRatio){return 0}if(n===0){return i}return i+Math.round(Math.random()*n/o)*o};var g=function t(e,r,a){var n=false;var i=N.weightFactor(r);if(i<=N.minSize){return false}var o=1;if(i<j){o=function t(){var e=2;while(e*i<j){e+=2}return e}()}var u=document.createElement("canvas");var f=u.getContext("2d",{willReadFrequently:true});f.font=N.fontWeight+" "+(i*o).toString(10)+"px "+N.fontFamily;var l=f.measureText(e).width/o;var s=Math.max(i*o,f.measureText("m").width,f.measureText("Ｗ").width)/o;var c=l+s*2;var h=s*3;var v=Math.ceil(c/E);var d=Math.ceil(h/E);c=v*E;h=d*E;var g=-l/2;var p=-s*.4;var m=Math.ceil((c*Math.abs(Math.sin(a))+h*Math.abs(Math.cos(a)))/E);var w=Math.ceil((c*Math.abs(Math.cos(a))+h*Math.abs(Math.sin(a)))/E);var y=w*E;var x=m*E;u.setAttribute("width",y);u.setAttribute("height",x);if(n){document.body.appendChild(u);f.save()}f.scale(1/o,1/o);f.translate(y*o/2,x*o/2);f.rotate(-a);f.font=N.fontWeight+" "+(i*o).toString(10)+"px "+N.fontFamily;f.fillStyle="#000";f.textBaseline="middle";f.fillText(e,g*o,(p+i*.5)*o);var M=f.getImageData(0,0,y,x).data;if(R()){return false}if(n){f.strokeRect(g*o,p,l*o,s*o);f.restore()}var b=[];var S=w,C,I,T;var k=[m/2,w/2,m/2,w/2];while(S--){C=m;while(C--){T=E;t:{while(T--){I=E;while(I--){if(M[((C*E+T)*y+(S*E+I))*4+3]){b.push([S,C]);if(S<k[3]){k[3]=S}if(S>k[1]){k[1]=S}if(C<k[0]){k[0]=C}if(C>k[2]){k[2]=C}if(n){f.fillStyle="rgba(255, 0, 0, 0.5)";f.fillRect(S*E,C*E,E-.5,E-.5)}break t}}}if(n){f.fillStyle="rgba(0, 0, 255, 0.5)";f.fillRect(S*E,C*E,E-.5,E-.5)}}}}if(n){f.fillStyle="rgba(0, 255, 0, 0.5)";f.fillRect(k[3]*E,k[0]*E,(k[1]-k[3]+1)*E,(k[2]-k[0]+1)*E)}return{mu:o,occupied:b,bounds:k,gw:w,gh:m,fillTextOffsetX:g,fillTextOffsetY:p,fillTextWidth:l,fillTextHeight:s,fontSize:i}};var p=function t(e,r,a,n,i){var o=i.length;while(o--){var u=e+i[o][0];var f=r+i[o][1];if(u>=y||f>=x||u<0||f<0){if(!N.drawOutOfBound){return false}continue}if(!w[u][f]){return false}}return true};var O=function t(f,l,s,c,e,r,a,h,v){var d=s.fontSize;var g;if(C){g=C(c,e,d,r,a)}else{g=N.color}var p;if(I){p=I(c,e,d,r,a)}else{p=N.classes}var n;var i=s.bounds;n={x:(f+i[3])*E,y:(l+i[0])*E,w:(i[1]-i[3]+1)*E,h:(i[2]-i[0]+1)*E};m.forEach(function(t){if(t.getContext){var e=t.getContext("2d");var r=s.mu;e.save();e.scale(1/r,1/r);e.font=N.fontWeight+" "+(d*r).toString(10)+"px "+N.fontFamily;e.fillStyle=g;e.translate((f+s.gw/2)*E*r,(l+s.gh/2)*E*r);if(h!==0){e.rotate(-h)}e.textBaseline="middle";e.fillText(c,s.fillTextOffsetX*r,(s.fillTextOffsetY+d*.5)*r);e.restore()}else{var a=document.createElement("span");var n="";n="rotate("+-h/Math.PI*180+"deg) ";if(s.mu!==1){n+="translateX(-"+s.fillTextWidth/4+"px) "+"scale("+1/s.mu+")"}var i={position:"absolute",display:"block",font:N.fontWeight+" "+d*s.mu+"px "+N.fontFamily,left:(f+s.gw/2)*E+s.fillTextOffsetX+"px",top:(l+s.gh/2)*E+s.fillTextOffsetY+"px",width:s.fillTextWidth+"px",height:s.fillTextHeight+"px",lineHeight:d+"px",whiteSpace:"nowrap",transform:n,webkitTransform:n,msTransform:n,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};if(g){i.color=g}a.textContent=c;for(var o in i){a.style[o]=i[o]}if(v){for(var u in v){a.setAttribute(u,v[u])}}if(p){a.className+=p}t.appendChild(a)}})};var z=function t(e,r,a,n,i){if(e>=y||r>=x||e<0||r<0){return}w[e][r]=false;if(a){var o=m[0].getContext("2d");o.fillRect(e*E,r*E,u,u)}if(T){k[e][r]={item:i,dimension:n}}};var L=function t(e,r,a,n,i,o){var u=i.occupied;var f=N.drawMask;var l;if(f){l=m[0].getContext("2d");l.save();l.fillStyle=N.maskColor}var s;if(T){var c=i.bounds;s={x:(e+c[3])*E,y:(r+c[0])*E,w:(c[1]-c[3]+1)*E,h:(c[2]-c[0]+1)*E}}var h=u.length;while(h--){var v=e+u[h][0];var d=r+u[h][1];if(v>=y||d>=x||v<0||d<0){continue}z(v,d,f,s,o)}if(f){l.restore()}};var D=function t(i){var o,u,f;if(Array.isArray(i)){o=i[0];u=i[1]}else{o=i.word;u=i.weight;f=i.attributes}var l=d();var s=g(o,u,l);if(!s){return false}if(R()){return false}if(!N.drawOutOfBound){var e=s.bounds;if(e[1]-e[3]+1>y||e[2]-e[0]+1>x){return false}}var c=b+1;var r=function(t){var e=Math.floor(t[0]-s.gw/2);var r=Math.floor(t[1]-s.gh/2);var a=s.gw;var n=s.gh;if(!p(e,r,a,n,s.occupied)){return false}O(e,r,s,o,u,b-c,t[2],l,f);L(e,r,a,n,s,i);return{gx:e,gy:r,rot:l,info:s}};while(c--){var a=v(b-c);if(N.shuffle){a=[].concat(a);W(a)}for(var n=0;n<a.length;n++){var h=r(a[n]);if(h){return h}}}return null};var q=function t(r,a,n){if(a){return!m.some(function(t){var e=document.createEvent("CustomEvent");e.initCustomEvent(r,true,a,n||{});return!t.dispatchEvent(e)},this)}else{m.forEach(function(t){var e=document.createEvent("CustomEvent");e.initCustomEvent(r,true,a,n||{});t.dispatchEvent(e)},this)}};var c=function t(){var e=m[0];if(e.getContext){y=Math.ceil(e.width/E);x=Math.ceil(e.height/E)}else{var r=e.getBoundingClientRect();y=Math.ceil(r.width/E);x=Math.ceil(r.height/E)}if(!q("wordcloudstart",true)){return}M=N.origin?[N.origin[0]/E,N.origin[1]/E]:[y/2,x/2];b=Math.floor(Math.sqrt(y*y+x*x));w=[];var a,n,i;if(!e.getContext||N.clearCanvas){m.forEach(function(t){if(t.getContext){var e=t.getContext("2d");e.fillStyle=N.backgroundColor;e.clearRect(0,0,y*(E+1),x*(E+1));e.fillRect(0,0,y*(E+1),x*(E+1))}else{t.textContent="";t.style.backgroundColor=N.backgroundColor;t.style.position="relative"}});a=y;while(a--){w[a]=[];n=x;while(n--){w[a][n]=true}}}else{var o=document.createElement("canvas").getContext("2d");o.fillStyle=N.backgroundColor;o.fillRect(0,0,1,1);var u=o.getImageData(0,0,1,1).data;var f=e.getContext("2d").getImageData(0,0,y*E,x*E).data;a=y;var l,s;while(a--){w[a]=[];n=x;while(n--){s=E;t:while(s--){l=E;while(l--){i=4;while(i--){if(f[((n*E+s)*y*E+(a*E+l))*4+i]!==u[i]){w[a][n]=false;break t}}}}if(w[a][n]!==false){w[a][n]=true}}}f=o=u=undefined}if(N.hover||N.click){T=true;a=y+1;while(a--){k[a]=[]}if(N.hover){e.addEventListener("mousemove",F)}if(N.click){e.addEventListener("click",P);e.addEventListener("touchstart",P);e.addEventListener("touchend",function(t){t.preventDefault()});e.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"}e.addEventListener("wordcloudstart",function t(){e.removeEventListener("wordcloudstart",t);e.removeEventListener("mousemove",F);e.removeEventListener("click",P);A=undefined})}i=0;var c,h;if(N.wait!==0){c=window.setTimeout;h=window.clearTimeout}else{c=window.setImmediate;h=window.clearImmediate}var v=function t(e,r){m.forEach(function(t){t.addEventListener(e,r)},this)};var d=function t(e,r){m.forEach(function(t){t.removeEventListener(e,r)},this)};var g=function t(){d("wordcloudstart",t);h(p)};v("wordcloudstart",g);var p=c(function t(){if(i>=N.list.length){h(p);q("wordcloudstop",false);d("wordcloudstart",g);return}S=(new Date).getTime();var e=D(N.list[i]);var r=!q("wordclouddrawn",true,{item:N.list[i],drawn:e});if(R()||r){h(p);N.abort();q("wordcloudabort",false);q("wordcloudstop",false);d("wordcloudstart",g);return}i++;p=c(t,N.wait)},N.wait)};c()};e.isSupported=h;e.minFontSize=j;if(true){!(n=[],i=function(){return e}.apply(a,n),i!==undefined&&(r.exports=i))}else if(typeof r!=="undefined"&&r.exports){r.exports=e}else{t.WordCloud=e}})(this)}])});