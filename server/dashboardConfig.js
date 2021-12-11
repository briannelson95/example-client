export default {
    widgets: [
        // {
        //     name: 'structure-menu',
        // },
        {
            name: 'document-list', 
            options: {
                title: 'Pages', 
                order: '_createdAt asc', 
                types: ['page'],
            },
            layout: {
                width: 'small',
                height: 'small'
            }
        },
        {
            name: 'document-list',
            options: {
                title: 'Last Edited Blog Post',
                types: ['posts'],
                order: '_updatedAt desc'
            },
            layout: {
                width: 'medium',
                height: 'small'
            }
        },
        
        {
            name: 'document-list',
            options: {
                title: 'Team',
                types: ['team'],
                order: 'name asc',
            },
            layout: {
                width: 'small',
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
                width: 'auto',
                height: 'small'
            }
        },
        
    ]
}