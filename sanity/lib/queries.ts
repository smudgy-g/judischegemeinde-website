import { groq } from 'next-sanity'

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    heading,
    coverImage {
      ...,
      "lqip": asset->metadata.lqip
    },
    overview,
    title,
    "slug": slug.current,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    title,
    socialLinks[]->{
      name,
      href
    },
    
    ogImage,
  }
`
// menuItems[]->{
//   _type,
//   "slug": slug.current,
//   title
// },

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
    ...,
    showcasePosts[] -> {
      ${postFields}
    }
  }
`

export const aboutPageQuery = groq`
  *[_type == "about"][0]{
    _id,
    overview,
    title,
    content,
    coverImage {
      ...,
      "lqip": asset->metadata.lqip
    },
  }
`

export const loadPostsQuery = groq`{
"totalPosts": count(*[_type == "post"]),
"posts": *[_type == "post"] | order(date desc, _updatedAt desc) [$start...$end] {
  ${postFields}
  }
}
`

export const searchPostsQuery = groq`{
"totalPosts": count(*[_type == "post" && (pt::text(content) match $query || title match $query || excerpt match $query)]),
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
