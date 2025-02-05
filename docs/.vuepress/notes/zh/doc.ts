import {defineNoteConfig} from 'vuepress-theme-plume'

export const doc = defineNoteConfig({
    dir: 'doc',
    link: '/doc/',
    sidebar: [{
        text: 'CRUD组件',
        icon: 'tabler:tools',
        items: [
            '/doc/installation/',
            '/doc/crud-doc/',
            '/doc/crud-page/',
        ],
    }],
})