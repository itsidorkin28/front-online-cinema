import { FC } from 'react'
import styles from '../Admin.module.scss'
import CountUsers from '@/screens/admin/Statistics/CountUsers'
import PopularMovie from '@/screens/admin/Statistics/PopularMovie'

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<CountUsers />
			<PopularMovie />
		</div>
	)
}

export default Statistics
