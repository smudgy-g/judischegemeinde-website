import Image from 'next/image'
import Link from 'next/link'

export default function SocialLink({
  type,
  href,
}: {
  type: string
  href: string
}) {
  return (
    <Link href={href} className="link text-primary">
      <Image
        src={`/assets/icons/${type}.svg`}
        height={30}
        width={30}
        className="link"
        alt={type}
      />
    </Link>
  )
}
