export default {
    name: 'form',
    title: 'Form',
    type: 'object',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string',
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'form',
            title: 'Form',
            type: 'string',
            description: 'Select form type',
            options: {
                list: ['newsletter', 'register', 'contact'],
            },
        },
    ],
}