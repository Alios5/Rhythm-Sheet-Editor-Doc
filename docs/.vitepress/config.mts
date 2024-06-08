import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RT Sheet Editor",
  description: "Documentation",
  base: '/Rhythm-Sheet-Editor-Doc/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/What-is-this' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'RT Sheet Editor', link: '/What-is-this' },
          { text: 'Getting Started', link: '/Getting-stardet' }
        ]
      },
      {
        text: 'Interface',
        items:[
          {text: 'Home', link: '/Home'},
          {text: 'Sheet editor', link: '/Sheet-editor'}
        ]
      },
      {
        text: 'Tutorials and Guides',
        items:[
          {
            text: 'Guides',
            items:[
              {text: 'Launch project', link:'/Guides/1'},
              {text: 'BPM', link:'/Guides/5'},
              {text: 'Sheet', link:'/Guides/3'},
              {text: 'Event keys', link:'/Guides/4'},
              {text: 'Project management', link:'/Guides/6'},
            ]
          },
          {
            text: 'Tutorial',
            items:[]
          }
        ]
      },
      
    ],
    footer: {
      message: 'Get for Windows, MacOS and Linux',
      copyright: 'Rhythm Sheet Editor. Copyright © 2024 EpicAlios (Alain Kouya).'
    },
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/fJNpNCJ2b9' }
    ]
  },
  
})
