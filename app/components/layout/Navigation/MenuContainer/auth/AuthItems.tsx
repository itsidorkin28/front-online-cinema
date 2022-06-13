import React, { FC } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { MenuItem } from '../MenuItem'
import { LogoutButton } from './LogoutButton'
import { getAdminHomeUrl } from '@/config/url.config'

export const AuthItems: FC = (): JSX.Element => {
	const { user } = useAuth()
	return (
		<>
			{user ? <>
					<MenuItem icon={'MdSettings'} title={'Profile'} link={'/profile'} />
					<LogoutButton />
				</>
				: <MenuItem icon={'MdLogin'} title={'Login'} link={'/auth'} />}

			{user?.isAdmin && <MenuItem icon={'MdOutlineLock'} title={'Admin panel'} link={getAdminHomeUrl()} />}
		</>
	)
}



