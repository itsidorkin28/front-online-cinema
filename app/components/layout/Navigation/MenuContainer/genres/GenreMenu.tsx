import React from 'react'
import { usePopularGenres } from '@/components/layout/Navigation/MenuContainer/genres/usePopularGenres'
import { Menu } from '@/components/layout/Navigation/MenuContainer/Menu'
import { SkeletonLoader } from '@/ui/SkeletonLoader'

export const GenreMenu = (): JSX.Element => {
	const { isLoading, data } = usePopularGenres()
	return isLoading
		? (
			<div className={'mx-11 mb-6'}>
				<SkeletonLoader count={5} className={'h-7 mt-6'} />
			</div>
		)
		: <Menu title={'Popular genres'} items={data || []} />
}



