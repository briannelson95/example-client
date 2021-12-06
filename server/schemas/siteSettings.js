export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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
            description: 'Used to generate the secondart accent color for websites, press materials, etc'
        }
    ],
}