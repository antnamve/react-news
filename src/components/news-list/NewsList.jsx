import { NewsItem } from '../news-item/newsItem'
import styles from './styles.module.css'

export const NewsList = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news.map(item => {
				return <NewsItem key={item.id} item={item} />
			})}
		</ul>
	)
}
