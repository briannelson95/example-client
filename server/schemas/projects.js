import { IoBrush } from 'react-icons/io5'

export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    icon: IoBrush,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}