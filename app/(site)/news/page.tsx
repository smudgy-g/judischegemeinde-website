import Collection from '@/components/shared/Collection'
import { Header } from '@/components/shared/Header'
import Search from '@/components/shared/Search'
import { loadArticles } from '@/sanity/loader/loadQuery'

type ArticlesRouteProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const ArticleRoute = async ({ searchParams }: ArticlesRouteProps) => {
  const page = Number(searchParams?.page) || 1
  const searchText = (searchParams?.query as string) || ''
  const limit = 3
  const { data: articles, totalPages } = await loadArticles(searchText, limit, page)

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
        articles={articles}
        title={searchText ? 'Results' : 'News'}
        page={page}
        totalPages={totalPages}
        paginate
      />
    </section>
  )
}

export default ArticleRoute
