import { createFileRoute } from '@tanstack/react-router'

import { ProjectDetailContent } from '../components/portfolio-template'

export const Route = createFileRoute('/projects/$projectId')({
  component: ProjectDetailPage,
})

function ProjectDetailPage() {
  const { projectId } = Route.useParams()

  return <ProjectDetailContent projectId={projectId} />
}
