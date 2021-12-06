import { IoLayers } from 'react-icons/io5'

export default {
    name: 'parentPage',
    type: 'document',
    icon: IoLayers,
    title: 'Page Builder',
    fields: [
        {
            name: 'pageBuilder',
            title: 'Page Builder',
            type: 'array',
            of: [
                {type: 'hero'},
                {type: 'textWithIllustration'},
                {type: 'callToAction'},
                {type: 'paragraph'},
                {type: 'gallery'},
                {type: 'form'},
                {type: 'video'},
            ]
        }
    ],
}