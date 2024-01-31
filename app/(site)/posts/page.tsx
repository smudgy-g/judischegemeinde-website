import Collection from '@/components/shared/Collection'
import { Header } from '@/components/shared/Header'
import Search from '@/components/shared/Search'
import { loadPosts } from '@/sanity/loader/loadQuery'

type PostsPageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const PostsPage = async ({ searchParams }: PostsPageProps) => {
  const page = Number(searchParams?.page) || 1
  const searchText = (searchParams?.query as string) || ''
  const limit = 2
  const { data: posts, totalPages } = await loadPosts(searchText, limit, page)
  console.log('totalPages page component', totalPages)
  console.log('page page component', page)

  return (
    <section className="wrapper mt-8">
      <Header
        title="Explore"
        description="Browse our library of community information and news"
      />
      <div className="mb-10">
        <Search />
      </div>

      <Collection
        posts={posts}
        title={searchText && 'Results'}
        page={page}
        totalPages={totalPages}
        paginate
      />
    </section>
  )
}

export default PostsPage
