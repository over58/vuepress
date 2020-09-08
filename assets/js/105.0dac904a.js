(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{451:function(n,t,e){"use strict";e.r(t);var s=e(42),i=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("说明： 有时候项目中会显示一些图表，而且width可能并不是固定的（可能100%），那么当浏览器窗口变化的时候，图表的大小应该跟随着变大或变小，称之为resize")]),this._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("/**\n * 用来处理每一个有图表的页面添加resize , 离开时移除resize函数\n */\nimport echarts from 'echarts'\nimport _ from 'lodash'\nexport default {\n  data () {\n    return {\n      doms: []\n    }\n  },\n  computed: {\n    chartResize () {\n      return _.throttle(() => {\n        return this.doms.forEach(dom => {\n          dom && dom.resize()\n        })\n      }, 400)\n    }\n  },\n  methods: {\n    initChart () {\n      this.doms.forEach(dom => {\n        dom && echarts.init(dom)\n      })\n    }\n  },\n  mounted () {\n    console.log('mixins mounted')\n    this.doms = [this.$refs['charts']]\n    this.initChart()\n    window.addEventListener('resize', this.chartResize)\n  },\n  destroyed () {\n    console.log('mixins destroyed')\n    window.removeEventListener('resize', this.chartResize)\n  }\n}\n\n")])])]),t("p",[this._v("ps: 使用的时候在需要图表的页面引入这个mixins")])])}),[],!1,null,null,null);t.default=i.exports}}]);