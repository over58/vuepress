(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{433:function(e,n,t){"use strict";t.r(n);var s=t(42),r=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"广度优先遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#广度优先遍历"}},[e._v("#")]),e._v(" 广度优先遍历")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function traverse(node) {\n  let stack = []\n  let nodes = []\n  if(node) {\n    stack.push(node)\n    while(stack.length) {\n      let item = stack.shift()\n      let children = item.children\n      nodes.push(item)\n      for(let i=0;i<children.length;i++) {\n        stack.push(children[i])\n      }\n    }\n  }\n  return nodes\n}\n")])])]),t("h4",{attrs:{id:"深度优先遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深度优先遍历"}},[e._v("#")]),e._v(" 深度优先遍历")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function deepTraverse(node, ret) {\n  if(node !== null) {\n    ret.push(node)\n    let children = node.children\n    for(let i=0;i<children.length;i++) {\n      deepTraverse(children[i], ret)\n    }\n  }\n  return ret\n}\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);