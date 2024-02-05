import type { PortableTextBlock } from '@portabletext/types'

// export interface MenuItem {
//   _type: string;
//   slug?: string;
//   title?: string;
// }

export interface SocialLinks {
  facebook?: string
  instagram?: string
  xTwitter?: string
}

export interface Link {
  href: string
  name: string
}

export interface Article {
  _id: string
  title: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: AuthorPayload
  slug?: string
  content?: any
  video?: any
}

// Page payloads

export interface HomePagePayload {
  title?: string
  heading?: string
  overview?: PortableTextBlock[]
  footer?: PortableTextBlock[]
  showcaseArticles?: Article[]
  backgroundImage?: any
}

export interface ImpressumPagePayload {
  heading?: string
  overview?: PortableTextBlock[]
  content?: PortableTextBlock[]
}

export interface AboutPagePayload {
  title?: string
  overview?: PortableTextBlock[]
  content?: PortableTextBlock[]
  coverImage?: any
}

// export interface PagePayload {
//   content?: PortableTextBlock[]
//   // heading?: string
//   overview?: PortableTextBlock[]
//   title?: string
//   // slug?: string
// }

export interface AuthorPayload {
  name?: string
  picture?: any
}

export interface ArticlesQueryPayload {
  articles: Article[]
  totalArticles: number
}

export interface SettingsPayload {
  title?: string
  socialMediaLinks?: SocialLinks
  // menuItems?: MenuItem[];
  footer: PortableTextBlock[]
  ogImage?: {
    title?: string
  }
  logoImage?: any
}
