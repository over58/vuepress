(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{456:function(e,s,a){"use strict";a.r(s);var t=a(42),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"主要涉及的东西"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要涉及的东西"}},[e._v("#")]),e._v(" 主要涉及的东西")]),e._v(" "),a("ul",[a("li",[e._v("resolve.modules")]),e._v(" "),a("li",[e._v("resolve.mainFields")]),e._v(" "),a("li",[e._v("resolve.mainFiles")]),e._v(" "),a("li",[e._v("resolve.extensions")]),e._v(" "),a("li",[e._v("resolve.alias")])]),e._v(" "),a("h3",{attrs:{id:"resolve-modules指定寻找模块时的目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-modules指定寻找模块时的目录"}},[e._v("#")]),e._v(" resolve.modules指定寻找模块时的目录")]),e._v(" "),a("p",[e._v("引入模块时分为绝对路径和相对路径\n但绝对路径和相对路径有些区别")]),e._v(" "),a("ol",[a("li",[e._v("绝对路径：直接在指定的目录中搜索")]),e._v(" "),a("li",[e._v("相对路径：通过查看当前目录以及祖先路径（即 ./node_modules, ../node_modules 等等），相对路径将类似于 Node 查找 'node_modules' 的方式进行查找。")])]),e._v(" "),a("p",[e._v("实行的是"),a("strong",[e._v("广度优先遍历")])]),e._v(" "),a("p",[e._v("假设有如下配置：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{\n    // some other configs\n    resolveLoader: {\n      modules: ['loaders1', 'loaders2']\n    }\n    // some other configs\n}\n")])])]),a("p",[e._v("如果当前进程目录是 /a/b/c ，现在要查找 babel-loader ，就会按照如下顺序查找：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/a/b/c/loaders1/babel-loader/...\n/a/b/c/loaders2/babel-loader/...\n\n/a/b/loaders1/babel-loader/...\n/a/b/loaders2/babel-loader/...\n\n/a/loaders1/babel-loader/...\n/a/loaders2/babel-loader/...\n\n/loaders1/babel-loader/...\n/loaders2/babel-loader/...\n")])])]),e._v(" "),a("h3",{attrs:{id:"具体如何解析寻找模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体如何解析寻找模块"}},[e._v("#")]),e._v(" 具体如何解析寻找模块")]),e._v(" "),a("p",[e._v("这个过程有一个很关键的模块 enhanced-resolve 就是处理依赖模块路径的解析的，这个模块可以说是 Node.js 那一套模块路径解析的增强版本，有很多可以自定义的解析配置。\n"),a("strong",[e._v("模块解析规则")])]),e._v(" "),a("h4",{attrs:{id:"解析绝对路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析绝对路径"}},[e._v("#")]),e._v(" 解析绝对路径")]),e._v(" "),a("p",[e._v("由于我们已经取得文件的绝对路径，因此不需要进一步再做解析。")]),e._v(" "),a("h4",{attrs:{id:"解析相对路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析相对路径"}},[e._v("#")]),e._v(" 解析相对路径")]),e._v(" "),a("p",[e._v("相对路径+上下文路径（context  path） => 绝对路径")]),e._v(" "),a("h4",{attrs:{id:"解析模块名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析模块名"}},[e._v("#")]),e._v(" 解析模块名")]),e._v(" "),a("p",[e._v("模块将"),a("strong",[e._v("resolve.modules")]),e._v("指定的所有目录内搜索，也可以通过添加"),a("strong",[e._v("resolve.alias")]),e._v(" 来创建一个别名。一旦根据上述规则解析路径后，解析器(resolver)将检查路径是否指向文件或目录")]),e._v(" "),a("h5",{attrs:{id:"如果路径指向一个文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如果路径指向一个文件"}},[e._v("#")]),e._v(" 如果路径指向一个文件：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" 1.  如果路径具有文件扩展名，则被直接将文件打包。\n 2.  否则，将使用 resolve.extensions 选项作为文件扩展名来解析，此选项告诉解析器在解析中能够接受哪些扩展名（例如 .js, .jsx）。\n")])])]),a("h5",{attrs:{id:"指向一个目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指向一个目录"}},[e._v("#")]),e._v(" 指向一个目录")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v(" 1.  文件夹包含package.json,  则按照顺序查找 resolve.mainFields 配置选项中指定的字段。并且 package.json 中的第一个这样的字段确定文件路径。\n 2. 如果 package.json 文件不存在或者 package.json 文件中的 main 字段没有返回一个有效路径，则按照顺序查找 resolve.mainFiles 配置选项中指定的文件名，看是否能在 import/require 目录下匹配到一个存在的文件名\n 3.  文件扩展名通过 resolve.extensions 选项采用类似的方法进行解析\n")])])]),a("h3",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[e._v("#")]),e._v(" demo")]),e._v(" "),a("h4",{attrs:{id:"resolve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve"}},[e._v("#")]),e._v(" resolve")]),e._v(" "),a("p",[e._v("在 webpack 配置中，和模块路径解析相关的配置都在 resolve 字段下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n  resolve: {\n    // ...\n  }\n}\n")])])]),a("h4",{attrs:{id:"resolve-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-alias"}},[e._v("#")]),e._v(" resolve.alias")]),e._v(" "),a("p",[e._v("假设我们有个 utils 模块极其常用，经常编写相对路径很麻烦，希望可以直接 import 'utils' 来引用，那么我们可以配置某个模块的别名，如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("alias: {\n utils: path.resolve(__dirname, 'src/utils')\n // 这里使用 path.resolve 和 __dirname 来获取绝对路径 \n}\n")])])]),a("p",[e._v("上述的配置是模糊匹配，意味着只要模块路径中携带了 utils 就可以被替换掉，如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import 'utils/query.js' \n// 等同于 import '[项目绝对路径]/src/utils/query.js'\n \n如果需要进行精确匹配可以使用：\nalias: { \nutils$: path.resolve(__dirname, 'src/utils')\n // 只会匹配 import 'utils' \n}\n")])])]),a("h4",{attrs:{id:"resolve-extensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-extensions"}},[e._v("#")]),e._v(" resolve.extensions")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx'],\n// 这里的顺序代表匹配后缀的优先级，例如对于 index.js 和 index.jsx，会优先选择 index.js\n")])])]),a("p",[e._v("看到数组中配置的字符串大概就可以猜到，这个配置的作用是和文件后缀名有关的。是的，这个配置可以定义在进行模块路径解析时，webpack 会尝试帮你补全那些后缀名来进行查找，例如有了上述的配置，当你在 src/utils/ 目录下有一个 common.js 文件时，就可以这样来引用.\nimport * as common from './src/utils/common'\nwebpack 会尝试给你依赖的路径添加上 extensions 字段所配置的后缀，然后进行依赖路径查找，所以可以命中 src/utils/common.js 文件。")]),e._v(" "),a("h4",{attrs:{id:"resolve-mainfiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve-mainfiles"}},[e._v("#")]),e._v(" resolve.mainFiles")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("默认：\nmainFiles: ['index']\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);