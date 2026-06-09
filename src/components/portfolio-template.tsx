import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { BookOpen, ExternalLink, HomeIcon, Moon, Sun } from 'lucide-react'

export type Project = {
  title: string
  description: string
  href: string
  liveUrl?: string
  image: string
  alt: string
  type?: 'image' | 'logo'
  slug: string
  overview: string
  stack: string
  highlights: Array<string>
}

const navItems = [
  { label: 'Home', href: '/', icon: HomeIcon },
  { label: 'Projects', href: '/projects', icon: BookOpen },
]

const socialItems = [
  {
    label: 'X',
    href: 'https://x.com/ward_lavrijsen',
    src: 'https://cdn.simpleicons.org/x/000000',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/WardLavrijsen',
    src: 'https://cdn.simpleicons.org/github/181717',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ward-lavrijsen/',
    src: '/icons/linkedin.svg',
  },
]

export const projects: Array<Project> = [
  {
    title: 'Octanist',
    description: 'Offline conversion tracking for ad platforms',
    href: '/projects/octanist',
    liveUrl: 'https://octanist.com',
    slug: 'octanist',
    image: '/portfolio/octanist.png',
    alt: 'Octanist dashboard showing revenue attribution across ad channels',
    overview:
      'Octanist helps advertisers and agencies connect online leads to offline revenue. It brings ad platform clicks, lead qualification, closed deals, and deal value into one attribution workflow, so teams can see which campaigns actually generate business results.',
    stack:
      'Built as a modern SaaS product with attribution logic, lead management, consent-aware conversion data, platform integrations, CRM workflows, reporting dashboards, and server-side data processing.',
    highlights: [
      'Connects Google Ads, Meta, LinkedIn, Microsoft Ads, CRM data, and website leads.',
      'Sends enriched conversion data back to ad platforms for smarter optimization.',
      'Gives agencies and advertisers a practical view of revenue, ROAS, CPL, and campaign quality.',
    ],
  },
  {
    title: 'EPAdossier',
    description: 'ERP software for energy-label companies',
    href: '/projects/epadossier',
    liveUrl: 'https://epadossier.nl',
    slug: 'epadossier',
    image: '/portfolio/epadossier.png',
    alt: 'EPAdossier dashboard with dossiers, projects, invoices, and registrations',
    overview:
      'EPAdossier is ERP software for the energy-label sector in the Netherlands. It brings dossiers, projects, relations, invoices, registrations, planning signals, and daily operations into one system for companies that work with energy labels.',
    stack:
      'Built around structured dossier data, project status tracking, registration workflows, relationship management, invoicing, operational dashboards, and an interface designed for repeated daily use.',
    highlights: [
      'Centralizes active, overdue, expiring, and completed energy-label work.',
      'Combines dossier operations with projects, relations, invoices, registrations, and quick actions.',
      'The public site currently exposes an address search while the broader product is staged separately.',
    ],
  },
  {
    title: 'cronhost',
    description: 'Cron job hosting and monitoring',
    href: '/projects/cronhost',
    liveUrl: 'https://cronho.st',
    slug: 'cronhost',
    image: '/portfolio/cronhost.png',
    alt: 'cronhost landing page showing cron scheduling dashboard',
    overview:
      'cronhost is a webhook scheduler for creating and monitoring HTTP-based cron jobs. I have exited the project, but I built the product and the system behind it end-to-end.',
    stack:
      'Built as a full-stack infrastructure product with scheduled execution, REST API access, a TypeScript SDK, execution logs, retry handling, timezone-aware cron expressions, and a dashboard for managing jobs.',
    highlights: [
      'Built end-to-end before exiting the project.',
      'Supports dashboard-based scheduling and programmatic control through an API and SDK.',
      'Focused on reliable webhook execution, monitoring, request configuration, and execution history.',
    ],
  },
  {
    title: 'PicToLines',
    description: 'Turn photos into coloring pages',
    href: '/projects/pictolines',
    liveUrl: 'https://pictolines.com',
    slug: 'pictolines',
    image: '/portfolio/pictolines.png',
    alt: 'PicToLines upload interface for generating coloring pages',
    overview:
      'PicToLines is a focused AI tool that turns uploaded photos into printable coloring pages. The product is built around a simple upload flow, fast generation, downloadable results, and multilingual public pages.',
    stack:
      'Built as a web tool with image uploads, AI generation, localized marketing pages, download flows, pricing, and a narrow workflow that makes the output easy to understand.',
    highlights: [
      'Creates personalized coloring pages from user photos.',
      'Generates multiple variants so users can choose the result they like best.',
      'Designed as a small consumer product with a clear upload-to-download workflow.',
    ],
  },
  {
    title: 'EnergiekeZaak',
    description: 'Dutch property and energy-data platform',
    href: '/projects/energiekezaak',
    liveUrl: 'https://energiekezaak.nl',
    slug: 'energiekezaak',
    image: '/portfolio/energiekezaak.png',
    alt: 'EnergiekeZaak interface showing address data, maps, and building information',
    overview:
      'EnergiekeZaak is a Dutch address and property-data platform focused on complete vastgoed information for addresses in the Netherlands. It brings together address details, surfaces, energy labels, monuments, WOZ values, cadastral data, water data, EAN codes, energy delivery, and company information.',
    stack:
      'Built around structured address lookup, official data sources, property metadata, map-based context, PDF export, and a search-first interface for quickly inspecting Dutch addresses.',
    highlights: [
      'Works with a database of more than 9 million Dutch addresses.',
      'Combines energy and property information into one address-centered view.',
      'Useful for fast lookup, analysis, and reporting around Dutch real estate data.',
    ],
  },
]

const visibleProjects = projects

const stackItems = [
  {
    label: 'TypeScript',
    src: 'https://cdn.simpleicons.org/typescript/3178C6',
  },
  { label: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  {
    label: 'TanStack Start',
    src: 'https://cdn.simpleicons.org/tanstack/FF4154',
  },
  { label: 'React', src: 'https://cdn.simpleicons.org/react/61DAFB' },
  { label: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { label: 'Drizzle ORM', src: 'https://cdn.simpleicons.org/drizzle/C5F74F' },
  {
    label: 'PostgreSQL',
    src: 'https://cdn.simpleicons.org/postgresql/4169E1',
  },
  {
    label: 'Tailwind CSS',
    src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  },
  { label: 'Bun', src: 'https://cdn.simpleicons.org/bun/000000' },
  { label: 'Cloudflare', src: 'https://cdn.simpleicons.org/cloudflare/F38020' },
  { label: 'Vercel', src: 'https://cdn.simpleicons.org/vercel/000000' },
  { label: 'Stripe', src: 'https://cdn.simpleicons.org/stripe/635BFF' },
  { label: 'GitHub', src: 'https://cdn.simpleicons.org/github/181717' },
  { label: 'WordPress', src: 'https://cdn.simpleicons.org/wordpress/21759B' },
  { label: 'Docker', src: 'https://cdn.simpleicons.org/docker/2496ED' },
  { label: 'Lots of AI', src: '/icons/openai.svg' },
]

const skills = [
  'Product-minded full-stack development',
  'TypeScript, React, Next.js, and TanStack Start',
  'Server-side APIs and background workflows',
  'PostgreSQL, Drizzle ORM, and relational data modeling',
  'Authentication, authorization, and multi-tenant SaaS',
  'Stripe billing and subscription flows',
  'Cloudflare, Vercel, deployment, and infrastructure',
  'Technical SEO, analytics, and conversion tracking',
  'UI polish, accessibility, and responsive interfaces',
  'WordPress, client platforms, and internal tools',
  'Automation for repetitive operational workflows',
  'Turning rough product ideas into shipped software',
]

const experience = [
  {
    company: 'Trezma',
    href: 'https://trezma.com',
    role: 'Founder & Software Engineer',
    period: '2024 - Now',
  },
  {
    company: 'Mach8',
    role: 'AI Software Engineer',
    period: '2025 - 2026',
  },
  {
    company: 'ASML',
    role: 'Software Engineering Intern',
    period: '2024 - 2025',
  },
  {
    company: 'Online Aannemer',
    role: 'Digital Automation',
    period: '2023 - 2025',
  },
  {
    company: 'Brofiber',
    role: 'Full-Stack Engineer',
    period: '2021 - 2024',
  },
]

export function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ContributionCalendar />
      <Footer />
    </>
  )
}

export function HomePage() {
  return (
    <PortfolioShell>
      <Hero />
      <SelectedWork />
      <Stack />
      <AboutHome />
      <Experience />
    </PortfolioShell>
  )
}

export function ProjectsPageContent() {
  return (
    <PortfolioShell>
      <PageIntro
        title="Projects & experiments"
        description="A selection of tools, products, and experiments I've built over the years"
      />
      <section className="bigger-container projects-page-grid">
        <ProjectGrid items={visibleProjects} />
      </section>
    </PortfolioShell>
  )
}

export function ProjectDetailContent({ projectId }: { projectId: string }) {
  const project = getProject(projectId)
  const moreProjects = visibleProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2)

  return (
    <PortfolioShell>
      <article className="detail-page">
        <section className="project-detail-header container">
          <h1>{project.title}</h1>
          {project.liveUrl ? (
            <div className="detail-actions">
              <a className="link-underline" href={project.liveUrl}>
                View live
              </a>
            </div>
          ) : null}
        </section>
        <section className="detail-media container">
          <ProjectMedia project={project} />
        </section>
        <section className="section-padding container detail-content">
          <p>{project.overview}</p>
          <h2>Project stack</h2>
          <p>{project.stack}</p>
          <h2>Highlights</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
        <section className="section-padding bigger-container">
          <SectionHeader title="More projects" />
          <ProjectGrid items={moreProjects} />
        </section>
      </article>
    </PortfolioShell>
  )
}

export function NotFoundPage() {
  return (
    <PortfolioShell>
      <PageIntro
        title="Not found"
        description="The page you were looking for does not exist."
      />
    </PortfolioShell>
  )
}

function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document === 'undefined') {
      return 'light'
    }

    const initialTheme = document.documentElement.dataset.theme

    if (initialTheme === 'dark' || initialTheme === 'light') {
      return initialTheme
    }

    return 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <header className="site-header">
      <div className="header-container">
        <nav className="nav-group" aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <a
                aria-label={item.label}
                className="round-control has-tooltip"
                data-tooltip={item.label}
                href={item.href}
                key={item.label}
              >
                <Icon size={18} strokeWidth={2.1} />
              </a>
            )
          })}
        </nav>

        <div className="nav-group nav-actions" aria-label="Theme and social">
          <div className="theme-switcher" data-theme-value={theme}>
            <span aria-hidden="true" />
            <button
              aria-label="Light mode"
              aria-pressed={theme === 'light'}
              className="has-tooltip"
              data-tooltip="Light"
              type="button"
              onClick={() => setTheme('light')}
            >
              <Sun size={18} strokeWidth={2.1} />
            </button>
            <button
              aria-label="Dark mode"
              aria-pressed={theme === 'dark'}
              className="has-tooltip"
              data-tooltip="Dark"
              type="button"
              onClick={() => setTheme('dark')}
            >
              <Moon size={18} strokeWidth={2.1} />
            </button>
          </div>
          {socialItems.map((item) => (
            <a
              aria-label={item.label}
              className="round-control has-tooltip"
              data-tooltip={item.label}
              href={item.href}
              key={item.label}
            >
              <img className="social-logo" src={item.src} alt="" />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        <img
          className="avatar"
          src="/portfolio/profile-small.jpg"
          alt="Ward Lavrijsen"
        />
        <h1>Hi, I&apos;m Ward</h1>
        <p>
          Full-stack software engineer building web products around attribution,
          automation, ERP systems, and operational workflows.
        </p>
        <a
          className="link-underline hero-email"
          href="mailto:hi@wardlavrijsen.com"
        >
          hi@wardlavrijsen.com
        </a>
      </div>
    </section>
  )
}

function PageIntro({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <section className="page-intro container">
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </section>
  )
}

function SectionHeader({
  title,
  action,
  href,
}: {
  title: string
  action?: string
  href?: string
}) {
  return (
    <div className="section-header container">
      <h2>{title}</h2>
      {action && href ? (
        <a className="link-underline" href={href}>
          {action}
        </a>
      ) : null}
    </div>
  )
}

function SelectedWork() {
  return (
    <section className="section-padding bigger-container selected-work">
      <SectionHeader title="Selected work" action="View all" href="/projects" />
      <ProjectGrid items={visibleProjects.slice(0, 2)} />
    </section>
  )
}

function ProjectGrid({ items }: { items: Array<Project> }) {
  return (
    <ul className="project-grid">
      {items.map((project) => (
        <li key={project.title}>
          <a className="project-card" href={project.href}>
            <ProjectMedia project={project} />
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}

function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className="project-media">
      <div className={project.type === 'logo' ? 'logo-frame' : 'media-frame'}>
        <img src={project.image} alt={project.alt} />
      </div>
    </div>
  )
}

function Stack() {
  return (
    <section className="section-padding bigger-container stack-section">
      <h2 className="container standalone-heading">My stack</h2>
      <ul className="stack-list" aria-label="My stack">
        {stackItems.map((item) => (
          <li key={item.label}>
            <a
              href="/"
              aria-label={item.label}
              className="has-tooltip"
              data-tooltip={item.label}
            >
              <img className="stack-icon" src={item.src} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

function AboutHome() {
  return (
    <section className="section-padding bigger-container about-section">
      <div className="container about-copy">
        <h2>About</h2>
        <div>
          <p>
            I&apos;m a full-stack software engineer from the Netherlands. I
            build practical web applications and companies around problems that
            are worth solving properly.
          </p>
          <p>
            My current work is focused on Octanist, software for offline
            conversion tracking and attribution in digital advertising, and
            EPAdossier, ERP software for energy-label companies in the
            Netherlands.
          </p>
          <p>
            I like working close to the product: shaping the interface,
            designing the data model, building the backend, and shipping the
            details that make a tool feel reliable in daily use. I usually move
            fast, keep pushing things forward, and prefer learning from shipped
            software over sitting too long on theory.
          </p>
          <p>
            I also work a lot with coding agents like Codex, Claude Code, and
            Cursor. They help me move faster from idea to working software,
            while keeping enough control over the architecture, product
            direction, and final implementation quality.
          </p>
        </div>
      </div>

      <ul className="about-gallery" aria-label="About images">
        <li>
          <AboutImage alt="Ward Lavrijsen" src="/portfolio/me-1.jpg" />
        </li>
        <li>
          <AboutImage alt="Ward Lavrijsen" src="/portfolio/me-2.webp" />
        </li>
        <li>
          <AboutImage alt="Ward Lavrijsen" src="/portfolio/me-3.png" />
        </li>
      </ul>
    </section>
  )
}

function AboutImage({ alt, src }: { alt: string; src: string }) {
  return (
    <div className="about-image-wrap">
      <img src={src} alt={alt} />
    </div>
  )
}

function Experience() {
  return (
    <section className="section-padding container experience-section">
      <h2 className="standalone-heading">Experience</h2>
      <div className="experience-grid">
        <ul className="experience-list">
          {experience.map((item) => (
            <li key={item.company}>
              {item.href ? (
                <a
                  className="experience-company link-underline"
                  href={item.href}
                >
                  {item.company}
                  <ExternalLink size={14} strokeWidth={2} aria-hidden="true" />
                </a>
              ) : (
                <p className="experience-company">{item.company}</p>
              )}
              <p>{item.role}</p>
              <span>{item.period}</span>
            </li>
          ))}
        </ul>

        <div className="skills-list">
          <p>Skills</p>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function ContributionCalendar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="calendar-section bigger-container">
      {mounted ? <GitHubCalendar username="WardLavrijsen" /> : null}
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="link-underline" href="mailto:hi@wardlavrijsen.com">
          hi@wardlavrijsen.com
        </a>
      </div>
    </footer>
  )
}

function getProject(projectId: string) {
  return (
    visibleProjects.find((project) => project.slug === projectId) ??
    visibleProjects[0]
  )
}
