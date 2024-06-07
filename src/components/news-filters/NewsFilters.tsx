import { getCategories } from '../../api/apiNews'
import { useTheme } from '../../context/ThemeContext'
import { useFetch } from '../../helpers/hooks/useFetch'
import { CategoriesApiResponse, IFilters } from '../../interfaces'
import { Categories } from '../categories/Categories'
import { Search } from '../search/Search'
import { Slider } from '../slider/Slider'
import styles from './styles.module.css'

interface Props {
	filters: IFilters
	changeFilter: (key: string, value: string | number | null) => void
}

export const NewsFilters = ({ filters, changeFilter }: Props) => {
	const { isDark } = useTheme()
	const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
		getCategories
	)
	return (
		<div className={styles.filters}>
			{dataCategories ? (
				<Slider isDark={isDark}>
					<Categories
						categories={dataCategories.categories}
						selectedCategory={filters.category}
						setSelectedCategory={category => {
							changeFilter('category', category)
						}}
					/>
				</Slider>
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
