import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { toastError } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'
import { ActorService } from '@/services/actor.service'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce<string>(searchTerm, 500)

	const queryData = useQuery(['actor list', debouncedSearch], () => {
		return ActorService.getAll(debouncedSearch)
	}, {
		select: ({ data }) => data.map((actor): ITableItem => {
			return {
				_id: actor._id,
				editUrl: getAdminUrl(`actor/edit/${actor._id}`),
				items: [actor.name, String(actor.countMovies)],
			}
		}),
		onError: (error) => toastError(error, 'Actor list'),
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation('delete actor', (actorId: string) => {
		return ActorService.delete(actorId)
	}, {
		onError: (error) => toastError(error, 'Delete actor'),
		onSuccess: () => {
			toastr.success('Delete user', 'delete was successful')
			queryData.refetch()
		},
	})

	return useMemo(() => ({
		handleSearch, ...queryData, searchTerm, deleteAsync
	}), [queryData, searchTerm, deleteAsync])
}
