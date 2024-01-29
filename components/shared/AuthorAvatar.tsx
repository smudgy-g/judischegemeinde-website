import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'
import { AuthorPayload } from '@/types'

export default function AuthorAvatar(props: AuthorPayload) {
  const { name, picture } = props

  const imageSrc =
    urlForImage(picture)?.height(96).width(96).fit('crop').url() ||
    'https://source.unsplash.com/96x96/?face'
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <Image
          src={imageSrc}
          className="rounded-full"
          height={96}
          width={96}
          alt={picture?.alt ?? name}
        />
      </div>
      <div className="text-sm font-bold">{name}</div>
    </div>
  )
}
