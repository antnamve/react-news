import { getNews } from '../../api/apiNews'
import { NewsList } from '../../components/news-list/NewsList'
import { pageSize, totalPages } from '../../constants/constants'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'
import { NewsFilters } from '../news-filters/NewsFilters'
import { PaginationWrapper } from '../pagination-wrapper/PaginationWrapper'
import styles from './styles.module.css'

export const NewsByFilters = () => {
	const { filters, changeFilter } = useFilters({
		page_number: 1,
		page_size: pageSize,
		category: null,
		keywords: '',
	})

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, isLoading } = useFetch(getNews, {
		...filters,
		keywords: debouncedKeywords,
	})

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

			<PaginationWrapper
				top
				bottom
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={filters.page_number}
			>
				<NewsList isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	)
}
