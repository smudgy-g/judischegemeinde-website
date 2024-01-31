/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import { locate } from '@/sanity/plugins/locate'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
// import page from '@/sanity/schemas/documents/page'
import about from '@/sanity/schemas/singletons/about'
import home from '@/sanity/schemas/singletons/home'
import settings from '@/sanity/schemas/singletons/settings'

import author from './sanity/schemas/documents/author'
import post from './sanity/schemas/documents/post'
import link from './sanity/schemas/objects/link'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Judischegemeinde Website'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      about,
      // Documents
      // page,
      post,
      author,
      // Objects
      link,
    ],
  },
  plugins: [
    deskTool({
      structure: pageStructure([home, settings, about]),
    }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name, about.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
