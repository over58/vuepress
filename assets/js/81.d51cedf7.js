(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{391:function(e,t,r){"use strict";r.r(t);var u=r(42),n=Object(u.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h3",{attrs:{id:"_1-备份source-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-备份source-list"}},[e._v("#")]),e._v(" 1.备份source.list")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("cp /etc/apt/source.list /etc/apt/source.list.bak  \n")])])]),r("h3",{attrs:{id:"_2-打开source-list文件-删除全部内容"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-打开source-list文件-删除全部内容"}},[e._v("#")]),e._v(" 2.打开source.list文件，删除全部内容")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("vim /etc/apt/sources.list\n")])])]),r("p",[e._v("复制章节3中的源内容到sources.list文件并保存")]),e._v(" "),r("h3",{attrs:{id:"_3-国内主流的更新源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-国内主流的更新源"}},[e._v("#")]),e._v(" 3.国内主流的更新源")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("#sohu shangdong\ndeb http://mirrors.sohu.com/ubuntu/ trusty main restricted universe multiverse\ndeb http://mirrors.sohu.com/ubuntu/ trusty-security main restricted universe multiverse\ndeb http://mirrors.sohu.com/ubuntu/ trusty-updates main restricted universe multiverse\ndeb http://mirrors.sohu.com/ubuntu/ trusty-proposed main restricted universe multiverse\ndeb http://mirrors.sohu.com/ubuntu/ trusty-backports main restricted universe multiverse\ndeb-src http://mirrors.sohu.com/ubuntu/ trusty main restricted universe multiverse\ndeb-src http://mirrors.sohu.com/ubuntu/ trusty-security main restricted universe multiverse\ndeb-src http://mirrors.sohu.com/ubuntu/ trusty-updates main restricted universe multiverse\ndeb-src http://mirrors.sohu.com/ubuntu/ trusty-proposed main restricted universe multiverse\ndeb-src http://mirrors.sohu.com/ubuntu/ trusty-backports main restricted universe multiverse\n\n#163 guangdong\ndeb http://mirrors.163.com/ubuntu/ trusty main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ trusty-security main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ trusty-updates main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ trusty-proposed main restricted universe multiverse\ndeb http://mirrors.163.com/ubuntu/ trusty-backports main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ trusty main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ trusty-security main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ trusty-updates main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ trusty-proposed main restricted universe multiverse\ndeb-src http://mirrors.163.com/ubuntu/ trusty-backports main restricted universe multiverse\n\n#aliyun\ndeb-src http://archive.ubuntu.com/ubuntu xenial main restricted\ndeb http://mirrors.aliyun.com/ubuntu/ xenial main restricted\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial main restricted multiverse universe\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-updates main restricted multiverse universe\ndeb http://mirrors.aliyun.com/ubuntu/ xenial universe\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-updates universe\ndeb http://mirrors.aliyun.com/ubuntu/ xenial multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-updates multiverse\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-backports main restricted universe multiverse\ndeb http://archive.canonical.com/ubuntu xenial partner\ndeb-src http://archive.canonical.com/ubuntu xenial partner\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted\ndeb-src http://mirrors.aliyun.com/ubuntu/ xenial-security main restricted multiverse universe\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-security universe\ndeb http://mirrors.aliyun.com/ubuntu/ xenial-security multiverse\n\n\n#tsinghua.edu\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial universe\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates universe\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial multiverse\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates multiverse\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security universe\ndeb http://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security multiverse\n\n#neu.edu\ndeb-src http://mirror.neu.edu.cn/ubuntu/ xenial main restricted #Added by software-properties\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial main restricted\ndeb-src http://mirror.neu.edu.cn/ubuntu/ xenial restricted multiverse universe #Added by software-properties\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial-updates main restricted\ndeb-src http://mirror.neu.edu.cn/ubuntu/ xenial-updates main restricted multiverse universe\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial universe\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial-updates universe\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial multiverse\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial-updates multiverse\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse\ndeb-src http://mirror.neu.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse\ndeb http://archive.canonical.com/ubuntu xenial partner\ndeb-src http://archive.canonical.com/ubuntu xenial partner\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial-security main restricted\ndeb-src http://mirror.neu.edu.cn/ubuntu/ xenial-security main restricted multiverse universe\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial-security universe\ndeb http://mirror.neu.edu.cn/ubuntu/ xenial-security multiverse\n")])])]),r("h3",{attrs:{id:"_4-执行update命令更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-执行update命令更新"}},[e._v("#")]),e._v(" 4.执行update命令更新")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("apt-get update\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);