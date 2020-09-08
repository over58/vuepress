(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{383:function(t,n,a){"use strict";a.r(n);var e=a(42),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),a("p",[t._v("this是函数 ( 运行时,即指的是被调用时 )的上下文， 指向调用它的 (最近的上下文)。")]),t._v(" "),a("h3",{attrs:{id:"绑定规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定规则"}},[t._v("#")]),t._v(" 绑定规则")]),t._v(" "),a("ol",[a("li",[t._v("函数绑定")]),t._v(" "),a("li",[t._v("new绑定")]),t._v(" "),a("li",[t._v("箭头函数绑定")])]),t._v(" "),a("h4",{attrs:{id:"_1-函数调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-函数调用"}},[t._v("#")]),t._v(" 1.函数调用")]),t._v(" "),a("p",[t._v("JS（ES5）里面有三种函数调用形式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  func(p1, p2) \n  obj.child.method(p1, p2)\n  func.call(context, p1, p2) // 先不讲 apply\n")])])]),a("p",[t._v("一般，初学者都知道前两种形式，而且认为前两种形式「优于」第三种形式。\n从看到这篇文章起，你一定要记住，第三种调用形式，才是正常调用形式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  func.call(context, p1, p2)\n")])])]),a("p",[t._v("其他两种都是语法糖，可以等价地变为 call 形式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  func(p1, p2) 等价于\n  func.call(undefined, p1, p2)\n\n  obj.child.method(p1, p2) <=>\n  obj.child.method.call(obj.child, p1, p2)\n")])])]),a("p",[t._v("请记下来。（我们称此代码为「转换代码」，方便下文引用）\n至此我们的函数调用只有一种形式：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  func.call(context, p1, p2)\n")])])]),a("p",[t._v("举些其他例子：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var a= {\n  name: 'XXX',\n  xxx: function () {\n    console.log(this)\n  }\n}\n\nfunction xxx() {\n  console.log(this)\n}\n(b = a.xxx)()\n<=> var b = a.xxx.bind(undefined); b()\n\n(a.xxx)()\n<=> a.xxx()\n\n")])])]),a("h5",{attrs:{id:"dom元素绑定事件时的this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dom元素绑定事件时的this"}},[t._v("#")]),t._v(" Dom元素绑定事件时的this")]),t._v(" "),a("p",[t._v("MDN这样解释：")]),t._v(" "),a("blockquote",[a("p",[t._v("通常来说this的值是触发事件的元素的引用，这种特性在多个相似的元素使用同一个通用事件监听器时非常让人满意。当使用 addEventListener() 为一个元素注册事件的时候，句柄里的 this 值是该元素的引用。其与传递给句柄的 event 参数的 currentTarget 属性的值一样。\n这种this绑定时浏览器内置的，不方便看，但可以假想为：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var button = document.getElementById(\"btn)\nbutton.addEventListener('click', handlder)\n\n// 当事件被触发时\nhandler.call(event.currentTarget, event) \n// 那么 this 是什么不言而喻\n")])])]),a("h4",{attrs:{id:"_2-new绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-new绑定"}},[t._v("#")]),t._v(" 2.new绑定")]),t._v(" "),a("p",[t._v("使用new来调用函数，或者说发生构造函数调用时，会自动执行下面的操作。\n1、创建（或者说构造）一个新的临时对象。\n2、指定原型。\n3、返回这个新对象(这个新对象会绑定到函数调用的this)。\n4、给原型指定名字为prototype")]),t._v(" "),a("p",[t._v("手写一个new实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function Person() {\n\t  // 1. 创建一个空的对象\n    var obj = new Object(),\n\t  \n    // 2. 链接到原型，obj 可以访问到构造函数原型中的属性  \n\n    // 获得构造函数，arguments中去除第一个参数(构造函数)\n    obj.__proto__ = Person.prototype;\n    obj.__proto__.constructor = Person\n    \n    // 3. \n    var ret = Person.apply(obj, arguments);\n\t  return ret instanceof Object ? ret : obj;\n};\n\n//4.\nPerson.prototype = {\n  constructor: null\n}\n")])])]),a("h4",{attrs:{id:"_3-箭头函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-箭头函数"}},[t._v("#")]),t._v(" 3.箭头函数")]),t._v(" "),a("p",[t._v("ES6新增一种特殊函数类型：箭头函数,根据外层（函数或者全局）作用域（词法作用域）来决定this。")]),t._v(" "),a("p",[t._v("foo()内部创建的箭头函数会捕获调用时foo()的this。由于foo()的this绑定到obj1，bar(引用箭头函数)的this也会绑定到obj1，箭头函数的绑定无法被修改(new也不行)。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function foo() {\n    // 返回一个箭头函数\n    return (a) => {\n        // this继承自foo()\n        console.log( this.a );\n    };\n}\nvar obj1 = {\n  a: 2\n};\nvar obj2 = {\n    a: 3\n}\nvar bar = foo.call( obj1 );\nbar.call( obj2 ); // 2，不是3！\n")])])]),a("p",[t._v("ES6之前和箭头函数类似的模式，采用的是词法作用域取代了传统的this机制。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("function foo() {\n    var self = this; // lexical capture of this\n    setTimeout( function() {\n        console.log( self.a ); // self只是继承了foo()函数的this绑定\n    }, 100 );\n}\nvar obj = {\n    a: 2\n};\nfoo.call(obj); // 2\n")])])]),a("p",[t._v("代码风格统一问题：如果既有this风格的代码，还会使用 seft = this 或者箭头函数来否定this机制。")]),t._v(" "),a("ul",[a("li",[t._v("只使用词法作用域并完全抛弃错误this风格的代码；")]),t._v(" "),a("li",[t._v("完全采用this风格，在必要时使用bind(..)，尽量避免使用 self = this 和箭头函数。")])])])}),[],!1,null,null,null);n.default=s.exports}}]);