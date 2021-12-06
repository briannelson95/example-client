export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'object',
    fields: [
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                    options: {hotspot: true},
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative text',
                            type: 'string'
                        },
                    ],
                },
            ],
            options: {
                layout: 'grid',
            },
        },
    ],
}