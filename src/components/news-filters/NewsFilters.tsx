import { useTheme } from '../../context/ThemeContext'
import { IFilters } from '../../interfaces'
import { useAppDispatch } from '../../store'
import { useGetCategoriesQuery } from '../../store/services/newsApi'
import { setFilters } from '../../store/slices/newsSlice'
import { Categories } from '../categories/Categories'
import { Search } from '../search/Search'
import { Slider } from '../slider/Slider'
import styles from './styles.module.css'

interface Props {
	filters: IFilters
}

export const NewsFilters = ({ filters, changeFilter }: Props) => {
	const { isDark } = useTheme()
	const { data } = useGetCategoriesQuery(null)

	const dispatch = useAppDispatch()

	return (
		<div className={styles.filters}>
			{data ? (
				<Slider isDark={isDark}>
					<Categories
						categories={data.categories}
						selectedCategory={filters.category}
						setSelectedCategory={category => {
							dispatch(setFilters({ key: 'category', category }))
						}}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={keywords =>
					dispatch(setFilters({ key: 'keywords', keywords }))
				}
			/>
		</div>
	)
}
