import {defineNavbarConfig} from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
    {text: '首页', link: '/', icon: 'material-symbols:home-outline'},
    {text: '博客', link: '/blog/', icon: 'material-symbols:article-outline'},
    {text: '标签', link: '/blog/tags/', icon: 'solar:tag-bold'},
    {text: '归档', link: '/blog/archives/'},
    {
        text: '文档',
        items: [
            {text: '开发指南', link: '/homes/installation/', icon: 'icon-park-outline:guide-board'},
            {text: 'CRUD组件', link: '/doc/crud-doc/', icon: 'tabler:table-filled'},
            {text: 'FORM组件', link: '/form/form-doc/', icon: 'fluent:form-multiple-48-filled'}
        ],
        icon: 'material-symbols:article-outline'
    },
    {
        text: '笔记',
        items: [{text: '示例', link: '/notes/demo/README.md'}]
    },
])

export const enNavbar = defineNavbarConfig([
    {text: 'Home', link: '/en/'},
    {text: 'Blog', link: '/en/blog/'},
    {text: 'Tags', link: '/en/blog/tags/'},
    {text: 'Archives', link: '/en/blog/archives/'},
    {
        text: 'Notes',
        items: [{text: 'Demo', link: '/en/notes/demo/README.md'}]
    },
])

