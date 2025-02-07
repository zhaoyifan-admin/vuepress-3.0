import {defineNoteConfig} from 'vuepress-theme-plume'

export const home = defineNoteConfig({
    // 声明笔记的目录，相对于 `notes.dir`，这里表示 `notes/homes` 目录
    dir: 'homes',
    // 声明笔记的链接前缀，与 `notes.link` 拼接，这里表示 `/homes/`
    // 笔记内的所有文章会以 `/homes/` 作为访问链接前缀。
    link: '/homes/',
    sidebar: [
        { text: '快速上手', link: '/homes/installation/',icon: 'logos:vue' },
        { text: '全局配置', link: '/homes/global/',icon: 'icon-park:setting' },
        { text: '全局API', link: '/homes/api/',icon: 'tabler:api' },
        { text: '国际化', link: '/homes/locale/',icon: 'ix:language-filled' },
    ],
})