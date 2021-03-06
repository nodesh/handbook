module.exports = {
  base: '/handbook/',
  title: 'handbook',
  description: 'a handbook about coding',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#af485b' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#af485b' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true
  },
  theme: '@vuepress/vue',
  themeConfig: {
    repo: 'nodesh/handbook',
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/guide/': [
            {
              title: 'FFmpeg',
              collapsable: false,
              children: [
                'ffmpeg-install'
              ]
            },
            {
              title: 'mysql',
              collapsable: false,
              children: [
                'install-mysql'
              ]
            },
            {
              title: 'nginx',
              collapsable: false,
              children: [
                'macos-install'
              ]
            },
            {
              title: 'oracle',
              collapsable: false,
              children: [
                'install-oracle_xe'
              ]
            },
            {
              title: 'vue',
              collapsable: false,
              children: [
                'vue'
              ]
            },
            {
              title: 'turnserver',
              collapsable: true,
              children: [
                'turnserver'
              ]
            }
          ]
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  extraWatchFiles: [
    '.vuepress/nav/zh.js'
  ]
};
