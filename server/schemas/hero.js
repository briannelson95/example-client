export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        },
        {
            name: 'cta',
            title: 'Call to Action',
            type: 'callToAction',
            description: 'What do you want visitors to do?'
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
                },
            ]
        },
        

    ],
}