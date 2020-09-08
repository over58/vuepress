(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{457:function(t,r,a){"use strict";a.r(r);var e=a(42),n=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[t._v("#")]),t._v(" entry")]),t._v(" "),a("h4",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" context")]),t._v(" "),a("p",[t._v("解析weboack.config.js的目录，默认为执行启动 Webpack 时所在的当前工作目录。")]),t._v(" "),a("h4",{attrs:{id:"chunk-名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk-名称"}},[t._v("#")]),t._v(" Chunk 名称")]),t._v(" "),a("p",[t._v("Webpack 会为每个生成的 Chunk 取一个名称，Chunk 的名称和 Entry 的配置有关：")]),t._v(" "),a("ul",[a("li",[t._v("如果 entry 是一个 string 或 array，就只会生成一个 Chunk，这时 Chunk 的名称是 main；")]),t._v(" "),a("li",[t._v("如果 entry 是一个 object，就可能会出现多个 Chunk，这时 Chunk 的名称是 object 键值对里键的名称")])]),t._v(" "),a("h4",{attrs:{id:"配置动态entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置动态entry"}},[t._v("#")]),t._v(" 配置动态Entry")]),t._v(" "),a("p",[t._v("假如项目里有多个页面需要为每个页面的入口配置一个entry，但这些页面数量可能会不断增长，这时entry的配置会受到其他因素的影响导致不能写成静态的值。解决办法就是把entry设置成一个函数去动态返回上面所说的配置：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//同步函数\nentry: () => {\n    return {\n        a: './pages/a',\n        b: './pages/b'\n    }\n}\n\n//异步函数\nentry: () => {\n    return new Promise((resolve) => {\n        resolve({\n            a: './pages/a',\n            b: './pages/b'\n        })\n    })\n}\n当结合 output.library 选项时：如果传入数组，则只导出最后一项。\n")])])]),a("h3",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" output")]),t._v(" "),a("ul",[a("li",[t._v("filename")]),t._v(" "),a("li",[t._v("path 配置输出后文件存在本地的目录")]),t._v(" "),a("li",[t._v("publicPath 发布到线上的url前缀")])]),t._v(" "),a("h4",{attrs:{id:"library导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#library导出"}},[t._v("#")]),t._v(" library导出")]),t._v(" "),a("ul",[a("li",[t._v("libraryTaraget  指明库(library)被打包后，以什么形式导出，赋值到哪个"),a("strong",[t._v("位置")])]),t._v(" "),a("li",[t._v("library 指明导出后库的"),a("strong",[t._v("名字")]),t._v("，或者说key")]),t._v(" "),a("li",[t._v("libraryExport 指明导出哪一个模块\n"),a("ol",[a("li",[t._v("undefined 导出整个模块")]),t._v(" "),a("li",[t._v("default "),a("strong",[t._v("var MyDefaultModule = "),a("em",[t._v("entry_return")]),t._v(".default;")])]),t._v(" "),a("li",[t._v("['MyModule', 'MySubModule']  "),a("strong",[t._v("var MySubModule = "),a("em",[t._v("entry_return")]),t._v(".MyModule.MySubModule;")]),t._v("\ndemo")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("当 libraryTarget: 'window' ；   library: 'MyLibrary' 时\n\nwindow['MyLibrary'] = _entry_return_;\nwindow.MyLibrary.doSomething();\n")])])])])}),[],!1,null,null,null);r.default=n.exports}}]);