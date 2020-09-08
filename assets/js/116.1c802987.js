(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{459:function(a,e,t){"use strict";t.r(e);var r=t(42),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h4",{attrs:{id:"devtool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#devtool"}},[a._v("#")]),a._v(" devtool")]),a._v(" "),t("p",[a._v("如果是生产环境,压根不应该有devtool这个选项，这样build之后不会产生map文件，如果需要map文件用来方便查找问题，则设置devtool就行")]),a._v(" "),t("h4",{attrs:{id:"performance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[a._v("#")]),a._v(" performance")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("performance: {\n    hints: 'warning', // false | warning | error\n    maxEntrypointSize: 1048576, // 入口文件最大值为1M\n    maxAssetSize: 3145728, // 资源文件最大值为3M\n    assetFilter: function (assetFilename) {\n      // 只给出js文件的性能提示\n      return assetFilename.endsWith('.js')\n    }\n  }\n")])])]),t("h4",{attrs:{id:"resolve-alias用来设置快捷方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resolve-alias用来设置快捷方式"}},[a._v("#")]),a._v(" resolve.alias用来设置快捷方式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  resolve: {\n    alias: {\n      // 只能匹配到vue$结尾的字符串\n      // 比如：import Test1 from 'vue';\n      // 不能匹配 import Test1 from 'vue-router';\n      vue$: 'vue/dist/vue.esm.js'\n    },\n    \n    // 自动解析确定的扩展, ps: import File from '../path/to/file';\n\n    extensions: ['*', '.js', '.vue', '.json']\n  },\n")])])]),t("h4",{attrs:{id:"externals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#externals"}},[a._v("#")]),a._v(" externals")]),a._v(" "),t("p",[a._v("防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。")]),a._v(" "),t("p",[a._v("例如，从 CDN 引入 jQuery，而不是把它打包")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("externals: {\n    highcharts: {\n      root: 'Highcharts',\n      commonjs: 'highcharts',\n      commonjs2: 'highcharts',\n      amd: 'highcharts'\n    }\n  },\n")])])]),t("h4",{attrs:{id:"library-和-librarytarget"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#library-和-librarytarget"}},[a._v("#")]),a._v(" library 和 libraryTarget")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("output: {\n    filename: '[name].js',\n    // 以何种形式暴露library， 指的是暴露出来的名字\n    library: 'HighchartsVueXyc',\n    // 选项将导致 bundle 带有更完整的模块头部，以确保与各种模块系统的兼容性。\n    // 将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。\n    libraryTarget: 'umd',\n    path: path.resolve(__dirname, './dist')\n  },\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);