import React from 'react'
import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'
import styles from './Menu.module.scss'
import { MenuItem } from '@/components/layout/Navigation/MenuContainer/MenuItem'
import { AuthItems } from '@/components/layout/Navigation/MenuContainer/auth/AuthItems'

export const Menu = ({ title, items }: IMenu): JSX.Element => {
	return <div className={styles.menu}>
		<div className={styles.heading}>
			{title}
		</div>
		<ul className={styles.ul}>
			{items.map(item => {
				return <MenuItem key={item.link}
				                 title={item.title}
				                 link={item.link}
				                 icon={item.icon}
				/>
			})}
			{title === 'General' ? <AuthItems /> : null}
		</ul>
	</div>
}



