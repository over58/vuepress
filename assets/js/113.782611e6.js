(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{461:function(a,e,n){"use strict";n.r(e);var t=n(42),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("p",[a._v("1.添加插件")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("cnpm install webpack-bundle-analyzer -save\n")])])]),n("ol",[n("li",[a._v("vue.config.js文件")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(' chainWebpack: config => {\n    // 运行npm run analyze 显示性能分析\n    if (process.env.analyze && process.NODE_ENV === production) {\n      config\n        .plugin("webpack-bundle-analyzer")\n        .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);\n    }\n  },\n')])])]),n("p",[a._v("3.scripts中添加")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('  "analyz": "NODE_ENV=production analyze=true npm run build"\n')])])]),n("ol",{attrs:{start:"4"}},[n("li",[a._v("运行")])]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("npm run analyze\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);