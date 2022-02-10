module.exports = {
  base: '/',
  title: 'documentation',
  description: 'nBold Documentation',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: '/css/bundle.css' }],
    ['script', { type: 'text/javascript', src: '/js/MicrosoftTeams.min.js' }],
    ['script', { type: 'text/javascript', src: '/js/theme.js' }],
    ['script', { type: 'text/javascript', src: 'https://www.googletagmanager.com/gtag/js?id=UA-5688830-15' }],
    // Bundle
    ['script', { type: 'text/javascript', src: '/js/bundle.js' }]
  ],
  dest: 'dist',
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
      canonical_base: 'https://docs.nbold.co',
      author: {
        name: 'nBold',
        twitter: 'nBoldHQ',
      },
      site: {
        name: 'nBold Docs',
        twitter: 'nBoldHQ',
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
      defaultDarkTheme: false,
      disableDarkTheme: false,
      colorThemes: ['blue', 'purple'], // green (default), blue, red, and purple
      defaultColorTheme: 'red',
      labels: {
        darkTheme: '🌗 Dark Theme', // Default is "Enable Dark Theme?"
        ignoreThemes: 'Ignore themes?', // Default is "Ignore Other Themes?"
      },
      disableThemeIgnore: true
    },

    logo: '/Logo_degrade_noir@4x.png',

    // Footer options
    lastUpdated: '📅 Last Updated',

    // Smooth scrolling
    smoothScroll: true,

    // GitHub options
    // Assumes GitHub. Can also be a full GitLab url.
    repo: '',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: '🐙 GitHub',
    // Optional options for generating "Edit this page" link
    //   if your docs are in a different repo from your main project:
    docsRepo: 'nboldhq/docs',
    //   if your docs are not at the root of the repo:
    docsDir: 'src',
    //   if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    //   defaults to false, set to true to enable
    editLinks: false,
    //  custom text for edit link. Defaults to "Edit this page"
    editLinkText: '🌈 Improve this page!',

    // Navbar: Horizontal navigation
    nav: [
      {
        text: '🚀 Automation',
        ariaLabel: 'Automation',
        items: [
          { text: 'Power Platform', link: '/automation/power-platform-automation-connector' },
          { text: 'Logic Apps', link: '/automation/logic-apps-automation-connector' }
        ]
      },
      {
        text: '>_ Developers',
        ariaLabel: 'Developers',
        items: [
          { text: 'API Explorer', link: '/api/explorer' },
          { text: 'API Reference', link: '/api/production/reference/' }
        ]
      },
      { text: '🔐 Trust Center', link: '/trust-center/' },
      {
        text: '🌐 More',
        ariaLabel: 'More',
        items: [
          { text: 'nBold', link: 'https://nbold.co' },
          { text: 'LinkedIn', link: 'https://www.linkedin.com/company/nbold' },
          { text: 'Twitter', link: 'https://twitter.com/nboldhq' },
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
      '/hosting/': [
        {
          title: 'About',
          path: '/hosting/'
        },
        getSideBar('/hosting/deployment', 'Deployment Guide'),
        getSideBar('/hosting/operations', 'Operations Manual'),
        getSideBar('/hosting/jobs', 'Jobs Reference'),
        getSideBar('/hosting/references', 'References')
      ],
      '/': [
        {
          title: 'Introduction',
          path: '/'
        },
        getSideBar('/quickstart', 'Quickstart'),
        // {
        //   title: 'Quickstart',
        //   collapsable: true,
        //   sidebarDepth: 1,
        //   children: [
        //     ['/setup/installation-options.md', 'Installation options'],
        //     ['/setup/supported-clients.md', 'Supported clients']
        //   ]
        // },
        getSideBar('/collaboration-templates', 'Collaboration templates'),
        getSideBar('/business-scenarios', 'Business scenarios'),
        {
          title: 'Governance policies',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/governance-policies/naming-conventions.md', 'Naming conventions'],
            ['/governance-policies/approval.md', 'Approval workflow'],
            ['/governance-policies/audience-targeting.md', 'Audience Targeting'],
            ['/governance-policies/ad-schema-extensions.md', 'AD Schema Extensions']
          ]
        },
        {
          title: 'Automation',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/automation/', 'Get Started'],
            ['/automation/power-platform-automation-connector.md', 'Power Platform Setup'],
            ['/automation/logic-apps-automation-connector.md', 'Logic Apps Setup'],
            ['/automation/automation-connectors-actions.md', 'Triggers & Actions Reference']
          ]
        },
        // getSideBar('/automation-connectors', 'Automation Connectors'),
        {
          title: 'API',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/api/', 'Overview'],
            ['/api/getting-started', 'Getting Started'],
            ['/api/authentication', 'Authentication'],
            ['/api/best-practices', 'Best Practices'],
            ['/api/explorer', 'API Explorer'],
            ['/api/production/reference/', 'API Reference'],
            ['/api/sdks', 'API SDKs'],
            ['/api/production/sdks/javascript/', 'JavaScript & Node SDK'],
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
            ['/trust-center/', 'Overview'],
            '/trust-center/sso.md',
            '/trust-center/rbac.md',
            '/trust-center/access.md',
            '/trust-center/infrastructurekeycomponents.md',
            '/trust-center/apppermissions.md',
            '/trust-center/datamanagement.md',
            '/trust-center/securedevelopment.md',
            '/trust-center/security-policy.md',
            '/trust-center/privacyandcompliance.md',
            '/trust-center/classification.md',
            '/trust-center/releases.md',
            '/trust-center/knownissues.md'
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
