(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{396:function(t,e,a){"use strict";a.r(e);var n=a(42),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"滚动不流畅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#滚动不流畅"}},[t._v("#")]),t._v(" 滚动不流畅")]),t._v(" "),a("p",[t._v("解决办法：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  overflow-y: scroll;\n\ttouch-action: pan-y;\n\t-webkit-overflow-scrolling: touch;\n")])])]),a("h3",{attrs:{id:"input再次获得焦点时-需要多次点击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input再次获得焦点时-需要多次点击"}},[t._v("#")]),t._v(" input再次获得焦点时，需要多次点击")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\x3c!-- 解决300ms延迟 --\x3e\nimport fastClick from 'fastclick'\n\n// 解决ios输入框bug：第一次点击输入框，正常反应；\n// 点击键盘完成后，再次点击输入框，很难再获得焦点的问题\nfastClick.prototype.onTouchEnd = function (event) {\n  if (event.target.hasAttribute('type') && event.target.getAttribute('type') === 'text') {\n    event.preventDefault()\n    return false\n  }\n}\n\nfastClick.attach(document.body)\n\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);