(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{410:function(e,n,a){"use strict";a.r(n);var c=a(42),t=Object(c.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[e._v("#")]),e._v(" code")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function memoize(func, hashFunc) {\n  var memoize = function(key) {\n    var cache = memoize.cache\n    var address = '' + (hashFunc ? hashFunc.apply(this, arguments) : key)\n    if(Object.getOwnPropertyNames(cache).indexOf(address) === -1) {\n      cache[address] = func.apply(this, arguments)\n    }\n      return cache[address]\n  }\n  memoize.cache = {}\n  return memoize\n}\n\n\n")])])]),a("h3",{attrs:{id:"test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[e._v("#")]),e._v(" test")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let fibonacci = memoize(function(n){\n  return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);\n})\nconsole.log(fibonacci(1))\nconsole.log(fibonacci(2))\nconsole.log(fibonacci(3))\nconsole.log(fibonacci(4))\nconsole.log(fibonacci(10))\nconsole.log(fibonacci(100))\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);