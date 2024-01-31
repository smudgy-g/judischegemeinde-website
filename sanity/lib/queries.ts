import { groq } from 'next-sanity'

// export const homePageQuery = groq`
//   *[_type == "home"][0]{
//     _id,
//     overview,
//     showcaseProjects[]->{
//       _type,
//       coverImage,
//       overview,
//       "slug": slug.current,
//       tags,
//       title,
//     },
//     title,
//   }
// `

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    title,
    link[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`

const postFields = groq`
  _id,
  title,
  date,
  _updatedAt,
  excerpt,
  content,
  coverImage {
    ...,
    "lqip": asset->metadata.lqip
  },
  "slug": slug.current,
  "author": author->{name, picture},
  "video": video.asset->url
`
export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
    showcasePosts[] -> {
      ${postFields}
    }
  }
`

export const aboutPageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    title,
    content,
    socialLinks[] -> {
      
    }
  }
`

export const loadPostsQuery = groq`{
"totalPosts": count(*[_type == "post"]),
"posts": *[_type == "post" && (pt::text(content) match $query || title match $query || excerpt match $query)] 
| score(pt::text(content) match $query, boost(title match $query, 3), boost(excerpt match $query, 2)) | order(date desc, _updatedAt desc) [$start...$end] {
  ${postFields}
  }
}
`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
