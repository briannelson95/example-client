export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Meta Description',
            type: 'text',
            description: 'The little decription that shows up when you google a website'
        },
        {
            name: 'keywords',
            title: 'Meta Keywords',
            type: 'tags',
            description: 'The keywords that you can set so Google knows what your site is about.'
        },
        {
            name: 'primaryColor',
            title: 'Primary Color',
            type: 'color',
            description: 'Used to generate the primary accent color for websites, press matertials, etc'
        },
        {
            name: 'secondaryColor',
            title: 'Secondary Color',
            type: 'color',
            description: 'Used to generate the secondary accent color for websites, press materials, etc'
        }
    ],
}