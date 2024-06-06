import { withSkeleton } from '../../helpers/hocs/withSkeleton'
import NewsBanner from '../news-banner/NewsBanner'
import styles from './styles.module.css'

const BannersList = ({ banners }) => {
	return (
		<ul className={styles.banners}>
			{banners?.map(banner => {
				return <NewsBanner key={banner.id} item={banner} />
			})}
		</ul>
	)
}

const BannersListWithSkeleton = withSkeleton(NewsBanner, 'banner', 10, 'row')

export default BannersListWithSkeleton
