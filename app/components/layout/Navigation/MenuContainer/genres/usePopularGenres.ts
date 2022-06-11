import { useQuery } from 'react-query'
import { GenreService } from '@/services/genre.service'
import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface'
import { getGenreUrl } from '@/config/url.config'

export const usePopularGenres = () => {
	return useQuery('popular genre menu', () => {
		return GenreService.getAll()
	}, {
		select: ({ data }) => data.map(genre => {
			return {
				icon: genre.icon,
				link: getGenreUrl(genre.slug),
				title: genre.name,
			} as IMenuItem
		}).splice(0, 4),
	})
}
