import React from 'react'
import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface'
import { useRouter } from 'next/router'
import styles from './Menu.module.scss'
import cn from 'classnames'
import Link from 'next/link'
import { MaterialIcon } from '@/ui/MaterialIcon'

export const MenuItem = ({ icon, title, link }: IMenuItem): JSX.Element => {
	const { asPath } = useRouter()

	return <li className={cn({
		[styles.active]: asPath === link,
	})}>
		<Link href={link}>
			<a>
				<MaterialIcon name={icon}/>
				<span>{title}</span>
			</a>
		</Link>
	</li>
}



