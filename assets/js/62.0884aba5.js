(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{409:function(a,e,t){"use strict";t.r(e);var s=t(42),n=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h4",{attrs:{id:"_1-类型转换规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-类型转换规则"}},[a._v("#")]),a._v(" 1. 类型转换规则")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/leixingzhuanhuan.png",alt:"1aa4dd552dadf8f2b6b10384bb7dd6fc.png"}})]),a._v(" "),t("h4",{attrs:{id:"_2-if语句和逻辑语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-if语句和逻辑语句"}},[a._v("#")]),a._v(" 2. If语句和逻辑语句")]),a._v(" "),t("p",[a._v("在if语句和逻辑语句中，如果只有单个变量，会先将变量转换为Boolean值，只有下面几种情况会转换成false，其余被转换成true：")]),a._v(" "),t("ul",[t("li",[a._v("null")]),a._v(" "),t("li",[a._v("undefined")]),a._v(" "),t("li",[a._v("''")]),a._v(" "),t("li",[a._v("NaN")]),a._v(" "),t("li",[a._v("0")]),a._v(" "),t("li",[a._v("false")])]),a._v(" "),t("h4",{attrs:{id:"_3-各种运数学算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-各种运数学算符"}},[a._v("#")]),a._v(" 3.各种运数学算符")]),a._v(" "),t("p",[a._v("我们在对各种非Number类型运用数学运算符(- * /)时，会先将非Number类型转换为Number类型;")]),a._v(" "),t("ul",[t("li",[a._v("1 - true // 0")]),a._v(" "),t("li",[a._v("1 - null // 1")]),a._v(" "),t("li",[a._v("1 * undefined // NaN")]),a._v(" "),t("li",[a._v("2 * ['5'] //10")])]),a._v(" "),t("blockquote",[t("p",[a._v("注意+是个例外，执行+操作符时：\n1.当一侧为String类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。\n2.当一侧为Number类型，另一侧为原始类型，则将原始类型转换为Number类型。\n3.当一侧为Number类型，另一侧为引用类型，将引用类型和Number类型转换成字符串后拼接。")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("123 + '123' // 123123   （规则1）\n123 + null  // 123    （规则2）\n123 + true // 124    （规则2）\n123 + {}  // 123[object Object]    （规则3）\n")])])]),t("h4",{attrs:{id:"_4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4"}},[a._v("#")]),a._v(" 4. ==")]),a._v(" "),t("p",[a._v("使用==时，若两侧类型相同，则比较结果和===相同，否则会发生隐式转换，使用==时发生的转换可以分为几种不同的情况（只考虑两侧类型不同）")]),a._v(" "),t("h5",{attrs:{id:"_4-1-nan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-nan"}},[a._v("#")]),a._v(" 4-1. NaN")]),a._v(" "),t("p",[a._v("NaN和其他任何类型比较永远返回false(包括和他自己)。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("NaN == NaN // false\n")])])]),t("h5",{attrs:{id:"_4-2-boolean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-boolean"}},[a._v("#")]),a._v(" 4-2. Boolean")]),a._v(" "),t("p",[a._v("Boolean和其他任何类型比较，Boolean首先被转换为Number类型。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("true == 1  // true \ntrue == '2'  // false\ntrue == ['1']  // true\ntrue == ['2']  // false\n")])])]),t("blockquote",[t("p",[a._v("这里注意一个可能会弄混的点：undefined、null和Boolean比较，虽然undefined、null和false都很容易被想象成假值，但是他们比较结果是false，原因是false首先被转换成0")])]),a._v(" "),t("h5",{attrs:{id:"_4-3-string和number"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-string和number"}},[a._v("#")]),a._v(" 4-3.String和Number")]),a._v(" "),t("p",[a._v("String和Number比较，先将String转换为Number类型。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("123 == '123' // true\n'' == 0 // true\n")])])]),t("h5",{attrs:{id:"_4-4-null和undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-null和undefined"}},[a._v("#")]),a._v(" 4-4 null和undefined")]),a._v(" "),t("p",[a._v("null == undefined比较结果是true，除此之外，null、undefined和其他任何结果的比较值都为false。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("null == undefined // true\nnull == ''       // false\nnull == 0        // false\nnull == false    // false\nundefined == ''  // false\nundefined == 0   // false\nundefined == false // false\n")])])]),t("h5",{attrs:{id:"_4-5-原始类型和引用类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-原始类型和引用类型"}},[a._v("#")]),a._v(" 4-5 原始类型和引用类型")]),a._v(" "),t("p",[a._v("当原始类型和引用类型做比较时，对象类型会依照ToPrimitive规则转换为原始类型:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("'[object Object]' == {} // true\n'1,2,3' == [1, 2, 3]   // true\n")])])]),t("p",[a._v("来看看下面这个比较：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[] == ![] // true\n")])])]),t("p",[a._v("!的优先级高于==，![]首先会被转换为false，然后根据上面第三点，false转换成Number类型0，左侧[]转换为0，两侧比较相等。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("[null] == false     // true\n[undefined] == false // true\n")])])]),t("p",[a._v("根据数组的ToPrimitive规则，数组元素为null或undefined时，该元素被当做空字符串处理，所以[null]、[undefined]都会被转换为0。")]),a._v(" "),t("blockquote",[t("p",[a._v("所以，说了这么多，推荐使用===来判断两个值是否相等...😭")])]),a._v(" "),t("h4",{attrs:{id:"有意思的面试题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#有意思的面试题"}},[a._v("#")]),a._v(" 有意思的面试题")]),a._v(" "),t("p",[a._v("一道经典的面试题，如何让：a == 1 && a == 2 && a == 3。\n根据上面的拆箱转换，以及==的隐式转换，我们可以轻松写出答案：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("var a = {\n   value:[3,2,1],\n   valueOf: function () {return this.value.pop(); },\n}\n\n或者\n\nvar a = {\n   value:[1,2,3],\n   valueOf: function () {return this.value.shift(); },\n}\n")])])]),t("blockquote",[t("p",[a._v("对象和数字比较==，对象会隐式转换为number, 调用valueOf函数")])])])}),[],!1,null,null,null);e.default=n.exports}}]);