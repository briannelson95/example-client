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
            validation: Rule => Rule.max(90)
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