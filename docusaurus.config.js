/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Buildfire Plugin SDK",
  tagline:
    "Comprehensive documentation to help you get started with Buildfire SDK",
  url: "https://mas-iota.github.io'",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "mas-iota", // Usually your GitHub org/user name.
  projectName: "mas-iota.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Buildfjre.js Logo",
        src: "img/bfjslogo.png",
      },
      items: [
        {
          label: "Getting Started",
          type: "doc",
          docId: "introduction",
          position: "right",
        },
        {
          label: "API",
          type: "doc",
          docId: "authentication",
          position: "right",
        },
        {
          label: "Components",
          type: "doc",
          docId: "action-items-component",
          position: "right",
        },
        {
          label: "Services",
          type: "doc",
          docId: "features-list",
          position: "right",
        },
        {
          label: "Integration & Tools",
          type: "doc",
          docId: "analytics",
          position: "right",
        },
        {
          href: "https://github.com/buildfire/sdk",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs",
            },
            {
              label: "Guidelines",
              to: "docs/plugin-development-guidelines",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/buildfire",
            },
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/buildfire",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UCE-rTKjJx1UmxiHNPtTILdA",
            },
            {
              label: "Learn Buildfire",
              href: "https://learn.buildfire.com",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Terms of Service",
              href: "https://buildfire.com/terms/",
            },
            {
              label: "Privacy Policy",
              href: "https://buildfire.com/privacy-policy/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BuildFire. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: "e9f9095a38c98065eaa46bfe60497a34",
      indexName: "buildfire",
      appId: "C4L38VH5HU",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
        },
        blog: {
          // showReadingTime: true,
          // // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      gtag: {
          trackingID: 'G-GK8BZT0BK4',
      },
      },
    ],
  ],
};
