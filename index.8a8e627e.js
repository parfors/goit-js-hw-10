!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var c=u.test(e);return c||f.test(e)?a(e.slice(2),c?2:8):r.test(e)?NaN:+e}e=function(t,e,n){var o,i,r,u,f,a,c=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,c=e,u=t.apply(r,n)}function h(t){return c=t,f=setTimeout(O,e),l?g(t):u}function j(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function O(){var t=b();if(j(t))return T(t);f=setTimeout(O,function(t){var n=e-(t-a);return s?p(n,r-(t-c)):n}(t))}function T(t){return f=void 0,d&&o?g(t):(o=i=void 0,u)}function w(){var t=b(),n=j(t);if(o=arguments,i=this,a=t,n){if(void 0===f)return h(a);if(s)return f=setTimeout(O,e),g(a)}return void 0===f&&(f=setTimeout(O,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?v(m(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},w.flush=function(){return void 0===f?u:T(b())},w};({input:document.querySelector("#search-box")}).input.addEventListener("input",t(e)((function(t){var e=t.target.value;e&&(n=e.trim(),o="https://restcountries.com/v3.1/name/".concat(n,"?fields=name,capital,population,flags,languages"),fetch(o).then((function(t){return t.json()})).then((function(t){return console.log(t)})));var n,o}),300))}();
//# sourceMappingURL=index.8a8e627e.js.map
