(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{406:function(t,a,n){"use strict";n.r(a);var e=n(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"window-orientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#window-orientation"}},[t._v("#")]),t._v(" window.orientation")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var orient = Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait' \n\n\x3c!-- ps 英语渣渣必备--\x3e\n// landscape 横屏\n// portrait 竖屏\n")])])]),n("p",[t._v("widnow.orientation四种取值")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("角度")]),t._v(" "),n("th",[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("0")]),t._v(" "),n("td",[t._v("竖屏")])]),t._v(" "),n("tr",[n("td",[t._v("90")]),t._v(" "),n("td",[t._v("横屏-顺时针旋转90度")])]),t._v(" "),n("tr",[n("td",[t._v("180")]),t._v(" "),n("td",[t._v("竖屏-顺时针旋转90度")])]),t._v(" "),n("tr",[n("td",[t._v("-90")]),t._v(" "),n("td",[t._v("横屏-逆时针旋转90度")])])])]),t._v(" "),n("h4",{attrs:{id:"orientationchange"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#orientationchange"}},[t._v("#")]),t._v(" orientationChange")]),t._v(" "),n("p",[t._v("移动端的设备提供了一个事件：orientationChange事件\n这个事件是苹果公司为safari中添加的。以便开发人员能够确定用户何时将设备由横向查看切换为纵向查看模式。\n在设备旋转的时候，会触发这个事件，")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('window.addEventListener("orientationchange", function() {\n    // Announce the new orientation number\n    alert(window.orientation);\n}, false);\n')])])]),n("h3",{attrs:{id:"不支持orientation时"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不支持orientation时"}},[t._v("#")]),t._v(" 不支持orientation时")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';\n")])])]),n("h4",{attrs:{id:"什么时机进行判断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么时机进行判断"}},[t._v("#")]),t._v(" 什么时机进行判断")]),t._v(" "),n("p",[t._v("window.resize时判断横竖屏,并且可以操作一些自定义的其他操作")]),t._v(" "),n("h3",{attrs:{id:"兼容性写法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兼容性写法"}},[t._v("#")]),t._v(" 兼容性写法")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var orient = (Math.abs(window.orientation) === 90 || window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait'\n")])])]),n("h3",{attrs:{id:"横竖屏时仅仅css不同的时候-不需要其他js操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#横竖屏时仅仅css不同的时候-不需要其他js操作"}},[t._v("#")]),t._v(" 横竖屏时仅仅css不同的时候，不需要其他js操作")]),t._v(" "),n("p",[t._v("借助 media queries")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("@media all and (orientation: portrait) {\n  body div {background: red;} \n\n}\n\n @media all and (orientation: landscape) { \n     \n     body div {background: blue; } \n }\n")])])]),n("p",[t._v("这个orientation media query 在ios3.2+和安卓2.0+上还有其他浏览器上有效。")]),t._v(" "),n("h4",{attrs:{id:"生产环境实际使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生产环境实际使用"}},[t._v("#")]),t._v(" 生产环境实际使用")]),t._v(" "),n("p",[t._v("需要考虑键盘调起时引起的横竖屏判断错误(focusin, focusout), 结合matchMedia()和人为的指定竖屏取小，横屏取大来解决")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var keyUp = false\ndocument.addEventListener('focusin', function () {\n\tkeyUp = true\n})\n\ndocument.addEventListener('focusout', function () {\n\tkeyUp = false\n})\n    \n\n  var portrait = window.matchMedia(\"(orientation: portrait)\");\n\tif(keyUp) {\n\t\tvar width = portrait ? screen.availWidth:  screen.availHeight\n\t}else{\n\t\tvar width = (portrait.matches ? Math.min(screen.availWidth, screen.availHeight): Math.max(screen.availWidth, screen.availHeight) ) || docEl.clientWidth\n\t}\nvar rem = width / 18.75\ndocEl.style.fontSize = rem + 'px'\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);