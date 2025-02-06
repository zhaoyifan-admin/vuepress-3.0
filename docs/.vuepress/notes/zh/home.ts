import {defineNoteConfig} from 'vuepress-theme-plume'

export const home = defineNoteConfig({
    dir: 'homes',
    link: '/homes/',
    sidebar: [
        'installation',
        'global',
        'api',
        'locale',
    ],
})