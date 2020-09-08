(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{391:function(t,a,s){"use strict";s.r(a);var v=s(42),r=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("提起js,有这么几个概念非了解不可。单线程 、回调函数、非阻塞、执行上下文、调用栈、上下文、事件循环、任务队列。")]),t._v(" "),s("h3",{attrs:{id:"单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[t._v("#")]),t._v(" 单线程")]),t._v(" "),s("p",[t._v("one thread = one call stack == one thing at a time\n解释来讲就是单线程意味着只有一个调用栈，在同一时刻只能做一件事儿")]),t._v(" "),s("h3",{attrs:{id:"执行上下文"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),s("p",[t._v("执行上下文就是当前JavaScript代码被解析和执行是所在环境的抽象概念，JavaScript中运行任何的代码都是在执行上下文中运行。")]),t._v(" "),s("p",[t._v("执行上下文的类型，总共有三类\n1.全局执行上下文：这是默认的，最基础的执行上下文。不在任何函数中的代码都位于全局执行上下文中。共有两个过程：\n- .创建有全局对象，在浏览器中这个全局对象就是window对象。\n- .将this指针指向这个全局对象。一个程序中只能存在一个执行上下文。\n2.函数执行上下文：每次调用函数时，都会为该函数创建一个新的执行上下文。每个函数都拥有自己的执行上下文，但是只有在函数被调用的时候才会被创建。一个程序中可以存在多个函数执行上下文，这些函数执行上下文按照特定的顺序执行一系列步骤，后文具体讨论。\n3.Eval函数执行上下文：运行在eval函数中的代码也获得了自己的执行上下文，但由于Eval较为少用到，也不建议使用，就不去详细讨论了。。。（eval方法是在运行时对脚本进行解释执行，而普通的javascript会有一个预处理的过程。所以会有一些性能上的损失；eval也存在一个安全问题，因为它可以执行传给它的任何字符串，所以永远不要传入字符串或者来历不明和不受信任源的参数。")]),t._v(" "),s("h3",{attrs:{id:"执行栈-调用栈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行栈-调用栈"}},[t._v("#")]),t._v(" （执行栈）调用栈")]),t._v(" "),s("p",[t._v("执行栈，也叫调用栈，具有LIFO（Last in, First out 后进先出）结构，用于存储在代码执行期间创建的所有执行上下文。\n当JavaScript引擎首次读取脚本时，会创建一个全局执行上下文并将其Push到当前执行栈中。每当发生函数调用时，引擎都会为该函数创建一个新的执行上下文并Push到当前执行栈的栈顶。\n引擎会运行执行上下文在执行栈栈顶的函数，根据LIFO规则，当此函数运行完成后，其对应的执行上下文将会从执行栈中Pop出，上下文控制权将转到当前执行栈的下一个执行上下文。")]),t._v(" "),s("h3",{attrs:{id:"任务队列、macrotask、mircotask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务队列、macrotask、mircotask"}},[t._v("#")]),t._v(" 任务队列、macrotask、mircotask")]),t._v(" "),s("h4",{attrs:{id:"同步任务和异步任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步任务和异步任务"}},[t._v("#")]),t._v(" 同步任务和异步任务")]),t._v(" "),s("p",[t._v("因 "),s("strong",[t._v("js是单线程语言")]),t._v(" ， 存在大量的IO等耗时操作，所以有“同步任务”和“异步任务”的区分\n同步任务")]),t._v(" "),s("blockquote",[s("p",[t._v("在主线程上排队执行的任务，前一个任务执行完毕，才能执行后一个任务；\n异步任务\n不进入主线程、而进入”任务队列”（task queue）的任务，只有”任务队列”通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。\n总之\n只要主线程空了，就会去读取”任务队列”，这就是JavaScript的运行机制,这个过程是循环往复的，所以也叫做Event Loop事件循环")])]),t._v(" "),s("h4",{attrs:{id:"macrotask、mircotask队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macrotask、mircotask队列"}},[t._v("#")]),t._v(" macrotask、mircotask队列")]),t._v(" "),s("p",[t._v("microtasks:")]),t._v(" "),s("ul",[s("li",[t._v("process.nextTick")]),t._v(" "),s("li",[t._v("promise")]),t._v(" "),s("li",[t._v("Object.observe")]),t._v(" "),s("li",[t._v("MutationObserver")])]),t._v(" "),s("p",[t._v("macrotasks:")]),t._v(" "),s("ul",[s("li",[t._v("setTimeout")]),t._v(" "),s("li",[t._v("setInterval")]),t._v(" "),s("li",[t._v("setImmediate")]),t._v(" "),s("li",[t._v("I/O")]),t._v(" "),s("li",[t._v("UI渲染")])]),t._v(" "),s("p",[t._v("一个事件循环有一个或多个任务队列，一个任务队列是任务的"),s("strong",[t._v("集合")]),t._v("\nwhatwg规范：https://html.spec.whatwg.org/multipage/webappapis.html#task-queue")]),t._v(" "),s("ul",[s("li",[t._v("task queue 就是 macrotask queue")]),t._v(" "),s("li",[t._v("每一个 event loop 都有一个 microtask queue")]),t._v(" "),s("li",[t._v("task queue == macrotask queue != microtask queue")]),t._v(" "),s("li",[t._v("一个任务 task 可以放入 macrotask queue 也可以放入 microtask queue 中")])]),t._v(" "),s("p",[t._v("理解了这些定义之后，再看执行原理：")]),t._v(" "),s("blockquote",[s("p",[t._v("事件循环的顺序，决定了JavaScript代码的执行顺序。它从script(整体代码)开始第一次循环。之后全局上下文进入函数调用栈。直到调用栈清空(只剩全局)，然后执行所有的micro-task。当所有可执行的micro-task执行完毕之后。循环再次从macro-task开始，找到其中一个任务队列执行完毕，然后再执行所有的micro-task，这样一直循环下去。\n更为形象的显示代码的执行过程，请看https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/")])]),t._v(" "),s("p",[t._v("还要注意一点：")]),t._v(" "),s("blockquote",[s("p",[t._v("包裹在一个 script 标签中的js代码也是一个 task 确切说是 macrotask。")])]),t._v(" "),s("h3",{attrs:{id:"事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),s("p",[t._v('执行栈中执行完之后会从任务队列中读取一个task进行执行，这个过程是循环的，称之为 "事件循环"')]),t._v(" "),s("h3",{attrs:{id:"非阻塞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非阻塞"}},[t._v("#")]),t._v(" 非阻塞")]),t._v(" "),s("p",[t._v("遇到异步操作，主线程会继续处理后面的代码，当异步操作完成以后在任务队列（task）中添加事件")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("作者：BenjaminShih\n来源：CSDN\n原文：https://blog.csdn.net/sjn0503/article/details/76087631\n版权声明：本文为博主原创文章，转载请附上博文链接！")])])}),[],!1,null,null,null);a.default=r.exports}}]);