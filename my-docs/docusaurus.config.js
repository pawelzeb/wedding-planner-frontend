module.exports = {
  title: 'Wedding Planner - Dokumentacja',
  tagline: 'Twoje wsparcie w organizacji idealnego wesela',
  url: 'https://pawelzeb.github.io', // Twój GitHub Pages base URL
  baseUrl: '/wedding-planner-frontend/my-docs/', // Ścieżka folderu na GitHub Pages
  trailingSlash: true, // Dodaje "/" na końcu linków
  onBrokenLinks: 'warn', // Ostrzeżenie dla niedziałających linków
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pawelzeb', // Nazwa Twojego użytkownika GitHub
  projectName: 'wedding-planner-frontend', // Nazwa repozytorium
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },
  themeConfig: {
    navbar: {
      title: 'Wedding Planner',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/docs/intro', label: 'Dokumentacja', position: 'left' },
        { href: 'https://github.com/pawelzeb/wedding-planner-frontend', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentacja',
          items: [
            { label: 'Wprowadzenie', to: '/docs/intro' },
          ],
        },
        {
          title: 'Społeczność',
          items: [
            { label: 'GitHub', href: 'https://github.com/pawelzeb/wedding-planner-frontend' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wedding Planner.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/pawelzeb/wedding-planner-frontend/edit/main/my-docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/pawelzeb/wedding-planner-frontend/edit/main/my-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
