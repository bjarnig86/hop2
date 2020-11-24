!function(){"use strict";var t,e;(function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=k(a,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function g(){}function y(){}function m(){}var w={};w[i]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(G([])));b&&b!==r&&n.call(b,i)&&(w=b);var L=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,l){var u=s(t[o],t,i);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(h).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,l)}))}l(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=L.constructor=m,m.constructor=y,y.displayName=u(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,l,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,l,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return l.type="throw",l.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}})(e={path:t,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&e.path)}},e.exports),e.exports;function r(t,e,r,n,o,i,a){try{var l=t[i](a),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function l(t){r(a,o,i,l,u,"next",t)}function u(t){r(a,o,i,l,u,"throw",t)}l(void 0)}))}}var o=".../.././videos.json";function i(){return a.apply(this,arguments)}function a(){return(a=n(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(o);case 3:e=t.sent,t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),console.error("Villa við að sækja",t.t0),t.abrupt("return",null);case 10:if(e.ok){t.next=13;break}return console.error("Ekki tókst að sækja gögn"),t.abrupt("return",null);case 13:return t.next=15,e.json();case 15:return e=t.sent,t.abrupt("return",e);case 17:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function l(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=document.createElement(t),o=arguments.length,i=new Array(o>3?o-3:0),a=3;a<o;a++)i[a-3]=arguments[a];for(var l=0,u=i;l<u.length;l++){var c=u[l];if(c){if(e)for(var s in e)n.setAttribute(s,e[s]);if(r)for(var h in r)n.addEventListener(h,r[h]);"string"==typeof c?n.appendChild(document.createTextNode(c)):n.appendChild(c)}}return n}function u(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return l.apply(void 0,[t,null,null].concat(r))}document.addEventListener("DOMContentLoaded",n(regeneratorRuntime.mark((function t(){var e,r,n,o,a,c,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:e=t.sent,console.log(e),r=e.videos,console.log(r[0].title),n=document.querySelector("body"),o=l("header",{class:"frontpage__header"},null,null,"",l("div",{class:"grid"},null,null," ",l("div",{class:"row"},null,null," ",l("div",{class:"col col-12"},null,null," ",u("h1","".concat(r[0].title)))))),n.appendChild(o),a=l("section",{class:"video"},null,null," ",l("div",{class:"grid"},null,null," ",l("div",{class:"row"},null,null," ",l("div",{class:"col col-12"},null,null," ",l("div",{class:"video__poster__container"},null,null," ",l("video",{src:r[0].video,class:"video__poster"},null,null," "),l("img",{src:"./img/play.svg",class:"play"},null,null," ")))))),n.appendChild(a),c=l("div",{class:"row"},null,null," ",l("div",{class:"col col-12"},null,null," ",l("div",{class:"video__actions"},null,null," ",l("img",{id:"back",src:"../img/back.svg",alt:"back"},null,null," "),l("img",{id:"play",src:"../img/play.svg",class:"button-visible",alt:"play"},null,null," "),l("img",{id:"pause",src:"../img/pause.svg",class:"button-hidden",alt:"pause"},null,null," "),l("img",{id:"mute",src:"../img/mute.svg",class:"button-visible",alt:"mute"},null,null," "),l("img",{id:"unmute",src:"../img/unmute.svg",class:"button-hidden",alt:"unmute"},null,null," "),l("img",{id:"fullscreen",src:"../img/fullscreen.svg",alt:"fullscreen"},null,null," "),l("img",{id:"next",src:"../img/next.svg",alt:"next"},null,null," ")))),a.appendChild(c),s=document.getElementById("#play"),document.getElementById("#pause"),s.addEventListener("click"),console.log(s.addEventListener("click"));case 17:case"end":return t.stop()}}),t)}))))}();
//# sourceMappingURL=bundle.js.map
