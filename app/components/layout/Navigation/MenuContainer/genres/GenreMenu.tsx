import React from 'react'
import { usePopularGenres } from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres'
import { Menu } from '@/components/layout/Navigation/MenuContainer/Menu'

export const GenreMenu = (): JSX.Element => {
	const {isLoading, data} = usePopularGenres()
	return isLoading
		? <div className={'mx-11 mb-6'}>Loading...</div>
		: <Menu title={'Popular genres'} items={data || []}/>
}



