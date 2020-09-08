const routes = require('../../scripts/generate-router.js')
console.log(routes)
module.exports = {
    title: 'Adroi媒体API 接口文档',  // 设置网站标题
    description: 'Adroi',
    base: '/',
    themeConfig: {
        nav: [
            { text: '接口定义', link: '/apiword' }
        ],
        sidebar: {
            '/': routes
        },
        sidebarDepth: 2
    }
}