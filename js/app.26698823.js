(function(){var n={4720:function(n,e,t){Promise.all([t.e(337),t.e(931)]).then(t.bind(t,4931))},9813:function(n,e,t){"use strict";var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!==typeof shell)return n();t.l("http://shell/remoteEntry.js",(function(t){if("undefined"!==typeof shell)return n();var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+o+": "+u+")",r.name="ScriptExternalLoadError",r.type=o,r.request=u,e(r)}),"shell")})).then((function(){return shell}))}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var u=e[r]={exports:{}};return n[r](u,u.exports,t),u.exports}t.m=n,t.c=e,function(){var n=[];t.O=function(e,r,o,u){if(!r){var i=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],u=n[l][2];for(var f=!0,a=0;a<r.length;a++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](r[a])}))?r.splice(a--,1):(f=!1,u<i&&(i=u));if(f){n.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}u=u||0;for(var l=n.length;l>0&&n[l-1][2]>u;l--)n[l]=n[l-1];n[l]=[r,o,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+n+"."+{337:"dae9e594",931:"6815d9d7",935:"b50bb2b7"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+n+".8d2084f2.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="01-market-depth-table:";t.l=function(r,o,u,i){if(n[r])n[r].push(o);else{var f,a;if(void 0!==u)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var s=c[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==e+u){f=s;break}}f||(a=!0,f=document.createElement("script"),f.charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack",e+u),f.src=r),n[r]=[o];var d=function(e,t){f.onerror=f.onload=null,clearTimeout(h);var o=n[r];if(delete n[r],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((function(n){return n(t)})),e)return e(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),a&&document.head.appendChild(f)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={337:[9792,3714]},e={3714:["default","./BinanceSymbolsResponse",9813],9792:["default","./Binance",9813]};t.f.remotes=function(r,o){t.o(n,r)&&n[r].forEach((function(n){var r=t.R;r||(r=[]);var u=e[n];if(!(r.indexOf(u)>=0)){if(r.push(u),u.p)return o.push(u.p);var i=function(e){e||(e=new Error("Container missing")),"string"===typeof e.message&&(e.message+='\nwhile loading "'+u[1]+'" from '+u[2]),t.m[n]=function(){throw e},u.p=0},f=function(n,e,t,r,f,a){try{var c=n(e,t);if(!c||!c.then)return f(c,r,a);var l=c.then((function(n){return f(n,r)}),i);if(!a)return l;o.push(u.p=l)}catch(s){i(s)}},a=function(n,e,r){return n?f(t.I,u[0],0,n,c,r):i()},c=function(n,e,t){return f(e.get,u[1],r,0,l,t)},l=function(e){u.p=1,t.m[n]=function(n){n.exports=e()}};f(t,u[2],0,0,a,1)}}))}}(),function(){t.S={};var n={},e={};t.I=function(r,o){o||(o=[]);var u=e[r];if(u||(u=e[r]={}),!(o.indexOf(u)>=0)){if(o.push(u),n[r])return n[r];t.o(t.S,r)||(t.S[r]={});var i=t.S[r],f=function(n){return"undefined"!==typeof console&&console.warn&&console.warn(n)},a="01-market-depth-table",c=function(n,e,t,r){var o=i[n]=i[n]||{},u=o[e];(!u||!u.loaded&&(!r!=!u.eager?r:a>u.from))&&(o[e]={get:t,from:a,eager:!!r})},l=function(n){var e=function(n){f("Initialization of sharing external failed: "+n)};try{var u=t(n);if(!u)return;var i=function(n){return n&&n.init&&n.init(t.S[r],o)};if(u.then)return s.push(u.then(i,e));var a=i(u);if(a&&a.then)return s.push(a["catch"](e))}catch(c){e(c)}},s=[];switch(r){case"default":c("vue","2.6.14",(function(){return t.e(935).then((function(){return function(){return t(8935)}}))})),l(9813);break}return s.length?n[r]=Promise.all(s).then((function(){return n[r]=1})):n[r]=1}}}(),function(){t.p="/market_depth_table/"}(),function(){var n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},e=function(e,t){e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var o=e[r],u=(typeof o)[0];if(r>=t.length)return"u"==u;var i=t[r],f=(typeof i)[0];if(u!=f)return"o"==u&&"n"==f||"s"==f||"u"==u;if("o"!=u&&"u"!=u&&o!=i)return o<i;r++}},r=function(e,t){if(0 in e){t=n(t);var o=e[0],u=o<0;u&&(o=-o-1);for(var i=0,f=1,a=!0;;f++,i++){var c,l,s=f<e.length?(typeof e[f])[0]:"";if(i>=t.length||"o"==(l=(typeof(c=t[i]))[0]))return!a||("u"==s?f>o&&!u:""==s!=u);if("u"==l){if(!a||"u"!=s)return!1}else if(a)if(s==l)if(f<=o){if(c!=e[f])return!1}else{if(u?c>e[f]:c<e[f])return!1;c!=e[f]&&(a=!1)}else if("s"!=s&&"n"!=s){if(u||f<=o)return!1;a=!1,f--}else{if(f<=o||l<s!=u)return!1;a=!1}else"s"!=s&&"n"!=s&&(a=!1,f--)}}var d=[],h=d.pop.bind(d);for(i=1;i<e.length;i++){var p=e[i];d.push(1==p?h()|h():2==p?h()&h():p?r(p,t):!h())}return!!h()},o=function(n,t,o){var u=n[t];t=Object.keys(u).reduce((function(n,t){return r(o,t)&&(!n||e(n,t))?t:n}),0);return t&&u[t]},u=function(n){return n.loaded=1,n.get()},i=function(n){return function(e,r,o,u){var i=t.I(e);return i&&i.then?i.then(n.bind(n,e,t.S[e],r,o,u)):n(e,t.S[e],r,o,u)}},f=i((function(n,e,r,i,f){var a=e&&t.o(e,r)&&o(e,r,i);return a?u(a):f()})),a={},c={6196:function(){return f("default","vue",[1,2,6,14],(function(){return t.e(935).then((function(){return function(){return t(8935)}}))}))}},l={931:[6196]};t.f.consumes=function(n,e){t.o(l,n)&&l[n].forEach((function(n){if(t.o(a,n))return e.push(a[n]);var r=function(e){a[n]=0,t.m[n]=function(r){delete t.c[n],r.exports=e()}},o=function(e){delete a[n],t.m[n]=function(r){throw delete t.c[n],e}};try{var u=c[n]();u.then?e.push(a[n]=u.then(r)["catch"](o)):r(u)}catch(i){o(i)}}))}}(),function(){var n=function(n,e,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var u=function(u){if(o.onerror=o.onload=null,"load"===u.type)t();else{var i=u&&("load"===u.type?"missing":u.type),f=u&&u.target&&u.target.href||e,a=new Error("Loading CSS chunk "+n+" failed.\n("+f+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=i,a.request=f,o.parentNode.removeChild(o),r(a)}};return o.onerror=o.onload=u,o.href=e,document.head.appendChild(o),o},e=function(n,e){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===n||u===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],u=o.getAttribute("data-href");if(u===n||u===e)return o}},r=function(r){return new Promise((function(o,u){var i=t.miniCssF(r),f=t.p+i;if(e(i,f))return o();n(r,f,o,u)}))},o={143:0};t.f.miniCss=function(n,e){var t={931:1};o[n]?e.push(o[n]):0!==o[n]&&t[n]&&e.push(o[n]=r(n).then((function(){o[n]=0}),(function(e){throw delete o[n],e})))}}(),function(){var n={143:0,64:0};t.f.j=function(e,r){var o=t.o(n,e)?n[e]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(337|64)$/.test(e))n[e]=0;else{var u=new Promise((function(t,r){o=n[e]=[t,r]}));r.push(o[2]=u);var i=t.p+t.u(e),f=new Error,a=function(r){if(t.o(n,e)&&(o=n[e],0!==o&&(n[e]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",f.name="ChunkLoadError",f.type=u,f.request=i,o[1](f)}};t.l(i,a,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,r){var o,u,i=r[0],f=r[1],a=r[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(o in f)t.o(f,o)&&(t.m[o]=f[o]);if(a)var l=a(t)}for(e&&e(r);c<i.length;c++)u=i[c],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(l)},r=self["webpackChunk_01_market_depth_table"]=self["webpackChunk_01_market_depth_table"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[64],(function(){return t(4720)}));r=t.O(r)})();
//# sourceMappingURL=app.26698823.js.map