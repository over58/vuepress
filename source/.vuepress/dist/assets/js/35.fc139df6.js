(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{433:function(e,n,s){"use strict";s.r(n);var o=s(42),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"delete操作有以下几个特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete操作有以下几个特点"}},[e._v("#")]),e._v(" delete操作有以下几个特点:")]),e._v(" "),s("ol",[s("li",[e._v("删除自有属性，不影响原型上的，如果自己没有这个属性，仍然返回true")]),e._v(" "),s("li",[e._v("属性描述符configable: false的属性是不能被删除的， 返回false")]),e._v(" "),s("li",[e._v("删除是将key-value都删除了")])]),e._v(" "),s("h3",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" demo")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("function Person(){\n}\nPerson.prototype.name = \"Nicholas\";\nPerson.prototype.age = 29;\nPerson.prototype.job = \"Software Engineer\";\nPerson.prototype.sayName = function(){\n  console.log(this.name)\n}\n\nvar person1 = new Person();\nconsole.log(person1)\nconsole.log('person1是否自己存在属性name: ', person1.hasOwnProperty(\"name\"));  //false\nperson1.name = \"Greg\";\nconsole.log('person1的name进行重新赋值以后的person1（对象的属性赋值）', person1)\n\ndelete person1.name;\nconsole.log('删除person1的name属性',person1)\nconsole.log('获取person1的name属性（prototype上的）', person1.name)\n")])])]),s("h3",{attrs:{id:"result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[e._v("#")]),e._v(" result")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Person {}\nperson1是否自己存在属性name:  false\nperson1的name进行重新赋值以后的person1（对象的属性赋值） Person { name: 'Greg' }\n删除person1的name属性 Person {}\n获取person1的name属性（prototype上的） Nicholas\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);