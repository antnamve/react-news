import { useGetLatestNewsQuery } from '../../store/services/newsApi'
import BannersList from '../banners-list/BannersList'
import styles from './styles.module.css'

export const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)
	return (
		<section className={styles.section}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	)
}
