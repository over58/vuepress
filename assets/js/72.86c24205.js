(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{418:function(e,s,a){"use strict";a.r(s);var t=a(42),x=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("在网上查了有两种方式,哪种好用,则自己选择,个人是主推第二种方式")]),e._v(" "),a("p",[e._v("第一种方式,在第三方网站上上传图片,譬如七牛,然后在你博客中已下面格式即可插入图片,")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("![图片简介](https://图片链接)\n")])])]),a("p",[e._v("优点:不占git空间.\n缺点:图片管理的想自杀\n第二种方式,在本地插入,hexo官网也有相关说明,hexo图片上传说明")]),e._v(" "),a("p",[e._v("设置站点配置_config.yml:将post_asset_folder: false改为post_asset_folder: true")]),e._v(" "),a("p",[e._v("执行hexo new [xxxx],生成xxxx.md和xxxx文件夹")]),e._v(" "),a("p",[e._v("把要引用的图片拷贝到xxxx文件夹中")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("{% asset_img example.jpg This is an example image %}来引用本地图片\n")])])]),a("p",[e._v("如果想使用markdown语法来保持文章编辑整洁,那么可以使用hexo-asset-image插件来实现")]),e._v(" "),a("p",[e._v("那么配置的顺序则为:")]),e._v(" "),a("p",[e._v("设置站点配置_config.yml:将post_asset_folder: false改为post_asset_folder: true")]),e._v(" "),a("p",[e._v("执行 npm install hexo-asset-image –save 装插件")]),e._v(" "),a("p",[e._v("执行hexo new [xxxx],生成xxxx.md和xxxx文件夹")]),e._v(" "),a("p",[e._v("把要引用的图片拷贝到xxxx文件夹中")]),e._v(" "),a("p",[e._v("使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("![](xxxx/example.jpg)\n")])])]),a("p",[e._v("来引用本地图片")]),e._v(" "),a("p",[e._v("然后么,你可能会遇到一个问题,发现图片没有上传,嘿嘿嘿,那走的坑就跟我的一样了.")]),e._v(" "),a("p",[e._v("后面就跟你们说下这个问题的解决方案是怎么发现的")]),e._v(" "),a("p",[a("img",{attrs:{src:"/hexo%E5%8D%9A%E5%AE%A2%E5%9B%BE%E7%89%87%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88/hexo-image.png",alt:"hexo-iamge"}})]),e._v(" "),a("p",[e._v("解决方案： 将hexo-asset-image版本切到0.0.1版本试试")])])}),[],!1,null,null,null);s.default=x.exports}}]);