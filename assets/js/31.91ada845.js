(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{377:function(t,a,e){"use strict";e.r(a);var n=e(42),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在使用dataTables的时候，有些列中会是一些包含内容的按钮或链接，不是单纯的文字内容。那么dataTables会将这些内容视为字符串，进行排序，有时候这不符合我们的期望。那么就需要自己能够灵活的指定某些列按照我们的意愿进行排序，幸运的是dataTable支持这样的插件拓展。")]),t._v(" "),e("ol",[e("li",[t._v("首先创建一个文件叫dataTables.sort.plungin.js，加入以下代码。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('jQuery.extend(jQuery.fn.dataTableExt.oSort, {\n    "html-percent-pre": function (a) {\n        var x = String(a).replace(/<[\\s\\S]*?>/g, "");    //去除html标记\n        x = x.replace(/&amp;nbsp;/ig, "");                   //去除空格\n        x = x.replace(/%/, "");                          //去除百分号\n        return parseFloat(x);\n    },\n\n    "html-percent-asc": function (a, b) {                //正序排序引用方法\n        return ((a < b) ? -1 : ((a > b) ? 1 : 0));\n    },\n\n    "html-percent-desc": function (a, b) {                //倒序排序引用方法\n        return ((a < b) ? 1 : ((a > b) ? -1 : 0));\n    }\n});\n')])])]),t._v(" "),e("p",[t._v("2.在前台页面中加入以下的 js 引用。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<script type="text/javascript" src="jquery.dataTables.js"><\/script>\n<script type="text/javascript" src="dataTables.numericComma.js"><\/script> \n<script type="text/javascript">\n            var oTable1 = $(\'#table_report\').dataTable({\n                "aoColumnDefs": [\n                    { "sType": "html-percent", "aTargets": [8] },    //指定列号使用自定义排序\n                ],\n                "bLengthChange": true, //开关，是否显示每页大小的下拉框\n                "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "所有"]],\n                \'iDisplayLength\': 25, //每页显示10条记录\n                \'bFilter\': true,  //是否使用内置的过滤功能\n                "bInfo": true, //开关，是否显示表格的一些信息\n                "bPaginate": true //开关，是否显示分页器\n            });\n        });\n<\/script>\n')])])])])}),[],!1,null,null,null);a.default=r.exports}}]);