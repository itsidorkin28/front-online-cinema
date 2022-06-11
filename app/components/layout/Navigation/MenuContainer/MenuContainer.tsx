import React from 'react'
import { Menu } from '@/components/layout/Navigation/MenuContainer/Menu'
import { menus } from './menu.data'
import { GenreMenu } from '@/components/layout/Navigation/MenuContainer/genres/GenreMenu'

export const MenuContainer = (): JSX.Element => {
	const [firstMenu, userMenu] = menus
	return <div>
		<Menu title={firstMenu.title} items={firstMenu.items} />
		<GenreMenu />
		<Menu title={userMenu.title} items={userMenu.items} />
	</div>
}



