const fs = require('fs')
// 获取该文件夹下的所有文件名
const getFileNames = (parentFileName) => {
  const results = []
  const files = fs.readdirSync(`./docs${parentFileName}`)
  files.forEach((val) => {
    if ('README.md'.includes(val)) {
      // results.push('')
    } else {
      results.push(val)
    }
  })
  return results
}

module.exports = {
  title: 'VuePress Demo',
  description: '耶耶耶耶耶✌️',
  base: "/vuepress-demo/",
  head: [
    ['link', { rel: 'icon', href: `https://gitee.com/wugenqiang/PictureBed/raw/master/CS-Notes/20200425141925.ico` }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-144045995-2'
      }
    ],
    '@vuepress/back-to-top'
  ],
  themeConfig: {
    displayAllHeaders: false, // 默认值：false

    lastUpdated: true,

    repo: 'wugenqiang/vuepress-demo',
    editLinks: true,
    docsDir: 'docs',

    smoothScroll: true,//页面滚动

    nav: [
      {
        text: '知识库',
        items: [
          { text: '技术笔记', link: 'https://wugenqiang.github.io/CS-Notes/#/' },
          { text: '算法笔记', link: 'https://wugenqiang.github.io/algorithm-data-structure/#/' },
        ]
      },
      {
        text: '工具', link: '/tool/tools/',
      },

      {
        text: '博客',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/wugenqiang' },
          { text: 'GitHub', link: 'https://wugenqiang.github.io/' }
        ]
      },
    ],
    sidebar: {

      '/tool/tools/': [
        {
          title: '工具',
          children: getFileNames('/tool/tools/')
        }
      ],
      '/guide/': [
        {
          title: '工具',
          children: getFileNames('/guide/')
        }
      ]
    },
    sidebarDepth: 2
  }
}
