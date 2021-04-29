(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{385:function(e,n,s){"use strict";s.r(n);var a=s(42),t=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("模块化的必要性：\n为了提高代码的开发效率，方便代码的维护，重构。")]),e._v(" "),s("p",[e._v("模块化与组件化的区别：\n模块可以理解为分解的页面逻辑，比如一个网站的登录，用户管理等；\n组件则是一个具体的功能。\n具体来说一个下拉框是一个组件，一个登录功能一个模块。")]),e._v(" "),s("p",[e._v("目前常见的模块化规范（排名不分先后）：")]),e._v(" "),s("ul",[s("li",[e._v("AMD")]),e._v(" "),s("li",[e._v("CMD")]),e._v(" "),s("li",[e._v("CommonJS")]),e._v(" "),s("li",[e._v("ES6")])]),e._v(" "),s("h3",{attrs:{id:"_1-amd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-amd"}},[e._v("#")]),e._v(" 1. AMD")]),e._v(" "),s("p",[e._v("AMD与CMD类似，不同的是AMD推崇依赖前置，--requireJS 推广过程中出现的规范。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('/** main.js中引入1.js及2.js **/\n// 执行基本操作\ndefine(["1.js","2.js"],function($,_){\n  // some code here\n});\n/** 如果1.js中又引入了3.js，那就会先广度优先，然后深度遍历。   \n请求1.js和2.js然后在1.js中进行3.js的请求，3.js返回结果后查看2.js是否已经返回，   \n如果已经返回则合并结果后返回给main.js\n**/\n')])])]),s("h3",{attrs:{id:"_2-cmd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-cmd"}},[e._v("#")]),e._v(" 2. CMD")]),e._v(" "),s("p",[e._v("CMD推崇就近依赖。   --sea.js推广过程中出现的规范。\n但是因为在AMD&CMD都是在浏览器端使用，采用的是异步加载，其实CMD还是需要在一开始就请求需要的，只是写法上更方便了。（采用的是正则匹配来获得js文件名，所以注释掉的仍然会请求，并且只可以书写字符串，不可以使用表达式）")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/** AMD写法 **/\ndefine([\"1\", \"2\"], function(1, 2) { \n     // 依赖前置\n  function foo(){\n    lib.log('hello world!');\n  }\n\n  return {\n    foo: foo\n  };\n});\n\n/** CMD写法 **/\ndefine(function(require, exports, module) {\n    var test = require('./1'); //就近依赖\n    test.sayHi();\n});\n")])])]),s("h3",{attrs:{id:"_3-commonjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-commonjs"}},[e._v("#")]),e._v(" 3. CommonJS")]),e._v(" "),s("p",[e._v("大前端使用的Node即时CommonJS的实例。\n与AMD&CMD的不同之处在于CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。\nrequire参数规则:")]),e._v(" "),s("p",[e._v("3.1. 如果参数字符串以“/”开头，则表示加载的是一个位于绝对路径的模块文件。"),s("br"),e._v("\n比如，require('/home/marco/foo.js')将加载/home/marco/foo.js。"),s("br"),e._v("\n3.2. 如果参数字符串以“./”开头，则表示加载的是一个位于相对路径（跟当前执行脚本的位置相比）的模块文件。"),s("br"),e._v("\n比如，require('./circle')将加载当前脚本同一目录的circle.js。"),s("br"),e._v("\n3.3. 如果参数字符串不以“./“或”/“开头，则表示加载的是一个默认提供的核心模块（位于Node的系统安装目录中），"),s("br"),e._v("\n或者一个位于各级node_modules目录的已安装模块（全局安装或局部安装）。"),s("br"),e._v("\n3.4. 如果参数字符串不以“./“或”/“开头，而且是一个路径，比如require('example-module/path/to/file')，"),s("br"),e._v("\n则将先找到example-module的位置，然后再以它为参数，找到后续路径。"),s("br"),e._v("\n3.5. 如果指定的模块文件没有发现，Node会尝试为文件名添加.js、.json、.node后，再去搜索。"),s("br"),e._v("\n.js件会以文本格式的JavaScript脚本文件解析，.json文件会以JSON格式的文本文件解析，"),s("br"),e._v("\n.node文件会以编译后的二进制文件解析。"),s("br"),e._v("\n3.6. 如果想得到require命令加载的确切文件名，使用require.resolve()方法。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const webpack = require('webpack');//引入\nconst sayHi = function (){\n    console.log('haha');\n}\nmodule.exports = {\n    sayHi:sayHi\n}//导出\n")])])]),s("h3",{attrs:{id:"_4-es6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-es6"}},[e._v("#")]),e._v(" 4. ES6")]),e._v(" "),s("p",[e._v("相对于以上的AMD&CMD是用于浏览器端，CommonJS用于服务器端。ES6的模块化非常可喜可贺的是浏览器和服务器通用的模块解决方案。\n那它是怎么做到的呢？\n区别与以上三者需要在 进行时加载，ES6尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。\n使用：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ES6使用import进行引入，export default(比export更友好)进行导出。\nimport { lastName as surname } from './profile.js';\nfunction foo() {\n  console.log('foo');\n}\n\nexport default foo;\n")])])]),s("p",[e._v("作者：littleStar\n链接：https://juejin.im/post/5cc5909d518825253f4a5a68\n来源：掘金\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")])])}),[],!1,null,null,null);n.default=t.exports}}]);