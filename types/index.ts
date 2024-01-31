import type { PortableTextBlock } from '@portabletext/types'

// export interface MenuItem {
//   _type: string;
//   slug?: string;
//   title?: string;
// }

export interface Link {
  href: string;
  name: string;
}

export interface Post {
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
  showcasePosts?: Post[]
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
//   coverImage?: any
// }


export interface AuthorPayload {
  name?: string
  picture?: any
}

export interface PostsQueryPayload {
  posts: Post[],
  totalPosts: number
}

export interface SettingsPayload {
  title?: string
  socialLinks?: Link[];
  // menuItems?: MenuItem[];
  footer: PortableTextBlock[]
  ogImage?: {
    title?: string
  }
}