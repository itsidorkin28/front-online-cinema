import { FC } from 'react'
import { ITableItem } from '@/ui/admin-table/AdminTable/admin-table.interface'
import AdminTableHeader from '@/ui/admin-table/AdminTable/AdminTableHeader'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import AdminTableItem from '@/ui/admin-table/AdminTable/AdminTableItem'
import styles from './AdminTable.module.scss'

interface IAdminTable {
	tableItems: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

const AdminTable: FC<IAdminTable> = (
	{ headerItems, isLoading, removeHandler, tableItems },
) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading
				? <SkeletonLoader count={1} height={48} className={'mt-4'} />
				: tableItems.length ? tableItems.map(tableItem => <AdminTableItem
					key={tableItem._id}
					removeHandler={() => removeHandler(tableItem._id)}
					tableItem={tableItem} />) : <div className={styles.notFound}>Elements not found</div>}
		</div>
	)
}

export default AdminTable
