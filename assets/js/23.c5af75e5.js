(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{369:function(t,r,a){"use strict";a.r(r);var e=a(42),E=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"reflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflow"}},[t._v("#")]),t._v(" reflow")]),t._v(" "),a("p",[t._v("重排(也称回流)，指的是浏览器为了重新计算文档中元素的位置和几何结构而重新渲染部分或全部文档的过程。也就是说通过JavaScript或者CSS修改元素的几何位置属性，例如改变元素的宽度、高度等就会引发reflow。")]),t._v(" "),a("p",[t._v("以下行为会引发reflow：")]),t._v(" "),a("ul",[a("li",[t._v("页面渲染器初始化")]),t._v(" "),a("li",[t._v("添加或删除可见的DOM元素")]),t._v(" "),a("li",[t._v("盒模型相关的属性改变")]),t._v(" "),a("li",[t._v("定位属性及浮动相关的属性的改变")]),t._v(" "),a("li",[t._v("改变节点内部文字结构也会触发回流")]),t._v(" "),a("li",[t._v("浏览器窗口大小发生改变")])]),t._v(" "),a("h2",{attrs:{id:"repaint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#repaint"}},[t._v("#")]),t._v(" repaint")]),t._v(" "),a("p",[t._v("重绘，指的是当页面中元素样式的改变并不影响它在文档流中的位置时，例如通过JavaScript更改了字体颜色,浏览器会将新样式赋予给元素并重新绘制的过程。")]),t._v(" "),a("p",[t._v("以下行为会引发repaint：")]),t._v(" "),a("ul",[a("li",[t._v("页面中的元素更新样式风格相关的属性。")])]),t._v(" "),a("p",[t._v("如想知道还有哪些属性会引发reflow或者repaint"),a("a",{attrs:{href:"https://csstriggers.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("请查看"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"reflow和repaint的渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reflow和repaint的渲染过程"}},[t._v("#")]),t._v(" reflow和repaint的渲染过程")]),t._v(" "),a("p",[t._v("先看看渲染流程线：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E4%B9%8B%E9%87%8D%E6%8E%92%E3%80%81%E9%87%8D%E7%BB%98%E4%B8%8E%E5%90%88%E6%88%90/image-20200122141635901.png",alt:"image-20200122141635901"}})]),t._v(" "),a("p",[t._v("有了图中介绍的渲染流水线基础("),a("a",{attrs:{href:"https://juejin.im/post/5e09e81d51882549a25e0afc",target:"_blank",rel:"noopener noreferrer"}},[t._v("看不懂的可以看我之前的文章"),a("OutboundLink")],1),t._v(")，来看看reflow和repaint分别引发的渲染流程的哪些步骤。")]),t._v(" "),a("p",[t._v("1、 更新了元素的几何属性（reflow）\n通过JavaScript或者CSS修改元素的几何位置属性，例如改变元素的宽度、高度等，那么浏览器会触发重新布局，解析之后的一系列子阶段。"),a("strong",[t._v("无疑，重排需要更新完整的渲染流水线，所以开销也是最大的")]),t._v("。如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E4%B9%8B%E9%87%8D%E6%8E%92%E3%80%81%E9%87%8D%E7%BB%98%E4%B8%8E%E5%90%88%E6%88%90/image-20200122141553524.png",alt:"image-20200122141553524"}})]),t._v(" "),a("p",[t._v("2、 更新元素的绘制属性（repaint）\n通过JavaScript或者CSS修改元素的背景颜色，那么布局阶段将不会被执行，因为并没有引起几何位置的变换，所以就直接进入了绘制阶段，然后执行之后的一系列子阶段，。相较于重排操作，"),a("strong",[t._v("重绘省去了布局和分层阶段，所以执行效率会比重排操作要高一些")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E4%B9%8B%E9%87%8D%E6%8E%92%E3%80%81%E9%87%8D%E7%BB%98%E4%B8%8E%E5%90%88%E6%88%90/image-20200122141542239.png",alt:"image-20200122141542239"}})]),t._v(" "),a("p",[t._v("3、直接合成阶段\n可能都注意到了tiles后面的阶段不是在主线程上执行，也就是更改一个既不要布局也不要绘制的属性，这样的效率是最高的。比如使用CSS的transform来实现动画效果，这可以避开重排和重绘阶段，直接在非主线程上执行合成动画操作。这样的效率是最高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段，所以相对于重绘和重排，合成能大大提升绘制效率。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E4%B9%8B%E9%87%8D%E6%8E%92%E3%80%81%E9%87%8D%E7%BB%98%E4%B8%8E%E5%90%88%E6%88%90/image-20200122141528844.png",alt:"image-20200122141528844"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("在开发过程中要尽量减少重排，适当使用重绘，尽量使用合成。")]),t._v(" "),a("p",[t._v("作者：zhangwinwin\n链接：https://juejin.im/post/5e199d7a6fb9a02ffa6a83e1\n来源：掘金")])])}),[],!1,null,null,null);r.default=E.exports}}]);