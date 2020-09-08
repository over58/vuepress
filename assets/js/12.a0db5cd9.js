(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{361:function(t,a,e){"use strict";e.r(a);var n=e(42),i=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"block-format-context-特点是内部子元素绝不会影响外部的元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-format-context-特点是内部子元素绝不会影响外部的元素"}},[t._v("#")]),t._v(" block format context 特点是内部子元素绝不会影响外部的元素")]),t._v(" "),e("h3",{attrs:{id:"如何触发一个盒子的bfc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何触发一个盒子的bfc"}},[t._v("#")]),t._v(" 如何触发一个盒子的bfc ?")]),t._v(" "),e("p",[t._v("1、body 根元素\n2、浮动元素：float 除 none 以外的值\n3、绝对定位元素：position (absolute、fixed)\n4、display 为 inline-block、table-cells、flex\n5、overflow 除了 visible 以外的值 (hidden、auto、scroll)")]),t._v(" "),e("p",[e("strong",[t._v("浮动元素产生了浮动流")])]),t._v(" "),e("p",[t._v("所有产生了浮动流的元素，块级元素看不到他们，产生了bfc的元素和文本类属性（inline）的元素以及文本都能看到浮动元素。")]),t._v(" "),e("p",[t._v("==ps==: 能清除浮动的只有块级元素")]),t._v(" "),e("h3",{attrs:{id:"bfc有以下用途-bfc-特性及应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bfc有以下用途-bfc-特性及应用"}},[t._v("#")]),t._v(" BFC有以下用途, BFC 特性及应用")]),t._v(" "),e("h4",{attrs:{id:"_1-上线外边距发生折叠"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-上线外边距发生折叠"}},[t._v("#")]),t._v(" 1. 上线外边距发生折叠")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<head>\n    div{\n        width: 100px;\n        height: 100px;\n        background: lightblue;\n        margin: 100px;\n    }\n</head>\n<body>\n    <div></div>\n    <div></div>\n</body>\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("从效果上看，因为两个 div 元素都处于同一个 BFC 容器下 (这里指 body 元素) 。\n所以第一个 div 的下边距和第二个 div 的上边距发生了重叠，所以两个盒子之间距离只有 100px，而不是 200px。\n首先这不是 CSS 的 bug，我们可以理解为一种规范，如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<div class="container">\n    <p></p>\n</div>\n<div class="container">\n    <p></p>\n</div>\n.container {\n    overflow: hidden;\n}\np {\n    width: 100px;\n    height: 100px;\n    background: lightblue;\n    margin: 100px;\n}\n\n这时候，两个盒子边距就变成了 200px \n')])])]),e("h4",{attrs:{id:"_2-bfc-可以包含浮动的元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-bfc-可以包含浮动的元素"}},[t._v("#")]),t._v(" 2. BFC 可以包含浮动的元素")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("我们都知道，浮动的元素会脱离普通文档流\n")])])]),e("div",{staticStyle:{border:"1px solid #000"}},[e("div",{staticStyle:{width:"100px",height:"100px",background:"#eee",float:"left"}})]),t._v(" "),e("blockquote",[e("p",[t._v("由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度。如果使触发容器的 BFC，那么容器将会包裹着浮动元素。\n")]),e("div",{staticStyle:{border:"1px solid #000",overflow:"hidden"}},[e("div",{staticStyle:{width:"100px",height:"100px",background:"#eee",float:"left"}})]),e("p")]),t._v(" "),e("h4",{attrs:{id:"_3-bfc-可以阻止元素被浮动元素覆盖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-bfc-可以阻止元素被浮动元素覆盖"}},[t._v("#")]),t._v(" 3. BFC 可以阻止元素被浮动元素覆盖")]),t._v(" "),e("p",[t._v("先来看一个文字环绕效果：")]),t._v(" "),e("div",{staticStyle:{height:"100px",width:"100px",float:"left",background:"lightblue"}},[t._v("我是一个左浮动的元素")]),t._v(" "),e("div",{staticStyle:{width:"200px",height:"200px",background:"#eee"}},[t._v("我是一个没有设置浮动, \n也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;")]),t._v(" "),e("blockquote",[e("p",[t._v("这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中加入 overflow: hidden")])]),t._v(" "),e("p",[t._v("这个方法可以用来实现两列自适应布局，效果不错，这时候左边的宽度固定，右边的内容自适应宽度(去掉上面右边内容的宽度)。")])])}),[],!1,null,null,null);a.default=i.exports}}]);