import { FC } from 'react'
import { Meta } from '@/utils/meta/Meta'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import { useUsers } from '@/screens/admin/users/useUsers'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'

const UserList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useUsers()
	return <Meta title={'Users'}>
		<AdminNavigation />
		<Heading title={'Users'} />

		<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
		<AdminTable
			isLoading={isLoading}
			removeHandler={deleteAsync}
			headerItems={['Email', 'Date register']}
			tableItems={data || []} />

	</Meta>
}

export default UserList
