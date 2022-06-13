import React from 'react'
import { useActions } from '@/hooks/useActions'
import { MouseEvent } from 'react'
import { MaterialIcon } from '@/ui/MaterialIcon'

export const LogoutButton = (): JSX.Element => {
	const { logout } = useActions()

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}
	return <li>
		<a onClick={handleLogout}>
			<MaterialIcon name={'MdLogout'} />
			<span>Logout</span>
		</a>
	</li>
}



