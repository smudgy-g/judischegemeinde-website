import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  description?: any
  title?: string
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={`${centered ? 'text-center' : 'w-5/6 lg:w-3/5'}`}>
      {title && (
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
      )}
      {description && (
        <div className="mt-4 mb-8 font-serif text-xl text-gray-600 md:text-2xl">
          {typeof description == 'string' ? (
            <p>{description}</p>
          ) : (
            <CustomPortableText value={description} />
          )}
        </div>
      )}
    </div>
  )
}
