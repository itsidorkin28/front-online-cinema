import React, { FC } from 'react'
import styles from './Layout.module.scss'
import { LayoutProps } from './Layout.props'
import Navigation from '@/components/layout/Navigation/Navigation'
import Sidebar from '@/components/layout/Sidebar/Sidebar'


const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>
				{children}
			</div>
			<Sidebar />
		</div>
	)
}

export default Layout
