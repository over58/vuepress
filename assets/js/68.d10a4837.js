(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{414:function(n,e,r){"use strict";r.r(e);var t=r(42),s=Object(t.a)({},(function(){var n=this.$createElement,e=this._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[e("p",[this._v("使用nodemailer包实现发送邮件\n")]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("var express = require('express')\nconst nodemailer = require('nodemailer')\nconst app = express()\nconst PORT = process.env.PORT || 3000\n\n// 配置163邮箱\nlet transporter = nodemailer.createTransport({\n  service: 'smpt.163.com',\n  host: 'smtp.163.com',\n  secureConnection: true,\n  port:    465,\n  auth: {\n    user: 'XXXX@163.com',\n    pass: 'XXXX'\n  }\n});\n// 配置gmail邮箱\n// let transporter  = nodeMailer.createTransport('SMTP',{\n//   service: 'gmail',\n//   host: 'smtp.gmail.com',\n//   secure: true,\n//   port:465,\n//   auth: {\n//       //邮箱\n//       user: 'XXXXXXX@gmail.com',\n//       //登入密码\n//       pass: 'XXXXXXX',\n//   }   \n// });\n\nlet defaultOpions = {\n  from: 'XXX@163.com',\n  to: 'XXX@qq.com',\n  subject: '主题',\n  text: '内容',\n  html: '<b>内容</b>'\n}\n\napp.get('/', (req, res) => {\n  transporter.sendMail(defaultOpions, (err, info) => {\n    if(err) {\n      console.error(err)\n    }else{\n      console.log(err, info)\n    }\n    res.send()\n  })\n})\n\napp.listen(PORT, () => {\n  console.log('start service')\n})\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);