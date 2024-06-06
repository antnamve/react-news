import { getCategories } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import { Categories } from '../categories/Categories'
import { Search } from '../search/Search'
import styles from './styles.module.css'

export const NewsFilters = ({ filters, changeFilter }) => {
	const { data: dataCategories } = useFetch(getCategories)
	return (
		<div className={styles.filters}>
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
		</div>
	)
}
