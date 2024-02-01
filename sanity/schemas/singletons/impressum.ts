import { BlockquoteIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'impressum',
  title: 'Impressum',
  type: 'document',
  icon: BlockquoteIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'heading',
      description: 'This field is the heading used on the impressum page.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'array',
      name: 'content',
      title: 'Content',
      description: "This is where you can write the page's content.",
      of: [
        // Paragraphs
        defineArrayMember({
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
          },
          styles: [],
        }),

        defineField({
          type: 'image',
          icon: ImageIcon,
          name: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          preview: {
            select: {
              imageUrl: 'asset.url',
              title: 'caption',
            },
          },
          fields: [
            defineField({
              title: 'Caption',
              name: 'caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt text',
              description:
                'Alternative text for screenreaders. Falls back on caption if not set',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'Impressum',
    },
    prepare({ title }) {
      return {
        subtitle: 'Impressum',
        title,
      }
    },
  },
})
