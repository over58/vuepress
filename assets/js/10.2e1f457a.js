(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{356:function(n,t,e){"use strict";e.r(t);var a=e(42),s=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h3",{attrs:{id:"效果图如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#效果图如下"}},[n._v("#")]),n._v(" 效果图如下：")]),n._v(" "),e("p",[e("img",{attrs:{src:"/images/echarts%E7%BD%91%E7%BB%9C%E6%8B%93%E6%89%91%E5%9B%BE.png",alt:"echarts实现炫酷的网络拓扑图"}})]),n._v(" "),e("h3",{attrs:{id:"实现原理以及优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现原理以及优缺点"}},[n._v("#")]),n._v(" 实现原理以及优缺点")]),n._v(" "),e("p",[n._v("实现原理实际上是graph类型和lines类型结合画出来的，graph可以绘制的拓扑图,目前三种layout, 包括力导图(force)、环形布局(circular)、二维坐标系(none)。前两种基本上排版位置不怎么受自己控制，第三种的画，节点位置完全的受数据中的x/y位置控制，但是估计计算位置是个麻烦事儿，如果节点的数量很少或者说比较固定的话，采用这个非常不错。lines类型主要负责线条上添加动态的效果")]),n._v(" "),e("h3",{attrs:{id:"live-demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#live-demo"}},[n._v("#")]),n._v(" live demo")]),n._v(" "),e("p",[n._v("https://gallery.echartsjs.com/editor.html?c=xbETBRwXrm\n或者\nhttp://39.105.159.58:3000/#/graph")]),n._v(" "),e("h3",{attrs:{id:"注意点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[n._v("#")]),n._v(" 注意点")]),n._v(" "),e("p",[n._v("1.nodes数据的x/y值一定要指定，否则画不出来\n2.graph类型必须设置coordinateSystem: 'cartesian2d',指定定位系统采用二维坐标轴")]),n._v(" "),e("h3",{attrs:{id:"附上vue实现的代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附上vue实现的代码"}},[n._v("#")]),n._v(" 附上vue实现的代码")]),n._v(" "),e("p",[n._v("graph.vue")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("<template>\n  <div>\n    <div ref=\"chart\" style=\"height:800px;border:solid 1px red\"></div>\n  </div>\n</template>\n<script>\nimport echarts from 'echarts'\nimport graph from './data2'\nlet vm = null\nexport default {\n  components: {\n  },\n  data () {\n    return {\n      charts: {\n        nodes: graph.data.elements.nodes,\n        edges: graph.data.elements.edges,\n        linesData: []\n      },\n      nodePositionMap: new Map(),\n      chartInstance: null\n    }\n  },\n  computed: {\n  },\n  methods: {\n    initData () {\n      this.charts.nodes = this.charts.nodes.map(node => {\n        this.nodePositionMap.set(node.data.name, [node.position.x, node.position.y])\n        return {\n          name: node.data.name,\n          data: node.data,\n          value: [node.position.x, node.position.y],\n          // x: node.position.x,\n          // y: node.position.y,\n          symbolSize: 20 * node.data.size,\n          // alarm: node.alarm,\n          // symbol: 'image:///asset/get/s/' + node.img,\n          itemStyle: {\n            normal: {\n              color: '#12b5d0'\n            }\n          }\n        }\n      })\n\n      this.charts.linesData = []\n\n      this.charts.edges = this.charts.edges.map(edge => {\n        this.charts.linesData.push([\n          {\n            coord: this.nodePositionMap.get(edge.data.source)\n          },\n          {\n            coord: this.nodePositionMap.get(edge.data.target)\n          }\n        ])\n        return {\n          source: edge.data.source,\n          target: edge.data.target,\n          label: {\n            normal: {\n              show: true\n              // formatter: edge.nam\n            }\n          },\n          lineStyle: {\n            normal: {\n              color: edge.data.colour\n            }\n          }\n        }\n      })\n    },\n    init () {\n      this.initData()\n      let option = {\n        title: {\n          text: '网络拓扑图'\n        },\n        tooltip: {\n          trigger: 'item',\n          formatter: '{b}',\n          alwaysShowContent: true\n        },\n        backgroundColor: '#F5F5F5',\n        xAxis: {\n          min: 0,\n          max: 800,\n          show: false,\n          type: 'value'\n        },\n        yAxis: {\n          min: 0,\n          max: 300,\n          type: 'value',\n          show: false\n        },\n        series: [\n          {\n            type: 'graph',\n            layout: 'none',\n            id: 'a',\n            coordinateSystem: 'cartesian2d',\n            edgeSymbol: ['', 'arrow'],\n            // symbolSize: 50,\n            label: {\n              normal: {\n                show: true,\n                position: 'bottom'\n                // color: '#12b5d0'\n              }\n            },\n            lineStyle: {\n              normal: {\n                width: 2,\n                shadowColor: 'none'\n              }\n            },\n            xAxis: {\n              min: 0,\n              max: 12,\n              show: false,\n              type: 'value'\n            },\n            yAxis: {\n              min: 0,\n              max: 12,\n              show: false,\n              type: 'value'\n            },\n            // edgeSymbolSize: 8,\n            draggable: true,\n            nodes: this.charts.nodes,\n            edges: this.charts.edges,\n            z: 4,\n            itemStyle: {\n              normal: {\n                label: {\n                  show: true,\n                  formatter: function (item) {\n                    return item.data.name\n                  }\n                }\n              }\n            }\n          },\n          {\n            name: 'A',\n            type: 'lines',\n            coordinateSystem: 'cartesian2d',\n            z: 4,\n            effect: {\n              show: true,\n              trailLength: 0,\n              symbol: 'arrow',\n              color: '#12b5d0',\n              symbolSize: 8\n            },\n            lineStyle: {\n              normal: {\n                curveness: 0\n              }\n            },\n            data: this.charts.linesData\n          }\n        ]\n      }\n      this.chartInstance = echarts.init(this.$refs.chart)\n      this.chartInstance.setOption(option)\n    }\n  },\n  mounted () {\n    vm = this\n    this.$nextTick(() => {\n      this.init()\n    })\n    window.addEventListener('resize', () => {\n      vm.chartInstance && this.chartInstance.resize()\n    })\n  }\n}\n<\/script>\n<style scoped>\n</style>\n")])])]),e("h3",{attrs:{id:"想要看更详细的代码以及其他的栗子源码看这里"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#想要看更详细的代码以及其他的栗子源码看这里"}},[n._v("#")]),n._v(" 想要看更详细的代码以及其他的栗子源码看这里")]),n._v(" "),e("p",[n._v("https://github.com/xuyongchaos/vue-charts.git")])])}),[],!1,null,null,null);t.default=s.exports}}]);