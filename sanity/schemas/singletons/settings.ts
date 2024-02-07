import { CogIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description:
        'This field is the title of your website. It will be used for the footer',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    {
      title: 'Social Media Links',
      name: 'socialMediaLinks',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'string', title: 'Facebook' },
        { name: 'instagram', type: 'string', title: 'Instagram' },
        { name: 'xTwitter', type: 'string', title: 'X (Twitter)' },
      ],
    },
    {
      title: 'Press Kit',
      name: 'press_kit',
      type: 'file',
      description:
        'This is a downloadable file. The link will be put in the footer.',
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        },
      ],
    },
    // defineField({
    //   name: 'menuItems',
    //   title: 'Menu Item list',
    //   description: 'Links displayed on the header of your site.',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Reference',
    //       type: 'reference',
    //       to: [
    //         {
    //           type: 'home',
    //         },
    //         {
    //           type: 'page',
    //         },
    //       ],
    //     },
    //   ],
    // }),

    defineField({
      name: 'footer',
      description:
        'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer Info',
      type: 'array',
      of: [
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
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
