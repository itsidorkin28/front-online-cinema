import { TypeMaterialIconName } from '@/shared/types/icon.types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	slug: string
	parameters: IParameters
	videoUrl: string
	rating: number
	countOpened: number
	genres: IGenre[]
	actors: IActor[]
}
