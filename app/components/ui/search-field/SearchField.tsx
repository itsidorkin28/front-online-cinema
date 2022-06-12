import React, { ChangeEvent } from 'react'
import styles from './SearchField.module.scss'
import { MaterialIcon } from '@/ui/MaterialIcon'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField = ({ searchTerm, handleSearch }: ISearchField) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name={'MdSearch'} />
			<input placeholder={'Search'} value={searchTerm} onChange={handleSearch} />
		</div>
	)
}

export default SearchField
