import Image from 'next/image'
import Link from 'next/link'
import { NumberDiff } from 'sanity'

export default function SocialLink({
  type,
  href,
  size,
}: {
  type: string
  href: string
  size?: number
}) {
  return (
    <Link href={href} className="link text-primary">
      <Image
        src={`/assets/icons/${type}.svg`}
        height={size || 30}
        width={size || 30}
        className="link"
        alt={type}
      />
    </Link>
  )
}
