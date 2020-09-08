(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{395:function(e,s,n){"use strict";n.r(s);var a=n(42),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("这篇文章的由来是这样的：前两天遇到这样一个场景，接口返回了一个json对象，要求我进行格式化显示（显示出json对象的结构）。那么我就想了，一个对象要想显示出来，得转成string 类型的，于是我就使用了JSON.stringify(),但是转成字符串之后并没有缩进，显示出来的是一个长长的字符串。难道我还要自己人为的遍历对象,自己拼接一个带缩进的字符串么？太TM扯了！于是查看了stringify的官方文档，发现了很多有意思的东西，这个函数的作用远远不止是将json对象转成string那么简单，下面是我列举的stringify的几个小功能:")]),e._v(" "),n("ol",[n("li",[e._v("json格式化，带缩进")]),e._v(" "),n("li",[e._v("过滤掉无效的字段")]),e._v(" "),n("li",[e._v("对符合某种条件的字段做操作")])]),e._v(" "),n("p",[e._v("原始数据")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("person = {\n    sex: 'man',\n    name: 'Tom',\n    telphones: [\n        \"234123423\",\n        \"2345234523\"\n    ]\n}\n")])])]),n("p",[e._v("一、原始情况，直接显示json字符串")]),e._v(" "),n("p",[e._v("code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("JOSN.stringify(person)\n")])])]),n("p",[e._v("运行结果：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{"sex":"man","name":"Tom","age":22,"telphones":["2341234123","3452345"]}\n')])])]),n("p",[e._v("二、将一个json对象格式化显示出来")]),e._v(" "),n("p",[e._v("code:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("JSON.stringify(person, null, 2)\n")])])]),n("p",[e._v("运行结果：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n    sex: 'man',\n    name: 'Tom',\n    telphones: [\n        \"234123423\",\n        \"2345234523\"\n    ]   \n}\n\n")])])]),n("p",[e._v("三、不显示某些字段（哪些字段不需要显示就返回undefined）")]),e._v(" "),n("p",[e._v("code")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("JOSN.stringify(person, function(k, v){\n    if (k === 'telphones'){\n        return undefined\n    }\n    return v\n}, 2)\n")])])]),n("p",[e._v("运行结果：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n    sex: 'man',\n    name: 'Tom'\n}\n\n")])])]),n("p",[e._v("四、只显示某些字段")]),e._v(" "),n("p",[e._v("code")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("JOSN.stringify(person, ['sex'], 2)\n")])])]),n("p",[e._v("运行结果：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n    sex: 'man'\n}\n\n")])])]),n("p",[e._v("更多详情\nhttps://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify")])])}),[],!1,null,null,null);s.default=t.exports}}]);