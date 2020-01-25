export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2c75af8ac2c8d5bf4ef9fb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6ysudd4u',
                  apiId: '14700234-a03f-4bf0-af92-67539f95672e'
                },
                {
                  buildHookId: '5e2c75afc666a2b6b22f66f0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yziuobuy',
                  apiId: '2085c7b6-4613-452f-a57f-fc29c7858c50'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TheWebFoundryStu/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yziuobuy.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
