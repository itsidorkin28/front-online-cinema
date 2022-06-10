import React from 'react'
import { Menu } from '@/components/layout/Navigation/MenuContainer/Menu'
import { menus } from './menu.data'

export const MenuContainer = (): JSX.Element => {
	const [firstMenu, userMenu] = menus
	return <div>
		<Menu title={firstMenu.title} items={firstMenu.items}/>
		{/*todo: Genres menu*/}
		<Menu title={userMenu.title} items={userMenu.items}/>
	</div>
}



