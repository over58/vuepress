(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(e,t,a){"use strict";a.r(t);var s=a(42),c=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"cy实例对象常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cy实例对象常用操作"}},[e._v("#")]),e._v(" cy实例对象常用操作")]),e._v(" "),a("h4",{attrs:{id:"添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加"}},[e._v("#")]),e._v(" 添加")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cy.add(eleObj/eleObjs/eles)\n")])])]),a("h4",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[e._v("#")]),e._v(" remove")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cy.remove(elems/selector)\n")])])]),a("h4",{attrs:{id:"获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取"}},[e._v("#")]),e._v(" 获取")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cy.colleciton 返回一个new empty collection\ncy.getElementById() or  cy.$id()   return one element\ncy.$(selector)、cy.elements(selector)  return  elements\ncy.nodes(selector)\ncy.edges(selector)\ncy.filter(selector) return elements\ncy.filter(function(ele, i, eles))\n  - ele The current element under consideration for filtering.\n  - i The counter used for iteration over the elements in the graph.\n  - eles The collection of elements being filtered\n")])])]),a("blockquote",[a("p",[e._v("ps: cy.nodes('[weight > 50]');")])]),e._v(" "),a("h4",{attrs:{id:"批量修改-能够有效的减少渲染成本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量修改-能够有效的减少渲染成本"}},[e._v("#")]),e._v(" 批量修改(能够有效的减少渲染成本)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cy.batch()\ncy.satrtBatch()\ncy.endBatch()\n")])])]),a("blockquote",[a("p",[e._v("demo如下")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("  cy.startBatch();\n\n  \x3c!-- 多次的样式修改操作 --\x3e\n  cy.$('#j')\n    .data('weight', '70')\n    .addClass('funny')\n    .removeClass('serious')\n\n  cy.endBatch();\n  能够减少中间的redraw的成本，和jquery中将一系列修改样式的操作合并到一个类中，对这个类进行操作一个道理。\n")])])]),a("h4",{attrs:{id:"create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[e._v("#")]),e._v(" create")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cy.mount()\ncy.unmount()\n")])])]),a("h4",{attrs:{id:"销毁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#销毁"}},[e._v("#")]),e._v(" 销毁")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cy.destroy() 有利于gc\n")])])]),a("h4",{attrs:{id:"临时数据操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#临时数据操作"}},[e._v("#")]),e._v(" 临时数据操作")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("cy.scratch([namespace], [value])\ncy.removeScratch()\n")])])]),a("h3",{attrs:{id:"全局函数-cytoscape在调试过程中在console中打印一些错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局函数-cytoscape在调试过程中在console中打印一些错"}},[e._v("#")]),e._v(" 全局函数： cytoscape在调试过程中在console中打印一些错")]),e._v(" "),a("ul",[a("li",[e._v("cytoscape.warnings(false) 禁止报错")]),e._v(" "),a("li",[e._v("cytoscape.warnings(true)  开启报错")]),e._v(" "),a("li",[e._v("cytoscape.warnings()      得到当前状态")])]),e._v(" "),a("h3",{attrs:{id:"collection的一些操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collection的一些操作"}},[e._v("#")]),e._v(" collection的一些操作")])])}),[],!1,null,null,null);t.default=c.exports}}]);