// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "鳥仔 ê 名",
  tagline: "鳥仔 | 台語 | 賞鳥簿仔 | eBird | 軟工 | 演算法 | 遊戲",
  favicon: "img/favicon.ico",
  trailingSlash: true,

  // Set the production url of your site here
  url: "https://siansiansu.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "siansiansu", // Usually your GitHub org/user name.
  projectName: "siansiansu.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // themes: ['@docusaurus/theme-search-algolia'],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          sidebarCollapsed: false,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-S4S5T3DX6G",
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: "date",
          filename: "sitemap.xml",
          ignorePatterns: ['/docs/algorithms/**', '/comments/**', '/docs/gaming/**', '/search/**'],
          changefreq: null,
          priority: null,
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // headTags: [
      //   {
      //     tagName: "link",
      //     attributes: {
      //       rel: "alternate",
      //       hreflang: "zh-TW",
      //       href: "https://siansiansu.github.io/",
      //     },
      //   },
      // ],
      metadata: [
        {
          name: "keywords",
          content: "台語, 鳥仔, 鳥仔 ê 名 - 認捌鳥仔 ê 台語",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "og:title",
          content: "鳥仔 ê 名 - 認捌鳥仔 ê 台語",
        },
        {
          name: "og:description",
          content: "鳥類的台語",
        },
        {
          name: "google-site-verification",
          content: "QEDNLI8In3Dve5OuHVx9NckoUPYcN2I05JwHQlVER-M"
        }
      ],
      image: "img/profile.jpg",
      navbar: {
        title: "Mè-sì",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs/birdtaigi",
            type: "docSidebar",
            sidebarId: "tsiauaSidebar",
            label: "鳥仔 ê 名",
            position: "left",
          },
          {
            to: "/docs/taigi",
            type: "docSidebar",
            sidebarId: "taigiSidebar",
            label: "台語筆記",
            position: "left",
          },
          {
            to: "/docs/birdwatching",
            type: "docSidebar",
            sidebarId: "birdwatchingSidebar",
            label: "賞鳥筆記",
            position: "left",
          },
          {
            to: "/docs/ebird",
            type: "docSidebar",
            sidebarId: "ebirdSidebar",
            label: "eBird 工具",
            position: "left",
          },
          {
            to: "/docs/engineering",
            type: "docSidebar",
            sidebarId: "engineeringSidebar",
            label: "軟工",
            position: "left",
          },
          {
            to: "/docs/algorithms",
            type: "docSidebar",
            sidebarId: "algorithmsSidebar",
            label: "演算法",
            position: "left",
          },
          {
            to: "/docs/gaming",
            type: "docSidebar",
            sidebarId: "gamingSidebar",
            label: "遊戲",
            position: "left",
          },
          {
            to: "comments",
            label: "留話予我",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: '聯絡我',
        //     items: [
        //       {
        //         label: '留話簿仔',
        //         to: 'comments'
        //       },
        //       {
        //         label: 'Instagram',
        //         href: 'https://instagram.com/siansiansu',
        //       },
        //       {
        //         label: 'X',
        //         href: 'https://x.com/siansiansu',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/siansiansu',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Soo bîn-hiân`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      algolia: {
        appId: "84MT6LYJ8T",
        apiKey: "ad5d41ddd220936219e557467464a520",
        indexName: "siansiansuio",
        contextualSearch: true,
        searchParameters: {},
      },
    }),
};

export default config;
