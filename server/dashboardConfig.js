export default {
    widgets: [
        // {
        //     name: 'structure-menu',
        // },
        {
            name: 'document-list',
            options: {
                title: 'Last Edited Post',
                types: ['posts'],
                order: '_updatedAt desc'
            },
            layout: {
                width: 'auto',
                height: 'small'
            }
        },
        {
            name: 'document-list', 
            options: {
                title: 'Pages', 
                order: '_createdAt asc', 
                types: ['page'],
            },
            layout: {
                width: 'medium',
                height: 'small'
            }
        },
        {
            name: 'project-info',
            layout: {
                width: 'auto',
                height: 'small'
            }
        },
        {
            name: 'project-users',
            layout: {
                width: 'full',
                height: 'small'
            }
        },
        
    ]
}