import { createFileRoute } from '@tanstack/react-router'

import { HomePage } from '../components/portfolio-template'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    links: [
      {
        rel: 'canonical',
        href: 'https://wardlavrijsen.com/',
      },
    ],
  }),
})
