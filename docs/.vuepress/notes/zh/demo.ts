import { defineNoteConfig } from 'vuepress-theme-plume'

export const demo = defineNoteConfig({
  dir: 'demo',
  link: '/demo/',
  sidebar: [{
      text: '示例',
      icon: 'tabler:tools',
      items: [
        'bar',
        'foo',
      ],
    }
  ]
})