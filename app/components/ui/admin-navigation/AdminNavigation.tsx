import { FC } from 'react'
import { navItems } from './admin-navigation.data'
import styles from './AdminNavigation.module.scss'
import AdminNavItem from '@/ui/admin-navigation/AdminNavItem'

const AdminNavigation: FC = () => {
	return <nav className={styles.nav}>
		<ul>
			{navItems.map(item => {
				return <AdminNavItem key={item.link} item={item} />
			})}
		</ul>
	</nav>
}

export default AdminNavigation
