import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import Collection from '@/components/shared/Collection'
import { Header } from '@/components/shared/Header'
import HeroPost from '@/components/shared/HeroPost'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload, PostPayload, SettingsPayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  posts?: PostPayload[] | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({
  data,
  encodeDataAttribute,
  posts,
}: HomePageProps) {
  const [heroPost, ...morePosts] = posts || [];

  const { overview = [], title = "" } = data ?? {};

  
  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          // date={allPosts[0].date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <Collection posts={morePosts} />}
      {/* Showcase projects */}
      {/* {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project?._type, project?.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={href}
                data-sanity={encodeDataAttribute?.([
                  'showcaseProjects',
                  key,
                  'slug',
                ])}
              >
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )} */}
    </div>
  )
}

export default HomePage
