(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{423:function(t,e,T){"use strict";T.r(e);var a=T(42),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,T=t._self._c||e;return T("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[T("h3",{attrs:{id:"介绍"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),T("p",[t._v("首先， GET、POST 都是htt请求的的方法。它们本质上并无差别。HTTP的底层是TCP/IP。所以GET和POST的底层也是TCP/IP，也就是说，GET/POST都是TCP链接。GET和POST能做的事情是一样一样的。你要给GET加上request body，给POST带上url参数，技术上是完全行的通的 。")]),t._v(" "),T("h3",{attrs:{id:"问题"}},[T("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),T("p",[t._v('那么， 问题来了。\n1、"GET请求在URL中传送的参数是有长度限制的，而POST没有"是什么鬼？。\n答： url长度限制都是浏览器设置的；而GET也可以在request body中传递参数，只不过不同的服务器对这些数据的处理方式不同，有些接受，有些忽略。')]),t._v(" "),T("p",[t._v("2、GET和POST还有一个重大区别，简单的说：GET产生一个TCP数据包；POST产生两个TCP数据包。长的说：对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。\n答： 1. GET与POST都有自己的语义，不能随便混用。\n2. 据研究，在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点。\n3. 并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。")])])}),[],!1,null,null,null);e.default=r.exports}}]);