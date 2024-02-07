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
    socialMediaLinks,
    ogImage,
    logoImage {
      ...,
      "lqip": asset->metadata.lqip
    },
    "press_kitURL": press_kit.asset->url
  }
`
// menuItems[]->{
//   _type,
//   "slug": slug.current,
//   title
// },

const articleFields = groq`
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
    showcaseArticles[] -> {
      ${articleFields}
    },
    backgroundImage {
      ...,
      "lqip": asset->metadata.lqip
    },
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

export const impressumPageQuery = groq`
  *[_type == "impressum"][0]{
    _id,
    heading,
    content,
  }
`

export const agbPageQuery = groq`
  *[_type == "agb"][0]{
    _id,
    heading
    content,
   
  }
`

export const loadArticlesQuery = groq`{
"totalArticles": count(*[_type == "article"]),
"articles": *[_type == "article"] | order(date desc, _updatedAt desc) [$start...$end] {
  ${articleFields}
  }
}
`

export const searchArticlesQuery = groq`{
"totalArticles": count(*[_type == "article" && (pt::text(content) match $query || title match $query || excerpt match $query)]),
"articles": *[_type == "article" && (pt::text(content) match $query || title match $query || excerpt match $query)] 
| score(pt::text(content) match $query, boost(title match $query, 3), boost(excerpt match $query, 2)) | order(date desc, _updatedAt desc) [$start...$end] {
  ${articleFields}
  }
}
`

export const articleSlugsQuery = groq`
*[_type == "article" && defined(slug.current)][].slug.current
`

export const articleBySlugQuery = groq`
*[_type == "article" && slug.current == $slug][0] {
  ${articleFields}
}
`
