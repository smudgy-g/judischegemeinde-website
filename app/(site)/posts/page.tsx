import Collection from "@/components/shared/Collection"
import { Header } from "@/components/shared/Header"
import { loadPosts } from "@/sanity/loader/loadQuery"

const PostsPage = async () => {
  const posts = await loadPosts()
  return <section className="wrapper">
    <Header title="Explore" description="Browse our library of cumminuty information and news"/>
    {posts ? (
    
    <Collection posts={posts} />
    ): (
      <p>There are currently no posts.</p>
    )}
  </section>
}

export default PostsPage
