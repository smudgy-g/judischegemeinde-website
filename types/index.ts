import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string;
  slug?: string;
  title?: string;
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}



// export interface SettingsPayload {
//   title?: any
//   footer?: PortableTextBlock[]
//   description?: any[]
//   ogImage?: Image
//   menuItems?: MenuItem[];
// }


export interface AuthorPayload {
  name?: string
  picture?: any
}

export interface PostPayload {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  _updatedAt?: string
  excerpt?: string
  author?: AuthorPayload
  slug?: string
  content?: any
  video?: any
}

export interface SettingsPayload {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
  footer: PortableTextBlock[]
}
