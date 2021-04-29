(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{352:function(n,t,e){"use strict";e.r(t);var a=e(42),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h3",{attrs:{id:"描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[n._v("#")]),n._v(" 描述")]),n._v(" "),e("p",[n._v("有一个绘制雷达图的需求，想着使用比较校的库，决定放弃echarts、highcharts这样体积比较有点大的库，采用了G2,发现使用过程中还依赖DataSet包，还是有点大么，决定从G2迁到F2上面")]),n._v(" "),e("h3",{attrs:{id:"坑一-明明照着官网写的-图就是画不出来"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#坑一-明明照着官网写的-图就是画不出来"}},[n._v("#")]),n._v(" 坑一: 明明照着官网写的，图就是画不出来")]),n._v(" "),e("p",[n._v("容器dom元素必须是"),e("strong",[n._v("canvas")]),n._v(", 用id来指明dom")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const chart = new F2.Chart({\n  id: 'box',  \n})\n")])])]),e("h3",{attrs:{id:"图的区域的颜色总是比自己设置的浅了很多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图的区域的颜色总是比自己设置的浅了很多"}},[n._v("#")]),n._v(" 图的区域的颜色总是比自己设置的浅了很多")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("  F2.Global.shape.area.fillOpacity = 0.6\n")])])]),e("h3",{attrs:{id:"legend要自定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#legend要自定义"}},[n._v("#")]),n._v(" legend要自定义")]),n._v(" "),e("p",[n._v("itemFormatter 函数返回空字符串，否则会有奇妙的事情发生")]),n._v(" "),e("h3",{attrs:{id:"code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[n._v("#")]),n._v(" code")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<template>\n  <canvas\n    id=\"box\"\n    ref=\"container\"\n    class=\"box\"\n  />\n</template>\n\n<script>\nimport improveImage from '../images/xxxx.png'\nlet vm = null\nexport default {\n  props: {\n    //原始数据\n    origin: {\n      type: Array,\n      required: true\n    },\n    height: {\n      type: Number,\n      default: 350\n    },\n    width: {\n      type: Number,\n      default: 750\n    },\n    pointColor: {\n      type: String,\n      default: 'red'\n    }\n  },\n  data () {\n    return {\n      chart: null\n    }\n  },\n  watch: {\n    origin () {\n      this.refresh()\n    }\n  },\n  created () {\n    vm = this\n  },\n  mounted () {\n    this.refresh()\n  },\n  methods: {\n    refresh () {\n      if (this.chart) {\n        this.chart.destroy()\n        this.chart = null\n      }\n      this.draw()\n    },\n    async draw () {\n      let data = []\n      let origin = this.origin\n      origin.forEach(x => {\n        let standard = {\n          item: x.item,\n          user: 'standard',\n          score: x.standard\n        }\n        if (x.extraHtml) {\n          standard['extraHtml'] = x.extraHtml\n        }\n        let my = {\n          item: x.item,\n          user: 'my',\n          score: x.my\n        }\n        data.push(standard, my)\n      })\n\n      const F2 = await import(/* webpackChunkName: \"g2\" */'@antv/f2')\n\n      F2.Global.shape.area.fillOpacity = 0.6\n\n      const chart = new F2.Chart({\n        id: 'box',\n        forceFit: true,\n        padding: [0, 0, 30, 0],\n        pixelRatio: window.devicePixelRatio,\n        height: vm.height,\n        width: vm.width\n      })\n\n      chart.source(data, {\n        score: {\n          min: 0,\n          max: 100\n        }\n      })\n\n      // 指定坐标系\n      chart.coord('polar', {\n        radius: 0.6\n      })\n\n      chart.axis('item', {\n        field: null,\n        line: null,\n        tickLine: null,\n        grid: {\n          lineStyle: {\n            lineDash: null\n          },\n          hideFirstLine: true\n        },\n        label: (text, index) => {\n          const score = data[index * 2 + 1].score\n          return {\n            text: `${text}\\n(${score}分)`\n          }\n        }\n      })\n\n      chart.axis('score', {\n        line: null,\n        tickLine: null,\n        grid: {\n          type: 'polygon',\n          lineStyle: {\n            lineDash: null\n          }\n        },\n        label: null\n      })\n\n      chart.legend('user', {\n        clickable: false,\n        hoverable: false,\n        custom: true,\n        joinString: '',\n        items: [\n          {\n            value: '我的分数',\n            marker: { symbol: 'square', fill: '#FBDA5F', radius: 6 }\n          },\n          {\n            value: '用户平均水平',\n            marker: { symbol: 'square', fill: '#BBF4dF', radius: 6 }\n          }\n        ],\n        offsetY: -30,\n        position: 'bottom',\n        align: 'center',\n        itemFormatter: function (val, a) {\n          return ''\n        }\n      })\n\n      chart\n        .area()\n        .position('item*score')\n        .color('user', function (val) {\n          if (val === 'standard') {\n            return '#BBF4FF'\n          } else {\n            return '#FBDA7F'\n          }\n        })\n\n      chart\n        .line()\n        .position('item*score')\n        .color('user', function (val) {\n          if (val === 'standard') {\n            return '#BBF4FF'\n          } else {\n            return '#FBDA7F'\n          }\n        })\n        .size(1)\n\n      // 禁止显示提示框\n      chart.tooltip(false)\n      chart.render()\n\n      this.chart = chart\n    }\n  }\n}\n<\/script>\n\n<style lang=\"less\" scoped>\n.box {\n  font-size: 0.6rem;\n}\n</style>\n\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("chart.legend('user', {\n   clickable: false,\n   hoverable: false,\n   custom: true,\n   joinString: '',\n   items: [\n     {\n        value: '我的宝贝',\n        marker: { symbol: 'square', fill: '#FBDA7F', radius: 6 }\n      },\n     {\n        value: '同龄VIP用户',\n        marker: { symbol: 'square', fill: '#BBF4FF', radius: 6 }\n     }\n    ],\n    offsetY: -30,\n    position: 'bottom',\n    align: 'center',\n    itemFormatter: function (val, a) {\n       return ''\n    }\n  })\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);