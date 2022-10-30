// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const mdxMermaid = require('mdx-mermaid');


/** @type {import('@docusaurus/types').Config} */
const config = {

  title: 'nBold Docs',
  tagline: 'nBold documentation',
  url: 'https://docs.nbold.co',
  baseUrl: '/',
  onBrokenLinks: 'ignore', // 'ignore' | 'log' | 'warn' | 'throw'
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'favicon.ico',

  trailingSlash: false, // Prevent GitHub pages to add slash

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'contents',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/nboldhq/docs/tree/main/',
          remarkPlugins: [mdxMermaid],
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [{
          route: '/api/explorer',
          spec: 'https://assets.nbold.io/api/nbold-api-openapi-latest.yaml',
        }],
      }
    ],
  ],

  plugins: [require.resolve('docusaurus-lunr-search')],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      //   contextualSearch: true
      // },
      navbar: {
        title: 'Docs',
        logo: {
          alt: 'nBold logo',
          src: 'logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'quickstart/quickstart',
            position: 'left',
            label: '🚀 Quickstart',
          },
          {
            type: 'doc',
            docId: 'automation/automation',
            position: 'left',
            label: '🤖 Automation',
          },
          {
            type: 'doc',
            docId: 'api/api',
            position: 'left',
            label: '📚 API Reference',
          },
          {
            to: '/api/explorer',
            position: 'right',
            label: '🧭 API Explorer',
          },
          {
            type: 'doc',
            docId: 'trust-center/trust-center',
            position: 'right',
            label: '🛡️ Trust center',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Table of contents',
            items: [
              {
                href: 'quickstart/quickstart',
                label: 'Quickstart',
              },
              {
                href: 'automation/automation',
                label: 'Automation',
              },
              {
                href: 'api/api',
                label: 'API Reference',
              },
              {
                href: '/api/explorer',
                label: 'API Explorer',
              },
              {
                href: 'trust-center/trust-center',
                label: 'Trust center',
              },
            ],
          },
          {
            title: 'Follow us',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/nbold',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nboldco',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://nbold.co/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/nboldhq',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()
          } SalesTim SAS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      }
    }),
};

module.exports = config;