const fs = require('fs')
const path = require('path')
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
  description: '基于 VuePress 实现的文档网站小 demo',
  base: "/vuepress-demo/",
  head: [
    ['link', { rel: 'icon', href: `https://gitee.com/wugenqiang/PictureBed/raw/master/CS-Notes/20200425141925.ico` }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-164658031-1' // UA-00000000-0
      }
    ],
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    ['@vuepress/pwa', {
      serviceWorker: true,
      //指向自定义组件
      //popupComponent: 'MySWUpdatePopup',
      updatePopup: {
        message: "新的风暴已经出现",
        buttonText: "盘他"
      }
    }],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: "KIlqXsCmzBUnovnvh5ih8mk9-gzGzoHsz",
          appKey: "e0v6zIg2NGg44PM6MVLa7voo",
          avatar: 'monsterid',
          //path: window.location.href,
          placeholder: "你是我一生只会遇见一次的惊喜 ...",

        }
      }
    ]

  ],
  markdown: {
    lineNumbers: false // 代码块不显示行号
  },
  themeConfig: {
    displayAllHeaders: false, // 默认值：false

    lastUpdated: true,//更新时间 lastUpdated: 'Last Updated', // string | boolean

    // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,

    repo: 'wugenqiang/vuepress-demo',
    editLinks: true,
    docsDir: 'docs',

    smoothScroll: true,//页面滚动

    search: true,//内置搜索
    searchMaxSuggestions: 10,//内置搜索最大数量



    nav: [
      {
        text: '主页', link: '/',
      },
      {
        text: '指南', link: '/guide/VuePress创建文档网站',
      },
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
          title: 'VuePress 指南',
          children: getFileNames('/guide/')
        }
      ]
    },
    sidebarDepth: 2,
    palette: path.resolve(__dirname, 'palette.styl'),//样式修改

  }
}
