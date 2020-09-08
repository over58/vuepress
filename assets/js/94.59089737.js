(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{378:function(e,n,i){"use strict";i.r(n);var t=i(42),d=Object(t.a)({},(function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h3",{attrs:{id:"vue-directive-的几个钩子函数"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vue-directive-的几个钩子函数"}},[e._v("#")]),e._v(" vue-directive 的几个钩子函数")]),e._v(" "),i("ul",[i("li",[e._v("bind  指令第一次被绑定到元素时调用，只调用一次")]),e._v(" "),i("li",[e._v("inserted 被绑定元素插入到父节点时调用")]),e._v(" "),i("li",[e._v("update 被绑定元素所在模版更新时调用，不论绑定值是否变化都调用")]),e._v(" "),i("li",[e._v("componentUpdated 被绑定元素所在模版在完成一次更新周期时调用")]),e._v(" "),i("li",[e._v("unbind 元素解绑时调用，只调用一次")])]),e._v(" "),i("h3",{attrs:{id:"每个钩子函数都有参数"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#每个钩子函数都有参数"}},[e._v("#")]),e._v(" 每个钩子函数都有参数：")]),e._v(" "),i("ul",[i("li",[e._v("el: 指令绑定的element,用来操作dom")]),e._v(" "),i("li",[e._v("binging 一个对象，包含以下属性\n"),i("ul",[i("li",[e._v("name: 指令名，不包含v-前缀")]),e._v(" "),i("li",[e._v("value: 指令的绑定值，例如 v-my-directive=叮+ l”， value的值是，2")]),e._v(" "),i("li",[e._v("oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用.无论value 值是否改变都可用。")]),e._v(" "),i("li",[e._v('expression: 绑定值的字符串形式。例如v-my-directive="1+ 1”，expression的值是”1+I”.')]),e._v(" "),i("li",[e._v("arg： 指令的arguments, 例如 v-my-directive:foo, arg 的值是 foo")]),e._v(" "),i("li",[e._v("modifiers: 一个包含修饰符的对象 。 例如 v-my-directive.foo.bar，修饰符对象 modifiers的值是{ foo: true, bar: true }")])])]),e._v(" "),i("li",[e._v("vnode")]),e._v(" "),i("li",[e._v("oldVnode: 上一个虚拟节点仅在 update 和 componentUpdated 钩子中可用 。")])]),e._v(" "),i("h4",{attrs:{id:"clickoutsize指令的实现"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#clickoutsize指令的实现"}},[e._v("#")]),e._v(" clickoutsize指令的实现")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("Vue.directive('clickoutside', {\n  bind: function (el, binding) {\n    function documentHandler (e) {\n      if (binding.arg === 'esc' && e.keyCode === 27) {\n        \x3c!-- v-clickoutside的value 是一个函数，这里相当于执行绑定的函数 --\x3e\n        binding.value(e)\n      }\n      \x3c!-- 如果点击的元素是在绑定了v-clickoutside指令元素的内容，则忽略 --\x3e\n      if (el.contains(e.target)) {\n        return false\n      }\n      if (binding.expression) {\n        binding.value(e)\n      }\n    }\n    \x3c!-- 在元素添加一个元素用来存绑定的函数，是为了unbind的时候能够找到这个函数 --\x3e\n    el.__vueClickOutside__ = documentHandler\n    \n    \x3c!-- 在全局添加一些事件 --\x3e\n    window.addEventListener('keydown', documentHandler)\n    document.addEventListener('click', documentHandler)\n    document.addEventListener('keydown', documentHandler)\n  },\n  unbind: function (el) {\n    document.removeEventListener('click', el.__vueClickOutside__)\n    delete el.__vueClickOutside__\n  }\n})\n")])])])])}),[],!1,null,null,null);n.default=d.exports}}]);