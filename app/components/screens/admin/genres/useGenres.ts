import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { toastError } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'
import { GenreService } from '@/services/genre.service'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce<string>(searchTerm, 500)

	const queryData = useQuery(['genre list', debouncedSearch], () => {
		return GenreService.getAll(debouncedSearch)
	}, {
		select: ({ data }) => data.map((genre): ITableItem => {
			return {
				_id: genre._id,
				editUrl: getAdminUrl(`genre/edit/${genre._id}`),
				items: [genre.name, genre.slug],
			}
		}),
		onError: (error) => toastError(error, 'Genre list'),
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation('delete genre', (genreId: string) => {
		return GenreService.delete(genreId)
	}, {
		onError: (error) => toastError(error, 'Delete genre'),
		onSuccess: () => {
			toastr.success('Delete user', 'delete was successful')
			queryData.refetch()
		},
	})

	return useMemo(() => ({
		handleSearch, ...queryData, searchTerm, deleteAsync
	}), [queryData, searchTerm, deleteAsync])
}
