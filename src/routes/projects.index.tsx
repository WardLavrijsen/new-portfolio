import { createFileRoute } from '@tanstack/react-router'

import { ProjectsPageContent } from '../components/portfolio-template'

export const Route = createFileRoute('/projects/')({
  component: ProjectsPageContent,
  head: () => ({
    meta: [
      {
        title: 'Projects | Ward Lavrijsen',
      },
      {
        name: 'description',
        content:
          'Projects and product work by Ward Lavrijsen, full-stack software engineer.',
      },
      {
        property: 'og:title',
        content: 'Projects | Ward Lavrijsen',
      },
      {
        property: 'og:description',
        content:
          'Projects and product work by Ward Lavrijsen, full-stack software engineer.',
      },
      {
        property: 'og:url',
        content: 'https://wardlavrijsen.com/projects',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://wardlavrijsen.com/projects',
      },
    ],
  }),
})
