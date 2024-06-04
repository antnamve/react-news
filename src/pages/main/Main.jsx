import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import NewsBanner from '../../components/news-banner/NewsBanner'
import { NewsList } from '../../components/news-list/NewsList'
import styles from './styles.module.css'

export const Main = () => {
	const [news, setNews] = useState([])

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (error) {}
		}
		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length > 0 ? <NewsBanner item={news[0]} /> : null}

			<NewsList news={news} />
		</main>
	)
}
