import TwitterUrl from "../components/TwitterUrl";
import { IoPeople } from 'react-icons/io5'

export default {
    name: 'team',
    title: 'Team',
    icon: IoPeople,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required().max(96)
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'twitter',
            title: 'Twitter Url',
            type: 'url',
            inputComponent: TwitterUrl,
            options: {
                prepend: 'https://twitter.com/'
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                    validation: Rule => Rule.required().max(25)
                },
            ],
        },
        
        {
            name: 'bio',
            title: 'Bio',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}