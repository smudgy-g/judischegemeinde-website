import { Article } from '@/types'

import Pagination from './Pagination'
import ArticlePreviewCard from './ArticlePreviewCard'

export default function Collection({
  articles,
  title,
  page,
  totalPages = 0,
  urlParamName,
  paginate
}: {
  articles: Article[]
  title?: string
  page: number
  totalPages?: number
  urlParamName?: string
  paginate?: boolean
}) {
  return (
    <section className='flex flex-col items-stretch'>
      {title && <h2 className="h2-bold self-start">{title}</h2>}
      {articles.length > 0 ? (
        <>
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {articles.map((article) => (
              <ArticlePreviewCard
                key={article._id}
                title={article.title}
                coverImage={article.coverImage}
                date={article.date}
                author={article.author}
                slug={article.slug}
                excerpt={article.excerpt}
              />
            ))}
          </div>
          <div className='self-center'>
          {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )} 

          </div>
        </>
      ) : (
        <div className="flex items-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="h3-bold md:h5-bold">There are currently no articles</h3>
          <p className="">Please come back later.</p>
        </div>
      )}
    </section>
  )
}
