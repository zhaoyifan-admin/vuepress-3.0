import {defineNoteConfig} from 'vuepress-theme-plume'

export const home = defineNoteConfig({
    dir: 'homes',
    link: '/homes/',
    sidebar: [
        'installation',
        {
            text: '全局配置',
            prefix: 'global',
            collapsed: false,
            items: [
                '@v2',
                '@v3',
            ],
        },
        {
            text: '全局API',
            prefix: 'api',
            collapsed: false,
            items: [
                '@v2',
                '@v3',
            ],
        },
        'locale',
    ],
})