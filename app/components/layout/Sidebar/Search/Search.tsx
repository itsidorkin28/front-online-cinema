import React from 'react'
import styles from './Search.module.scss'
import useSearch from '@/components/layout/Sidebar/Search/SearchList/useSearch'
import { SearchList } from '@/components/layout/Sidebar/Search/SearchList/SearchList'
import SearchField from '@/ui/search-field/SearchField'

const Search = (): JSX.Element => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()
	return (
		<div className={styles.wrapper}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm}/>
			{isSuccess && <SearchList movies={data || []}/>}
		</div>
	)
}

export default Search
