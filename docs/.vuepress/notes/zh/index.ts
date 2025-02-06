import {defineNotesConfig} from 'vuepress-theme-plume'
import {home} from './home'
import {demo} from './demo'
import {doc} from './doc'
import {form} from './form'

export const zhNotes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [
        demo,
        home,
        doc,
        form
    ],
})