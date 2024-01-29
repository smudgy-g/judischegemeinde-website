'use client'

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
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-2xl bg-grey-50 px-4 py-2">
      
      <Input
        type="text"
        placeholder="Search our posts..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default Search
