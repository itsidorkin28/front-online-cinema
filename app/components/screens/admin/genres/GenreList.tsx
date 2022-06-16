import { FC } from 'react'
import { Meta } from '@/utils/meta/Meta'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'
import AdminHeader from '@/components/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'
import { useGenres } from '@/screens/admin/genres/useGenres'

const GenreList: FC = () => {
	const { handleSearch, isLoading, searchTerm, data, deleteAsync } = useGenres()
	return <Meta title={'Genres'}>
		<AdminNavigation />
		<Heading title={'Genres'} />

		<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
		<AdminTable
			isLoading={isLoading}
			removeHandler={deleteAsync}
			headerItems={['Name', 'Slug']}
			tableItems={data || []} />

	</Meta>
}

export default GenreList
