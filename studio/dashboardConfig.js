export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '626a9d0df9a48814b9849f70',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pfruevaw',
                  apiId: '11b0fc61-c745-419a-8147-254fe778732c'
                },
                {
                  buildHookId: '626a9d0dc2944e14615e08b6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-e6o63kox',
                  apiId: 'd3a1b9d0-e0b9-4d52-a332-d49467b63314'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinjerrick/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-e6o63kox.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
