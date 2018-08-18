module.exports = {
    title: 'Fabric.js',
    serviceWorker: true,
    lang: 'zh-CN',
    base: '/fabricjs.cn/',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '教程', link: '/tutorial/' },
            { text: '文档', link: '/doc/' },
            { text: 'Demo', link: '/demo/' },
            { text: 'GitHub', link: 'https://github.com/fabricjs/fabric.js' },
        ]
    },
    head:[
        ['link', { rel: 'icon', href: `/favicon.ico` }],
        ['link', { rel: 'shortcut icon', href: `/favicon.ico`,type:'image/x-icon' }]
    ],
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
          title: 'Fabric.js',
        }
      }
}