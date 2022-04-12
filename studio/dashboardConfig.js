export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6255d9b2c173b012b7be28ee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g67kns5b',
                  apiId: '073c58b8-c6fb-4906-a324-53a9c370c277'
                },
                {
                  buildHookId: '6255d9b371ca2f138839bc16',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5bgobtg9',
                  apiId: '45c95ad4-323d-4bc0-8959-71e0c839a9f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AAnnorseth/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5bgobtg9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
