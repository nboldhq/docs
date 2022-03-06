module.exports = {
  base: '/',
  title: 'documentation',
  description: 'nBold Documentation',
  head: [
    ['link', { rel: 'icon', href: '/n_degrade-1.svg' }],
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
        twitter: 'nboldco',
      },
      site: {
        name: 'nBold Docs',
        twitter: 'nboldco',
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
      colorThemes: ['red', 'purple'], // green (default), blue, red, and purple
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
          { text: 'Get started', link: '/api/get-started' },
          { text: 'API Explorer', link: '/api/explorer' },
          { text: 'API Reference', link: '/api/latest/reference/' }
        ]
      },
      { text: '🔐 Trust Center', link: '/trust-center/' },
      {
        text: '🌐 More',
        ariaLabel: 'More',
        items: [
          { text: 'nBold', link: 'https://nbold.co' },
          { text: 'LinkedIn', link: 'https://www.linkedin.com/company/nbold' },
          { text: 'Twitter', link: 'https://twitter.com/nboldco' },
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
      '/solutions/': [
        { title: 'About', path: '/solutions/' },
        getSideBar('/solutions/sales', 'Sales'),
        getSideBar('/solutions/marketing', 'Marketing')
      ],
      '/hosting/': [
        { title: 'About', path: '/hosting/' },
        {
          title: 'Installation',
          // path: '/hosting/installation/get-started', // optional, link of the title, which should be an absolute path and must exist
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            { title: 'Get started', path: '/hosting/installation/get-started' },
            { title: 'Prerequisites', path: '/hosting/installation/prerequisites' },
            { title: 'Docker deployment', path: '/hosting/installation/docker-deployment' },
            { title: 'Azure deployment', path: '/hosting/installation/azure-deployment' },
            { title: 'Microsoft Teams package', path: '/hosting/installation/microsoft-teams-package' }
          ]
        },
        {
          title: 'Advanced',
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            { title: 'Grant consent on-behalf', path: '/hosting/advanced/grant-consent-on-behalf-of-a-user' },
            { title: 'Monitoring', path: '/hosting/advanced/monitoring' },
            { title: 'Updating', path: '/hosting/advanced/updating' },
          ]
        },
        {
          title: 'Concepts',
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            { title: 'Team provisioning process', path: '/hosting/concepts/provisioning-process' },
            { title: 'Permanent membership policy', path: '/hosting/concepts/permanent-membership-policy' },
          ]
        },
        {
          title: 'References',
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            { title: 'Architecture overview', path: '/hosting/references/architecture-overview' },
            { title: 'Services', path: '/hosting/references/services-reference' },
            { title: 'Configuration options', path: '/hosting/references/configuration-reference' },
            { title: 'Environment variables', path: '/hosting/references/environment-variables-reference' },
            { title: 'Events', path: '/hosting/references/events-reference' },
            { title: 'Azure resources', path: '/hosting/references/azure-resources-reference' },
            { title: 'Docker resources', path: '/hosting/references/docker-resources-reference' },
            { title: 'Versioning', path: '/hosting/references/versioning' },
            { title: 'Cloud vs Self-Hosted', path: '/hosting/references/cloud-vs-self-hosted' },
          ]
        },
        // getSideBar('/hosting/deployment', 'Deployment Guide'),
        // getSideBar('/hosting/operations', 'Operations Manual'),
        // getSideBar('/hosting/jobs', 'Jobs Reference'),
        // getSideBar('/hosting/references', 'References')
      ],
      '/': [
        { title: 'Introduction', path: '/' },
        getSideBar('/quickstart', 'Quickstart'),
        getSideBar('/collaboration-templates', 'Collaboration templates'),
        getSideBar('/business-scenarios', 'Business scenarios'),
        getSideBar('/governance-policies', 'Governance policies'),
        getSideBar('/automation', 'Automation'),
        getSideBar('/api', 'API'),
        {
          title: 'Trust Center',
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1, // optional, defaults to 1
          children: [
            { title: 'Infrastructure services', path: '/trust-center/infrastructure-services' },
            { title: 'Supported clients', path: '/trust-center/supported-clients' },
            { title: 'Authentication and access control', path: '/trust-center/authentication-and-access-control' },
            { title: 'Microsoft Graph permissions', path: '/trust-center/microsoft-graph-permissions' },
            { title: 'Network security', path: '/trust-center/network-security' },
            { title: 'Security policy', path: '/trust-center/security-policy' },
            { title: 'Anti-malware policy', path: '/trust-center/anti-malware-policy' },
            { title: 'Compliance and certifications', path: '/trust-center/compliance-and-certifications' },
            { title: 'Privacy policy', path: '/trust-center/privacy-policy' },
            { title: 'Secure software development lifecycle', path: '/trust-center/secure-software-development-life-cycle' },
            { title: 'Release process', path: '/trust-center/release-process' },
            { title: 'Changelog', path: '/trust-center/CHANGELOG' },
            { title: 'Known issues', path: '/trust-center/known-issues' },
            { title: 'Classification', path: '/trust-center/classification' },

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
  const fm = require('front-matter')
  const extension = ['.md']
  const unorderedChildrens = []
  let orderedChildrens = []
  const links = []

  let files = fs.readdirSync(path.join(`${__dirname}/../${folder}`))
  files = files.filter(
    (item) =>
      item.toLowerCase() !== 'readme.md' &&
      fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
      extension.includes(path.extname(item))
  )
  files.forEach((file, fileIndex) => {
    const filePath = path.join(`${__dirname}/../${folder}`, file)
    let fileTitle = path.parse(file).name
    fileTitle = fileTitle.replace('/-/g', ' ')
    fileTitle = fileTitle.replace('/_/g', ' ')
    fileTitle = sentenceCasing.sentenceCase(fileTitle)

    const fileContent = fs.readFileSync(filePath, 'utf8')
    const meta = fm(fileContent).attributes
    // Hide draft posts
    if (!meta.status || (meta.status && meta.status !== 'draft')) {
      // Extract position if present
      let position = 100 // High by default to push them to the end
      if (meta.position) { position = meta.position }
      // unorderedChildrens.push([folder + '/' + path.parse(file).name, fileTitle, position])
      unorderedChildrens.push(
        {
          path: folder + '/' + path.parse(file).name,
          title: fileTitle,
          position: position
        }
      )
    }

    // If this is the latest article from the folder
    if (fileIndex === files.length - 1) {
      // Sort the childrens
      orderedChildrens = unorderedChildrens.sort((a, b) => {
        if (a.position < b.position) {
          return -1
        }
        if (a.position > b.position) {
          return 1
        }
        return 0
      })

      orderedChildrens.forEach((child) => {
        links.push([child.path, child.title])
      })
    }
  })

  return {
    title: titleCasing.titleCase(title),
    collapsable: true,
    sidebarDepth: 1,
    children: links
  }
}
