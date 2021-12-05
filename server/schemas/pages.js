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
            name: 'pageDescription',
            title: 'Page Description',
            type: 'blockContent',
        },
        {
            name: 'pageSubtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'Used for H2s or to go with CTAs',
        },
        {
            name: 'cta',
            title: 'CTA',
            type: 'string',
            description: 'Prompt a user to do something',
            validation: Rule => Rule.max(15).warning("Try to keep this short")
        },
        {
            name: 'ctaDestination',
            title: 'CTA Destination',
            type: 'slug',
            description: 'Link to bring your users to',
        },
        {
            name: 'content',
            title: 'Page Content',
            type: 'blockContent'
        }
    ],
    preview: {
        select: {
            title: 'pageTitle',
            subtitle: 'pageDescription',
        },
    },
}