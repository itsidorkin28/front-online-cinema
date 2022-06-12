import React, { ChangeEvent, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useQuery } from 'react-query'
import { MovieService } from '@/services/movie.service'

const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce<string>(searchTerm, 500)

	const { isSuccess, data } = useQuery(['search movie list', debouncedSearch], () => {
		return MovieService.getAll(debouncedSearch)
	}, {
		select: ({ data }) => data,
		enabled: !!debouncedSearch,
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return {isSuccess, data, handleSearch, searchTerm}
}

export default useSearch
