import { ChangeEvent, useMemo, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useMutation, useQuery } from 'react-query'
import { UserService } from '@/services/user.service'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import { getAdminUrl } from '@/config/url.config'
import { convertMongoDate } from '@/utils/date/convertMongoDate'
import { toastError } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const debouncedSearch = useDebounce<string>(searchTerm, 500)

	const queryData = useQuery(['user list', debouncedSearch], () => {
		return UserService.getAll(debouncedSearch)
	}, {
		select: ({ data }) => data.map((user): ITableItem => {
			return {
				_id: user._id,
				editUrl: getAdminUrl(`user/edit/${user._id}`),
				items: [user.email, convertMongoDate(user.createdAt)],
			}
		}),
		onError: (error) => toastError(error, 'User list'),
	})

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation('delete user', (userId: string) => {
		return UserService.deleteUser(userId)
	}, {
		onError: (error) => toastError(error, 'Delete user'),
		onSuccess: () => {
			toastr.success('Delete user', 'delete was successful')
			queryData.refetch()
		},
	})

	return useMemo(() => ({
		handleSearch, ...queryData, searchTerm, deleteAsync
	}), [queryData, searchTerm, deleteAsync])
}
