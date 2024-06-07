import { LatestNews } from '../../components/latest-news/LatestNews'
import { NewsByFilters } from '../../components/news-by-filters/NewsByFilters'
import styles from './styles.module.css'

export const Main = () => {
	return (
		<main className={styles.main}>
			<LatestNews />

			<NewsByFilters />
		</main>
	)
}
