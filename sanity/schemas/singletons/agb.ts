import { BlockContentIcon, ImageIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'agb',
  title: 'AGB',
  type: 'document',
  icon: BlockContentIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'heading',
      description: 'This field is the heading used on the AGB page.',
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
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'AGB',
      }
    },
  },
})
