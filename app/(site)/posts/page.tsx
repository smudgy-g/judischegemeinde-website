import Collection from '@/components/shared/Collection'
import { Header } from '@/components/shared/Header'
import Search from '@/components/shared/Search'
import { loadPosts } from '@/sanity/loader/loadQuery'
import { PostPayload } from '@/types'

type PostsPageProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const PostsPage = async ({ params, searchParams }: PostsPageProps) => {
  const searchText = (searchParams?.query as string) || ''
  const posts = await loadPosts(searchText) as PostPayload[]

  return (
    <section className="wrapper">
      <Header
        title="Explore"
        description="Browse our library of community information and news"
      />
      <Search />
      {posts ? (
        <Collection posts={posts} />
      ) : (
        <p>There are currently no posts.</p>
      )}
    </section>
  )
}

export default PostsPage
