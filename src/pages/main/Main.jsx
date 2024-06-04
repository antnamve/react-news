import { useEffect, useState } from 'react'
import { getNews } from '../../api/apiNews'
import NewsBanner from '../../components/news-banner/NewsBanner'
import { NewsList } from '../../components/news-list/NewsList'
import { Skeleton } from '../../components/skeleton/Skeleton'
import styles from './styles.module.css'

export const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setIsLoading(true)
				const response = await getNews()
				setNews(response.news)
				setIsLoading(false)
			} catch (error) {}
		}
		fetchNews()
	}, [])

	return (
		<main className={styles.main}>
			{news.length > 0 && isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton count={1} type={'banner'} />
			)}

			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton count={10} type={'item'} />
			)}
		</main>
	)
}
