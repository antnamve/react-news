import { getCategories, getNews } from '../../api/apiNews'
import { Categories } from '../../components/categories/Categories'
import NewsBanner from '../../components/news-banner/NewsBanner'
import { NewsList } from '../../components/news-list/NewsList'
import { Pagination } from '../../components/pagination/Pagination'
import { Search } from '../../components/search/Search'
import { pageSize, totalPages } from '../../constants/constants'
import { useDebounce } from '../../helpers/hooks/useDebounce'
import { useFetch } from '../../helpers/hooks/useFetch'
import { useFilters } from '../../helpers/hooks/useFilters'
import styles from './styles.module.css'

export const Main = () => {
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

	const { data: dataCategories } = useFetch(getCategories)

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
		<main className={styles.main}>
			{dataCategories ? (
				<Categories
					categories={dataCategories.categories}
					selectedCategory={selectedCategory}
					setSelectedCategory={category => {
						changeFilter('category', category)
					}}
				/>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords => {
					changeFilter('keywords', keywords)
				}}
			/>

			<NewsBanner
				isLoading={isLoading}
				item={data && data.news && data.news(0)}
			/>

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={filters.page_number}
			/>

			<NewsList isLoading={isLoading} news={data?.news} />

			<Pagination
				handlePreviousPage={handlePreviousPage}
				handleNextPage={handleNextPage}
				handlePageClick={handlePageClick}
				totalPages={totalPages}
				currentPage={filters.page_number}
			/>
		</main>
	)
}
