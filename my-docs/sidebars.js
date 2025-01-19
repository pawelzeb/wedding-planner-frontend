// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  // Define sidebar manually
  tutorialSidebar: [
    'intro', // Points to docs/intro.md
    {
      type: 'category',
      label: 'Custom Documentation', // Replace with your category name
      items: [
        'custom-doc-1', // Replace with your actual document file names in the docs folder
        'custom-doc-2',
      ],
    },
  ],
};

export default sidebars;
