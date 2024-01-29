'use client'

import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils'

import { Input } from '../ui/input'

const Search = () => {
  const [query, setQuery] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = ''
      if (query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: query,
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['query'],
        })
      }
      router.push(newUrl, { scroll: false })
    }, 400)

    return () => {
      clearTimeout(delayDebounceFn)
    }
  }, [query, router, searchParams])

  return (
    <div className="relative flex items-center w-full">
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
        className='absolute left-4'
      />
      <Input
        type="text"
        placeholder="Search our posts..."
        onChange={(e) => setQuery(e.target.value)}
        className='pl-12'
      />
    </div>
  )
}

export default Search
