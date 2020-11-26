!function(){"use strict";var t,e;(function(t){var e=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var a=e&&e.prototype instanceof v?e:v,o=Object.create(a.prototype),i=new P(r||[]);return o._invoke=function(t,e,n){var r=d;return function(a,o){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw o;return D()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var u=M(i,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=s(t,e,n);if("normal"===c.type){if(r=n.done?m:h,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(t,n,i),o}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var d="suspendedStart",h="suspendedYield",f="executing",m="completed",g={};function v(){}function p(){}function w(){}var y={};y[o]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(E([])));x&&x!==n&&r.call(x,o)&&(y=x);var T=w.prototype=v.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(a,o,i,u){var c=s(t[a],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,u)}))}u(c.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function M(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,M(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=s(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function E(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:D}}function D(){return{value:e,done:!0}}return p.prototype=T.constructor=w,w.constructor=p,p.displayName=c(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,u,"GeneratorFunction")),t.prototype=Object.create(T),t},t.awrap=function(t){return{__await:t}},k(C.prototype),C.prototype[i]=function(){return this},t.AsyncIterator=C,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new C(l(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(T),c(T,u,"Generator"),T[o]=function(){return this},T.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return u.type="throw",u.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:E(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}})(e={path:t,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports;function n(t,e,n,r,a,o,i){try{var u=t[o](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,a)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function u(t){n(i,a,o,u,c,"next",t)}function c(t){n(i,a,o,u,c,"throw",t)}u(void 0)}))}}var a="/videos.json";function o(){return i.apply(this,arguments)}function i(){return(i=r(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(a);case 3:e=t.sent,t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),console.error("Villa við að sækja",t.t0),t.abrupt("return",null);case 10:if(e.ok){t.next=13;break}return console.error("Ekki tókst að sækja gögn"),t.abrupt("return",null);case 13:return t.next=15,e.json();case 15:return e=t.sent,t.abrupt("return",e);case 17:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function u(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function c(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function l(t){c(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function s(t,e){c(2,arguments);var n=l(t).getTime(),r=u(e);return new Date(n+r)}var d=6e4;function h(t){return t.getTime()%d}function f(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var r=n>0?(d+h(e))%d:h(e);return n*d+r}function m(t){c(1,arguments);var e=l(t);return!isNaN(e)}var g={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function v(t){return function(e){var n=e||{},r=n.width?String(n.width):t.defaultWidth;return t.formats[r]||t.formats[t.defaultWidth]}}var p={date:v({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:v({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:v({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},w={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var u=t.defaultWidth,c=a.width?String(a.width):t.defaultWidth;r=t.values[c]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function b(t){return function(e,n){var r=String(e),a=n||{},o=a.width,i=o&&t.matchPatterns[o]||t.matchPatterns[t.defaultMatchWidth],u=r.match(i);if(!u)return null;var c,l=u[0],s=o&&t.parsePatterns[o]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(s)?function(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}(s,(function(t){return t.test(l)})):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}(s,(function(t){return t.test(l)})),c=t.valueCallback?t.valueCallback(c):c,{value:c=a.valueCallback?a.valueCallback(c):c,rest:r.slice(l.length)}}}var x,T={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof g[t]?g[t]:1===e?g[t].one:g[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:p,formatRelative:function(t,e,n,r){return w[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(x={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t,e){var n=String(t),r=e||{},a=n.match(x.matchPattern);if(!a)return null;var o=a[0],i=n.match(x.parsePattern);if(!i)return null;var u=x.valueCallback?x.valueCallback(i[0]):i[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(o.length)}}),era:b({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:b({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:b({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:b({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function k(t,e){c(2,arguments);var n=u(e);return s(t,-n)}function C(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var M=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return C("yy"===e?r%100:r,e.length)},S=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):C(n+1,2)},_=function(t,e){return C(t.getUTCDate(),e.length)},P=function(t,e){return C(t.getUTCHours()%12||12,e.length)},E=function(t,e){return C(t.getUTCHours(),e.length)},D=function(t,e){return C(t.getUTCMinutes(),e.length)},L=function(t,e){return C(t.getUTCSeconds(),e.length)},q=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return C(Math.floor(r*Math.pow(10,n-3)),e.length)},U=864e5;function O(t){c(1,arguments);var e=1,n=l(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function W(t){c(1,arguments);var e=l(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=O(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=O(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function N(t){c(1,arguments);var e=W(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=O(n);return r}var Y=6048e5;function F(t,e){c(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:u(a),i=null==n.weekStartsOn?o:u(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=l(t),d=s.getUTCDay(),h=(d<i?7:0)+d-i;return s.setUTCDate(s.getUTCDate()-h),s.setUTCHours(0,0,0,0),s}function j(t,e){c(1,arguments);var n=l(t,e),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:u(i),d=null==a.firstWeekContainsDate?s:u(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(r+1,0,d),h.setUTCHours(0,0,0,0);var f=F(h,e),m=new Date(0);m.setUTCFullYear(r,0,d),m.setUTCHours(0,0,0,0);var g=F(m,e);return n.getTime()>=f.getTime()?r+1:n.getTime()>=g.getTime()?r:r-1}function R(t,e){c(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:u(a),i=null==n.firstWeekContainsDate?o:u(n.firstWeekContainsDate),l=j(t,e),s=new Date(0);s.setUTCFullYear(l,0,i),s.setUTCHours(0,0,0,0);var d=F(s,e);return d}var G=6048e5;var z="midnight",X="noon",H="morning",Q="afternoon",A="evening",B="night",I={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return M(t,e)},Y:function(t,e,n,r){var a=j(t,r),o=a>0?a:1-a;return"YY"===e?C(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):C(o,e.length)},R:function(t,e){return C(W(t),e.length)},u:function(t,e){return C(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return C(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return C(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return S(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return C(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){c(1,arguments);var n=l(t),r=F(n,e).getTime()-R(n,e).getTime();return Math.round(r/G)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):C(a,e.length)},I:function(t,e,n){var r=function(t){c(1,arguments);var e=l(t),n=O(e).getTime()-N(e).getTime();return Math.round(n/Y)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):C(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):_(t,e)},D:function(t,e,n){var r=function(t){c(1,arguments);var e=l(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/U)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):C(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return C(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return C(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return C(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?X:0===a?z:a/12>=1?"pm":"am",e){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?A:a>=12?Q:a>=4?H:B,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):E(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):C(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):C(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):D(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):L(t,e)},S:function(t,e){return q(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return V(a);case"XXXX":case"XX":return K(a);case"XXXXX":case"XXX":default:return K(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return V(a);case"xxxx":case"xx":return K(a);case"xxxxx":case"xxx":default:return K(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+J(a,":");case"OOOO":default:return"GMT"+K(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+J(a,":");case"zzzz":default:return"GMT"+K(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return C(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return C((r._originalDate||t).getTime(),e.length)}};function J(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+C(o,2)}function V(t,e){return t%60==0?(t>0?"-":"+")+C(Math.abs(t)/60,2):K(t,e)}function K(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+C(Math.floor(a/60),2)+n+C(a%60,2)}function $(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function Z(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}var tt={p:Z,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return $(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",$(a,e)).replace("{{time}}",Z(o,e))}},et=["D","DD"],nt=["YY","YYYY"];function rt(t){return-1!==et.indexOf(t)}function at(t){return-1!==nt.indexOf(t)}function ot(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var it=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ct=/^'([^]*?)'?$/,lt=/''/g,st=/[a-zA-Z]/;function dt(t){return t.match(ct)[1].replace(lt,"'")}function ht(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=document.createElement(t),a=arguments.length,o=new Array(a>3?a-3:0),i=3;i<a;i++)o[i-3]=arguments[i];for(var u=0,c=o;u<c.length;u++){var l=c[u];if(l){if(e)for(var s in e)r.setAttribute(s,e[s]);if(n)for(var d in n)r.addEventListener(d,n[d]);"string"==typeof l?r.appendChild(document.createTextNode(l)):r.appendChild(l)}}return r}function ft(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return ht.apply(void 0,[t,null,null].concat(n))}function mt(){var t=document.querySelector(".video__poster");t.play(),t.addEventListener("click",(function(){gt()}));var e=document.querySelector("#playIcon"),n=document.querySelector("#pause");document.querySelector("#play").classList.replace("button-visible","button-hidden"),n.classList.replace("button-hidden","button-visible"),e.classList.replace("video__button-visible","video__button-hidden")}function gt(){var t=document.querySelector(".video__poster");t.pause(),t.addEventListener("click",(function(){mt()}));var e=document.querySelector("#playIcon"),n=document.querySelector("#pause"),r=document.querySelector("#play");n.classList.replace("button-visible","button-hidden"),r.classList.replace("button-hidden","button-visible"),e.classList.replace("video__button-hidden","video__button-visible")}function vt(){document.querySelector(".video__poster").muted=!0;var t=document.querySelector("#mute"),e=document.querySelector("#unmute");t.classList.replace("button-visible","button-hidden"),e.classList.replace("button-hidden","button-visible")}function pt(){document.querySelector(".video__poster").muted=!1;var t=document.querySelector("#mute");document.querySelector("#unmute").classList.replace("button-visible","button-hidden"),t.classList.replace("button-hidden","button-visible")}function wt(){document.querySelector(".video__poster").currentTime+=3}function yt(){document.querySelector(".video__poster").currentTime-=3}function bt(){var t=document.querySelector(".video__poster");t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()}function xt(t,e){if(0===t.length)return!0;for(var n=0;n<t.length;n++)if(t[n]===e)return!0;return!1}function Tt(t){var e=(new Date).getTime()-t,n=6e4,r=36e5,a=24*r,o=7*a,i=4*o,s=12*i;if(e<n)return"Fyrir minna en mínútu síðan";if(e<r){var d=Math.round(e/n);return"Fyrir ".concat(d,d%10==1&&11!==d?" mínútu síðan":" mínútum síðan")}if(e<a){var h=Math.round(e/r);return"Fyrir ".concat(h,h%10==1&&11!==h?" klukkustund síðan":" klukkustundum síðan")}if(e<o){var g=Math.round(e/a);return"Fyrir ".concat(g,g%10==1&&11!==g?" degi síðan":" dögum síðan")}if(e<i){var v=Math.round(e/o);return"Fyrir ".concat(v,v%10==1&&11!==v?" viku síðan":" vikum síðan")}if(e<s){var p=Math.round(e/i);return"Fyrir ".concat(p,p%10==1&&11!==p?" mánuði síðan":" mánuðum síðan")}if(e>=s){var w=Math.round(e/s);return"Fyrir ".concat(w,w%10==1&&11!==w?" ári síðan":" árum síðan")}return"Sett inn ".concat(function(t,e,n){c(2,arguments);var r=String(e),a=n||{},o=a.locale||T,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:u(i),d=null==a.firstWeekContainsDate?s:u(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=o.options&&o.options.weekStartsOn,g=null==h?0:u(h),v=null==a.weekStartsOn?g:u(a.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var p=l(t);if(!m(p))throw new RangeError("Invalid time value");var w=f(p),y=k(p,w),b={firstWeekContainsDate:d,weekStartsOn:v,locale:o,_originalDate:p};return r.match(ut).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,tt[e])(t,o.formatLong,b):t})).join("").match(it).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return dt(n);var i=I[r];if(i)return!a.useAdditionalWeekYearTokens&&at(n)&&ot(n,e,t),!a.useAdditionalDayOfYearTokens&&rt(n)&&ot(n,e,t),i(y,n,o.localize,b);if(r.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(t,"dd/MM/yyyy kk:mm:ss"))}function kt(t){var e=t,n=parseInt(e/60,10),r=e%60;return r<10?"".concat(n,":0").concat(r):"".concat(n,":").concat(r)}function Ct(){return Mt.apply(this,arguments)}function Mt(){return(Mt=r(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=ft("main"," "),n=document.querySelector("body"),r=ft("footer"," ",ht("div",{class:"grid"},null,null," ",ht("div",{class:"row"},null,null," ",ht("div",{class:"col col-12"},null,null," ",ft("p","©Fræðslumyndbandaleigan"))))),n.appendChild(e),n.appendChild(r),t.next=7,o();case 7:a=t.sent,console.log(a),console.log(a.categories),a.categories.forEach((function(t){var n=ht("hr",{class:"line col col-10 offset-col-1"},null,null," "),r=t.videos,o=ht("div",{class:"row videoRow"},null,null," "),i=ft("section",ht("div",{class:"grid"},null,null," ",ht("div",{class:"row"},null,null," ",ht("div",{class:"col col-12 offset-col-md-1 col-md-10"},null,null," ",ht("h2",{class:"category__title"},null,null,"".concat(t.title)))),o,ht("div",{class:"line-container"},null,null," ",n)));e.appendChild(i),a.videos.forEach((function(t){var e=t.id;if(xt(r,e)){var n=ht("div",{class:"col col-4 offset-col-md-1 col-md-10"},null,null," ",ht("div",{class:"card"},null,null," ",ht("a",{href:"/pages/video.html?video=".concat(e),class:"img__container"},null,null," ",ht("img",{src:t.poster,class:"card__poster"},null,null," "),ht("p",{class:"img__duration"},null,null,"".concat(kt(t.duration)))),ht("h3",{class:"card__title"},null,null,"".concat(t.title)),ht("p",{class:"card__created"},null,null,"".concat(Tt(t.created)))));o.appendChild(n)}}))}));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function St(t){return _t.apply(this,arguments)}function _t(){return(_t=r(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o();case 2:n=t.sent,r=n.videos,a=document.querySelector("body"),r.forEach((function(t){if(t.id===e){var r=ht("header",{class:"frontpage__header"},null,null,"",ht("div",{class:"grid"},null,null," ",ht("div",{class:"row"},null,null," ",ht("div",{class:"col col-12"},null,null," ",ft("h1","".concat(t.title))))));a.appendChild(r);var o=ht("div",{class:"row controls-row"},null,null," "),i=ht("div",{class:"row info"},null,null," "),u=ht("section",{class:"video"},null,null," ",ht("div",{class:"grid"},null,null," ",ht("div",{class:"row"},null,null," ",ht("div",{class:"col col-12 offset-col-md-1 col-md-10"},null,null," ",ht("div",{class:"video__poster__container"},null,null," ",ht("video",{src:"/".concat(t.video),class:"video__poster",id:"video"},{click:mt},null," "),ht("img",{src:"/img/play.svg",class:"play video__button-visible",id:"playIcon"},{click:mt},null," ")))),o,i));a.appendChild(u);var c=ht("div",{class:"col col-12"},null,null," ",ht("div",{class:"controls"},null,null," ",ht("img",{id:"back",src:"/img/back.svg",alt:"back"},{click:yt},null," "),ht("img",{id:"play",src:"/img/play.svg",class:"button-visible",alt:"play"},{click:mt},null," "),ht("img",{id:"pause",src:"/img/pause.svg",class:"button-hidden",alt:"pause"},{click:gt},null," "),ht("img",{id:"mute",src:"/img/mute.svg",class:"button-visible",alt:"mute"},{click:vt},null," "),ht("img",{id:"unmute",src:"/img/unmute.svg",class:"button-hidden",alt:"unmute"},{click:pt},null," "),ht("img",{id:"fullscreen",src:"/img/fullscreen.svg",alt:"fullscreen"},{click:bt},null," "),ht("img",{id:"next",src:"/img/next.svg",alt:"next"},{click:wt},null," ")));o.appendChild(c);var l=ht("div",{class:"col col-12 offset-col-md-1 col-md-10"},null,null," ",ht("p",{class:"video__description"},null,null,"".concat(t.description)));i.appendChild(l);var s=ht("hr",{class:"line col col-10 offset-col-1"},null,null," "),d=ht("div",{class:"row related-row"},null,null," "),h=ht("section",{class:"related"},null,null," ",ht("div",{class:"grid"},null,null," ",ht("div",{class:"row"},null,null," ",ht("div",{class:"col col-12 offset-col-md-1 col-md-10"},null,null," ",ht("h2",{class:"related__videos"},null,null,"Tengd myndbönd"))),d,ht("div",{class:"line-container"},null,null," ",s)));a.appendChild(h);var f=t.related;n.videos.forEach((function(t){var e=t.id;if(xt(f,e)){var n=ht("div",{class:"col col-4 offset-col-md-1 col-md-10"},null,null," ",ht("div",{class:"card"},null,null," ",ht("a",{href:"/pages/video.html?video=".concat(e),class:"img__container"},null,null," ",ht("img",{src:"/".concat(t.poster),class:"card__poster"},null,null," "),ht("p",{class:"img__duration"},null,null,"".concat(kt(t.duration)))),ht("h3",{class:"card__title"},null,null,"".concat(t.title)),ht("p",{class:"card__created"},null,null,"".concat(Tt(t.created)))));d.appendChild(n)}}));var m=ft("footer"," ",ht("div",{class:"grid"},null,null," ",ht("div",{class:"row"},null,null," ",ht("div",{class:"col col-12"},null,null," ",ht("a",{href:"/index.html"},null,null,"Til baka")))));a.appendChild(m)}}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",r(regeneratorRuntime.mark((function t(){var e,n,r,a,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!document.querySelector("body").classList.contains("frontpage")){t.next=7;break}return t.next=4,Ct();case 4:console.log("forsíða"),t.next=19;break;case 7:return console.log("video síða"),e=new URLSearchParams(window.location.search),n=e.get("video"),console.log("birta video id = ",n),t.next=13,o();case 13:return r=t.sent,console.log(r),a=r.videos.find((function(t){return t.id===parseInt(n,10)})),i=a.id,t.next=19,St(i);case 19:case"end":return t.stop()}}),t)}))))}();
//# sourceMappingURL=bundle.js.map
