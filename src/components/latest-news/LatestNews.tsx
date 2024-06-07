import { getLatestNews } from '../../api/apiNews'
import { useFetch } from '../../helpers/hooks/useFetch'
import { NewsApiResponse } from '../../interfaces'
import BannersList from '../banners-list/BannersList'
import styles from './styles.module.css'

export const LatestNews = () => {
	const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews)
	return (
		<section className={styles.section}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	)
}