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
          { text: 'JavaScript', link: '/knowledge/javascript/' },
          { text: 'Graphql', link: '/knowledge/graphql/' },
          { text: 'React', link: '/knowledge/react/' },
          { text: '网络请求', link: '/knowledge/http/' },
        ]
      },
      {
        text: '工具', link: '/tool/tools/',
      },
      {
        text: '阅读',
        items: [
          { text: '优质文章记录', link: '/essay/docs/' },
          { text: '读书笔记', link: '/essay/notes/' },
        ]
      },
      {
        text: 'Me',
        items: [
          { text: '掘金', link: 'https://juejin.im/user/5b446be0f265da0f793a56e4/posts' },
          { text: 'NPM', link: 'https://www.npmjs.com/settings/yizhen.fan/packages' },
          { text: 'GitHub', link: 'https://github.com/wugenqiang' }
        ]
      },
    ],
    sidebar: {
      '/knowledge/javascript/': [
        {
          title: 'javascript',
          children: getFileNames('/knowledge/javascript/')
        }
      ],
      '/knowledge/graphql/': [
        {
          title: 'Graphql',
          children: getFileNames('/knowledge/graphql/')
        }
      ],
      '/knowledge/react/': [
        {
          title: 'React 学习记录',
          children: getFileNames('/knowledge/react/')
        }
      ],
      '/knowledge/http/': [
        {
          title: '网络请求',
          children: getFileNames('/knowledge/http/')
        }
      ],
      '/tool/tools/': [
        {
          title: '工具',
          children: getFileNames('/tool/tools/')
        }
      ],
      '/essay/docs/': [
        {
          title: '优质文章记录',
          children: getFileNames('/essay/docs/')
        }
      ],
      '/essay/notes/': [
        {
          title: '读书笔记',
          children: getFileNames('/essay/notes/')
        }
      ],
    },
    sidebarDepth: 2
  }
}
