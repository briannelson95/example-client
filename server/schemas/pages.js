import { IoDocuments } from 'react-icons/io5'

export default {
    name: 'page',
    title: 'Pages',
    icon: IoDocuments,
    type: 'document',
    fields: [
        {
            name: 'pageTitle',
            title: 'Page Title',
            type: 'string',
            description: 'Used for meta data and some H1s',
            validation: Rule => Rule.max(120).warning("A title shouldn't be more than 120 characters"),
            validation: Rule => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'pageTitle',
                maxLength: 96,
            },
        },
        {
            name: 'pageDescription',
            title: 'Page Description',
            type: 'blockContent',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            description: 'Used for Sanity Backend at the moment'
        },
        {
            name: 'pageBuilder',
            title: 'Page Builder',
            type: 'array',
            of: [
                {type: 'hero'},
                {type: 'textWithIllustration'},
                {type: 'blockContent'},
                {type: 'gallery'},
                {type: 'form'},
                {type: 'video'},
            ]
        },
    ],
    preview: {
        select: {
            title: 'pageTitle',
            subtitle: 'pageDescription',
            media: 'image'
        },
    },
}