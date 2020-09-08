(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{426:function(t,n,o){"use strict";o.r(n);var e=o(42),a=Object(e.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h3",{attrs:{id:"前言"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),o("p",[t._v("作为一个Web开发而言，modal模态框一定不会陌生。本文将简单的讲一下如何使用js自定义一个modal框，当然了，本文的重点并不是教你如何构建一个modal框，而是希望能够教你如何构建一个组件的思路。好了，废话不多说，正文开始。")]),t._v(" "),o("h3",{attrs:{id:"modal是什么-有什么功能"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modal是什么-有什么功能"}},[t._v("#")]),t._v(" modal是什么，有什么功能")]),t._v(" "),o("p",[t._v("modal是位于用户主窗口之上的一个元素，当它打开的时候，主窗口无法操作，位于主窗口之上的modal框内可以操作。一个modal至少包含以下几个功能：")]),t._v(" "),o("ol",[o("li",[t._v("模态框的蒙版 .modal-overlay")]),t._v(" "),o("li",[t._v("头部  .modal-header")]),t._v(" "),o("li",[t._v("主体 .modal-body")]),t._v(" "),o("li",[t._v("脚步 .modal-footer")]),t._v(" "),o("li",[t._v("关闭按钮 .modal-close")])]),t._v(" "),o("blockquote",[o("p",[t._v("关闭按钮包括多种方式：取消按钮（footer中）、关闭按钮(右上角)、ESC按键、点击模态框主体外的蒙版的区域")])]),t._v(" "),o("h3",{attrs:{id:"构建插件"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#构建插件"}},[t._v("#")]),t._v(" 构建插件")]),t._v(" "),o("p",[t._v("1.首先选择iife。这里使用了闭包的知识，因为闭包可以创建一个私有域。")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("(function(){\n  var 私有变量 = 值\n})()\n")])])]),o("p",[t._v("2.设置选项（options）")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("  \x3c!-- 设置一个windo中可以访问的函数 --\x3e\n  this.Modal = function() {\n    this.modal = null; // 模态弹出框\n    this.overlay = null; //蒙板\n    this.closeButton = null; // 右上角关闭按钮\n    this.footerCloseButton = null //footer关闭按钮\n    this.options = {\n      className: 'fade-and-drop',\n      content: '这是一个自定义的模态框',\n      minHeight: '300px',\n      maxHeight: '600px',\n      closable: true, // 是否可关闭，决定着是否有关闭按钮\n      overlay: true\n    };\n    //  合并默认设置和用户自定义设置，用户自定义配置>默认配置\n    if (arguments[0] && typeof arguments[0] === 'object') {\n      this.options = mergeOptions(this.options, arguments[0]);\n    }\n  };\n\n  //合并对象属性的工具方法\n  function mergeOptions(target, source) {\n    for (let property in source) {\n      if (source.hasOwnProperty(property)) {\n        target[property] = source[property];\n      }\n    }\n    return target;\n  }\n")])])]),o("p",[t._v("3.　核心功能")]),t._v(" "),o("p",[t._v("现在我们对模态框的插件架构有了一定的了解，它包括了：构造函数、选项和公共方法。但它还不能做什么？接下来我们就要给他们添加相应的核心功能。所以我们再来看看，一个模态框应该做什么：")]),t._v(" "),o("ul",[o("li",[t._v("构建一个模态元素并将其添加到页面中")]),t._v(" "),o("li",[t._v("将选项（options）中的className指定一个类名，并将其添加到模态元素中")]),t._v(" "),o("li",[t._v("如果选项中的closeButton为true，则添加关闭按钮")]),t._v(" "),o("li",[t._v("如果选项中的content是 HTML 字符串，则将其设置为模态元素中的内容")]),t._v(" "),o("li",[t._v("如果选项中的content是domNode，则将其内部内容设置为模态元素的内容")]),t._v(" "),o("li",[t._v("分别设置模态的maxWidth和minWidth")]),t._v(" "),o("li",[t._v("如果选项中的overlay为true，则给模态框添加一个蒙层")]),t._v(" "),o("li",[t._v("当模态框显示时，添加一个scotch-open类名，可以在 CSS 中使用它来定义一个open状态")]),t._v(" "),o("li",[t._v("当模态框关闭时，删除scotch-open类名")]),t._v(" "),o("li",[t._v("如果模态框的高度超过视窗的高度，还可以添加一个scotch-anchored类，这样就可以处理这个场景的样式展示")])]),t._v(" "),o("h3",{attrs:{id:"代码思路"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#代码思路"}},[t._v("#")]),t._v(" 代码思路")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("(function(){\n  //构造函数\n  this.Modal = function () {\n    // 初始化默认option，　\n    this.options = {\n\n    }\n    //合并用户自定义配置和默认配置，并赋值给options, 每个实例都可能不一样，所有不能放在prototype上，同时在其它函数中又要引用它，所有定义为公有属性\n    \n    this.options = mergeOptions(this.options, arguments[0])\n\n  }\n  // 打开Modal的方法,每个实例中的这个方法都是一样的,定义在prototype上\n  Modal.prototype.open = function(){\n\n    // 初始化Dom\n    1.overlay蒙版元素\n    2.modal元素{\n      close按钮\n      content\n      footer\n    }\n\n\n    // 初始化Event\n    包括：{\n      close事件\n      transitionEnd事件(关闭按钮中Css使用了过渡动画，等过渡动画完成之后才能移除dom)，需要注意的就是不同的的浏览器中这个时间的名字可能不一样\n    }\n  }\n\n  //关闭方法\n  Modal.prototype.close = function(){\n    //移除Dom\n  }\n\n})()\n\n")])])]),o("h3",{attrs:{id:"完整的代码链接-https-codepen-io-xuyongchaos-pen-amgxly-editors-1010"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#完整的代码链接-https-codepen-io-xuyongchaos-pen-amgxly-editors-1010"}},[t._v("#")]),t._v(" !!!!完整的代码链接 https://codepen.io/xuyongchaos/pen/aMGXLy?editors=1010")]),t._v(" "),o("h3",{attrs:{id:"使用到的东西"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#使用到的东西"}},[t._v("#")]),t._v(" 使用到的东西")]),t._v(" "),o("ol",[o("li",[t._v("闭包")]),t._v(" "),o("li",[t._v("DocumentFragment")]),t._v(" "),o("li",[t._v("如何减少浏览器回流")]),t._v(" "),o("li",[t._v("DOM操作")]),t._v(" "),o("li",[t._v("DOM事件")]),t._v(" "),o("li",[t._v("this相关call, bind")]),t._v(" "),o("li",[t._v("css样式")])]),t._v(" "),o("h3",{attrs:{id:"总结"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结：")]),t._v(" "),o("p",[t._v("编写一个简单的插件需要的知识还是挺多的，没事的话可以自己编写一下，不仅锻炼了模块化编程思维，还可以对以前的知识进行查缺补漏。fighting!!!")])])}),[],!1,null,null,null);n.default=a.exports}}]);