(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{438:function(n,e,o){"use strict";o.r(e);var t=o(42),a=Object(t.a)({},(function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("p",[n._v("1.安装babel-plugin-import插件")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("cnpm install babel-plugin-import --save-dev\n")])])]),o("ol",{attrs:{start:"2"}},[o("li",[n._v("在文件.babelrc中添加配置")])]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v('"plugins": [\n    "transform-vue-jsx", "transform-runtime",\n    ["import", {\n      "libraryName": "iview",\n      "libraryDirectory": "src/components"\n    }]\n  ]\n]\n')])])]),o("ol",{attrs:{start:"3"}},[o("li",[n._v("在plugins文件夹中新建一个iview.js文件")])]),n._v(" "),o("div",{staticClass:"language-import Vue from 'vue' extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("import 'iview/dist/styles/iview.css'\nimport {\n  Row,\n  Col,\n  Switch,\n  Form,\n  FormItem,\n  Select,\n  Input,\n  InputNumber,\n  Button,\n  Icon,\n  Card,\n  Modal,\n  Menu,\n  MenuItem,\n  Submenu,\n  Message,\n  Notice,\n  Layout,\n  Sider,\n  Content,\n  Tag,\n  Table,\n  Poptip,\n  Page,\n  Timeline,\n  TimelineItem,\n  Tabs,\n  TabPane,\n  Tooltip,\n  Alert,\n  Checkbox,\n  CheckboxGroup,\n  RadioGroup,\n  Radio\n} from 'iview'\n\nVue.component('Row', Row)\nVue.component('Col', Col)\nVue.component('iSwitch', Switch)\nVue.component('Form', Form)\nVue.component('FormItem', FormItem)\nVue.component('Select', Select)\nVue.component('Input', Input)\nVue.component('InputNumber', InputNumber)\nVue.component('Button', Button)\nVue.component('Icon', Icon)\nVue.component('Card', Card)\nVue.component('Modal', Modal)\nVue.component('Card', Card)\nVue.component('Menu', Menu)\nVue.component('Submenu', Submenu)\nVue.component('MenuItem', MenuItem)\nVue.component('Layout', Layout)\nVue.component('Sider', Sider)\nVue.component('Content', Content)\nVue.component('Tag', Tag)\nVue.component('Table', Table)\nVue.component('Poptip', Poptip)\nVue.component('Page', Page)\nVue.component('Timeline', Timeline)\nVue.component('TimelineItem', TimelineItem)\nVue.component('Tabs', Tabs)\nVue.component('TabPane', TabPane)\nVue.component('Tooltip', Tooltip)\nVue.component('Alert', Alert)\nVue.component('Checkbox', Checkbox)\nVue.component('CheckboxGroup', CheckboxGroup)\nVue.component('RadioGroup', RadioGroup)\nVue.component('Radio', Radio)\n\nVue.component('Message', Message)\nVue.component('Notice', Notice)\n")])])]),o("p",[n._v("4.在main.js文件中")]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("// import iView from 'iview'\n// Vue.use(iView)\nimport '@/plugins/iview\n")])])]),o("ol",{attrs:{start:"5"}},[o("li",[n._v("到这里基本完成，但是还有一些iview的全局API是需要额外处理的，这里就不多说了")])])])}),[],!1,null,null,null);e.default=a.exports}}]);