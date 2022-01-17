import { IoShare } from 'react-icons/io5'

export default {
    name: 'posts',
    title: 'Blog',
    type: 'document',
    icon: IoShare,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'team'},
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage'
        },
        prepare(selection) {
            const {author} = selection
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            })
        }
    }
}