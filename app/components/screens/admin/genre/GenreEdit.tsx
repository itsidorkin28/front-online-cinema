import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IGenreEditInput } from '@/screens/admin/genre/genre-edit.interface'
import { useGenreEdit } from '@/screens/admin/genre/useGenreEdit'
import { Meta } from '@/utils/meta/Meta'
import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import Field from '@/ui/form-elements/Field/Field'

const GenreEdit: FC = () => {
	const { handleSubmit, register, formState: { errors }, setValue, getValues } = useForm<IGenreEditInput>({
		mode: 'onChange',
	})
	const { isLoading, onSubmit } = useGenreEdit(setValue)
	return (
		<Meta title={'Edit genre'}>
			<AdminNavigation />
			<Heading title={'Edit genre'} />
			<form onSubmit={() => handleSubmit(onSubmit)}>
				{isLoading
					? <SkeletonLoader count={3} />
					: <>
						<div>
							<Field {...register('name',
								{
									required: 'Name is required',
								})}
							       placeholder={'Name'}
							       error={errors.name}
							       style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								{/*	todo: Slug field */}
							</div>

							<Field {...register('icon',
								{
									required: 'Icon is required',
								})}
							       placeholder={'Icon'}
							       error={errors.name}
							       style={{ width: '31%' }}
							/>
							{/*	todo: Text editor draft.js */}

							<button>Update</button>
						</div>
					</>}
			</form>
		</Meta>
	)
}

export default GenreEdit
