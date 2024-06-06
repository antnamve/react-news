import { NewsList } from '../../components/news-list/NewsList'
import { Pagination } from '../../components/pagination/Pagination'
import { totalPages } from '../../constants/constants'
import { NewsFilters } from '../news-filters/NewsFilters'
import styles from './styles.module.css'

export const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
	const handleNextPage = () => {
		if (filters.page_number < totalPages) {
			changeFilter('page_number', filters.page_number + 1)
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilter('page_number', filters.page_number - 1)
		}
	}

	const handlePageClick = pageNumber => {
		changeFilter('page_number', pageNumber)
	}
	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} changeFilter={changeFilter} />

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={filters.page_number}
			/>

			<NewsList isLoading={isLoading} news={news} />

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={filters.page_number}
			/>
		</section>
	)
}
