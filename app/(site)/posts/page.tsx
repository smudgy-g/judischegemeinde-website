import Collection from '@/components/shared/Collection'
import { Header } from '@/components/shared/Header'
import Search from '@/components/shared/Search'
import { loadPosts } from '@/sanity/loader/loadQuery'
import { PostPayload } from '@/types'

type PostsPageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const PostsPage = async ({ searchParams }: PostsPageProps) => {
  const searchText = (searchParams?.query as string) || ''
  const posts = (await loadPosts(searchText)) as PostPayload[]

  return (
    <section className="wrapper mt-8">
      <Header
        title="Explore"
        description="Browse our library of community information and news"
      />
      <div className="mb-10">
        <Search />
      </div>

      <Collection posts={posts} title={searchText && 'Results'} />
    </section>
  )
}

export default PostsPage
