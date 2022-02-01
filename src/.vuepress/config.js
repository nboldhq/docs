module.exports = {
  base: '/',
  title: 'nBold | Docs',
  description: 'nBold Documentation',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/css/bundle.css' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=UA-5688830-15' }],
    // Bundle
    ['script', { type: 'text/javascript', src: '/js/bundle.js' }]
  ],
  dest: 'docs',
  plugins: [
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
      headerTopOffset: 120
    },
    '@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    },
    ['mermaidjs',
      {
        theme: 'neutral' // default, dark, forest, neutral
      }
    ],
    [
      "@mr-hope/copy-code",
      {
        // your options
      },
    ],
    'autometa', {
      enable: true, // enables/disables everything - control per page using frontmatter
      image: true, // regular meta image used by search engines
      twitter: true, // twitter card
      og: true, // open graph: facebook, pinterest, google+
      schema: true,
      canonical_base: 'https://developers.salestim.com',
      author: {
        name: 'SalesTim',
        twitter: 'salestimcrm',
      },
      site: {
        name: 'SalesTim',
        twitter: 'salestimcrm',
      },
      description_sources: [
        'frontmatter',
        'excerpt',
        // markdown paragraph regex
        //
        /^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,
        //
        // this excludes blockquotes using `(?!^>)`
        ///^((?:(?!^#)(?!^\-|\+)(?!^[0-9]+\.)(?!^!\[.*?\]\((.*?)\))(?!^>)(?!^\[\[.*?\]\])(?!^\{\{.*?\}\})[^\n]|\n(?! *\n))+)(?:\n *)+\n/img,

        // html paragraph regex
        /<p(?:.*?)>(.*?)<\/p>/i,

      ],
      // ---------------------------------------------------------------------------
      // order of what gets the highest priority:
      // 1. frontmatter
      // 2. content markdown image such as `![alt text](http://url)`
      // 3. content regular html img
      image_sources: [
        'frontmatter',
        /!\[.*?\]\((.*?)\)/i,        // markdown image regex
        /<img.*?src=['"](.*?)['"]/i, // html image regex
      ]
    }
  ],

  theme: 'yuu',

  themeConfig: {

    yuu: {
      defaultDarkTheme: true,
      disableDarkTheme: false,
      colorThemes: ['red', 'blue', 'purple'], // green (default), blue, red, and purple
      defaultColorTheme: 'red',
      labels: {
        darkTheme: '🌗 Dark Theme', // Default is "Enable Dark Theme?"
        ignoreThemes: 'Ignore themes?', // Default is "Ignore Other Themes?"
      },
      disableThemeIgnore: true
    },

    logo: '/color.png',
    
    // Footer options
    lastUpdated: '♻️ Last Updated',

    // Smooth scrolling
    smoothScroll: true,

    // GitHub options
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'salestim',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: '🐙 GitHub',
    // Optional options for generating "Edit this page" link
    //   if your docs are in a different repo from your main project:
    docsRepo: 'salestim/docs',
    //   if your docs are not at the root of the repo:
    docsDir: 'src',
    //   if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    //   defaults to false, set to true to enable
    editLinks: true,
    //  custom text for edit link. Defaults to "Edit this page"
    editLinkText: '🌈 Improve this page!',

    // Navbar: Horizontal navigation
    nav: [
      {
        text: '🚀 Developers',
        ariaLabel: 'Developers',
        items: [
          { text: 'API Explorer', link: '/api/explorer' },
          { text: 'Power Platform', link: '/connectors/power-platform-connector' },
          { text: 'Logic Apps', link: '/connectors/logic-apps-connector' }
        ]
      },
      {
        text: '🔐 Security',
        ariaLabel: 'Security',
        items: [
          { text: 'Trust Center', link: '/platform/' },
        ]
      },
      { text: '🌐 nBold', link: 'https://www.nbold.co' },
      {
        text: '📡 Social',
        ariaLabel: 'Social',
        items: [
          { text: 'LinkedIn', link: 'https://www.linkedin.com/company/salestim' },
          { text: 'Twitter', link: 'https://twitter.com/salestimcrm' },
          { text: 'Youtube', link: 'https://www.youtube.com/channel/UCyoESYiKzmIdVbR7BHu0cbQ' }
        ]
      }
    ],

    // Sidebar options
    displayAllHeaders: false,
    activeHeaderLinks: true,
    sidebarDepth: 1,

    // Sidebar: Vertical navigation
    sidebar: {
      '/': [
        {
          title: '🚀 README',
          path: '/'
        },
        getSideBar('/_drafts', '📝 Drafts'),
        {
          title: 'No-Code Solutions',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/nocode/', 'Get Started'],
            ['/nocode/naming-conventions.md', 'Naming conventions'],
            ['/nocode/approval.md', 'Approval workflow'],
            ['/nocode/audience-targeting.md', 'Audience Targeting'],
            ['/nocode/ad-schema-extensions.md', 'AD Schema Extensions']
          ]
        },
        {
          title: 'Connected Apps',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/connectedapps/', 'Get Started'],
            ['/connectedapps/salesforce-sales-cloud.md', 'Salesforce Sales Cloud']
          ]
        },
        {
          title: 'Connectors',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/connectors/', 'Get Started'],
            ['/connectors/power-platform-connector.md', 'Power Platform Setup'],
            ['/connectors/logic-apps-connector.md', 'Logic Apps Setup'],
            ['/connectors/connectors-actions.md', 'Triggers & Actions Reference']
          ]
        },
        {
          title: 'API & Webhooks',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/api/', 'Overview'],
            ['/api/getting-started', 'Getting Started'],
            ['/api/authentication', 'Authentication'],
            ['/api/best-practices', 'Best Practices'],
            ['/api/explorer', 'API Explorer'],
            ['/api/sdks', 'API SDKs'],
            ['/api/sdks/node/', 'Node.js SDK'],
            // ['/api/sdks/powershell/', 'PowerShell Module'],
            ['/api/reference/', 'API Reference'],
            ['/api/use-postman', 'Use Postman'],
            ['/api/webhooks', 'Webhooks'],
            ['/api/rate-limits', 'Rate Limits'],
            ['/api/throttling', 'Throttling'],
            ['/api/versions', 'Versions'],
            ['/api/changelog', 'Changelog']
          ]
        },
        {
          title: 'Trust Center',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/platform/', 'Overview'],
            '/platform/supportedclients.md',
            '/platform/sso.md',
            '/platform/rbac.md',
            '/platform/access.md',
            '/platform/infrastructurekeycomponents.md',
            '/platform/apppermissions.md',
            '/platform/datamanagement.md',
            '/platform/securedevelopment.md',
            '/platform/securitypolicy.md',
            '/platform/privacyandcompliance.md',
            '/platform/classification.md',
            '/platform/installation-options.md',
            '/platform/releases.md',
            '/platform/knownissues.md'
          ]
        }
      ]
    }
  }
}


function getSideBar (folder, title) {
  const fs = require('fs')
  const path = require('path')
  const titleCasing = require('title-case')
  const sentenceCasing = require('sentence-case')
  const extension = ['.md']
  const childrens = []

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() !== 'readme.md' &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    )
    .forEach((file, fileIndex) => {
      let fileTitle = path.parse(file).name
      fileTitle = fileTitle.replace('/-/g', ' ')
      fileTitle = fileTitle.replace('/_/g', ' ')
      fileTitle = sentenceCasing.sentenceCase(fileTitle)
      childrens.push([folder + '/' + path.parse(file).name, fileTitle])
    })

  return {
    title: titleCasing.titleCase(title),
    collapsable: true,
    sidebarDepth: 1,
    children: childrens
  }
}
