import { IMenu } from '@/components/layout/Navigation/MenuContainer/menu.interface'

const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'MdExplore',
			link: '/discovery',
			title: 'Discovery',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now',
		},
	],
}

const userMenu: IMenu = {
	title: 'General',
	items: [],
}

export const menus: IMenu[] = [firstMenu, userMenu]
