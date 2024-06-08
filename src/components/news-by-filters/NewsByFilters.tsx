import { totalPages } from '../../constants/constants'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useAppDispatch, useAppSelector } from '../../store'
import { useGetNewsQuery } from '../../store/services/newsApi'
import { setFilters } from '../../store/slices/newsSlice'
import { NewsFilters } from '../news-filters/NewsFilters'
import { NewsList } from '../news-list/NewsList'
import { PaginationWrapper } from '../pagination-wrapper/PaginationWrapper'
import styles from './styles.module.css'

export const NewsByFilters = () => {
	const dispatch = useAppDispatch()

	const filters = useAppSelector(state => state.news.filters)
	const news = useAppSelector(state => state.news.news)

	const debouncedKeywords = useDebounce(filters.keywords, 1500)

	const { data, error, isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	})

	const handleNextPage = () => {
		if (filters.page_number < totalPages) {
			dispatch(
				setFilters({ key: 'page_number', value: filters.page_number + 1 })
			)
		}
	}

	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			dispatch(
				setFilters({ key: 'page_number', value: filters.page_number - 1 })
			)
		}
	}

	const handlePageClick = (pageNumber: number) => {
		dispatch(setFilters({ key: 'page_number', pageNumber }))
	}
	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} />

			<PaginationWrapper
				top
				bottom
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={filters.page_number}
			>
				<NewsList isLoading={isLoading} news={news} />
			</PaginationWrapper>
		</section>
	)
}
