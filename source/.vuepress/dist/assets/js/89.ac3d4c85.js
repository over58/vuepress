(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{385:function(n,t,e){"use strict";e.r(t);var s=e(42),a=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<template>\n  <div>\n    <slot name=\"prepend\"></slot><span :class=\"classes\" ref=\"number\" :id=\"eleId\"></span><slot name=\"append\"></slot>\n  </div>\n</template>\n\n<script>\nimport CountUp from 'countup'\nexport default {\n  name: 'CountTo',\n  props: {\n    satrtVal: {\n      type: Number,\n      default: 0\n    },\n    endVal: {\n      type: Number,\n      required: true\n    },\n    /**\n     *\n     * @description 小数点的精度\n     */\n    decimals: {\n      type: Number,\n      default: 0\n    },\n    /**\n     *\n     * @description 动画时间，单位： 秒\n     */\n    duration: {\n      type: Number,\n      default: 1\n    },\n    separator: {\n      type: String,\n      default: ','\n    },\n    /**\n     *\n     * @description 是否使用分组\n     */\n    useGrouping: {\n      type: Boolean,\n      default: true\n    },\n    /**\n     *\n     * @description 动画开始延迟，单位：毫秒\n     */\n    delay: {\n      type: Number,\n      default: 0\n    },\n    className: {\n      type: String,\n      default: ''\n    }\n  },\n  data () {\n    return {\n      counter: {}\n    }\n  },\n  computed: {\n    eleId () {\n      return `count-to-${this._uid}`\n    },\n    classes () {\n      return [\n        'count-to-number',\n        this.className\n      ]\n    }\n  },\n  watch: {\n    endVal (newVal) {\n      this.counter.update(newVal)\n      this.emitEndEvent()\n    }\n  },\n  methods: {\n    getCount () {\n      return this.$refs.number.innerText\n    },\n    /**\n     *\n     * @description 动画结束时发送事件\n     */\n    emitEndEvent () {\n      setTimeout(() => {\n        this.$nextTick(() => {\n          this.$emit('on-animation-end')\n        })\n      }, this.duration * 1000 + 5)\n    }\n  },\n  mounted () {\n    this.$nextTick(() => {\n      this.counter = new CountUp(this.eleId, this.satrtVal, this.endVal, this.decimals, this.duration, {\n        useEasing: true,\n        useGrouping: this.useGrouping,\n        separator: this.separator,\n        decimal: '.'\n      })\n      setTimeout(() => {\n        this.counter.start()\n        this.emitEndEvent()\n      }, this.delay)\n    })\n  }\n}\n<\/script>\n\n<style lang=\"less\" scoped>\n.count-to-number{\n  color: #000;\n}\n</style>\n\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);