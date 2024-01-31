import { Post } from '@/types'

import Pagination from './Pagination'
import PostPreviewCard from './PostPreviewCard'

export default function Collection({
  posts,
  title,
  page,
  totalPages = 0,
  urlParamName,
  paginate
}: {
  posts: Post[]
  title?: string
  page: number
  totalPages?: number
  urlParamName?: string
  paginate?: boolean
}) {
  return (
    <section className='flex flex-col items-stretch'>
      {title && <h2 className="h2-bold self-start">{title}</h2>}
      {posts.length > 0 ? (
        <>
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostPreviewCard
                key={post._id}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
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
          <h3 className="h3-bold md:h5-bold">There are currently no posts</h3>
          <p className="">Please come back later.</p>
        </div>
      )}
    </section>
  )
}

//gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32
