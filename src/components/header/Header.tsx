import { useTheme } from '../../context/ThemeContext'
import { formatDate } from '../../helpers/formatDate'
import styles from './styles.module.css'

export const Header = () => {
	const { isDark, toggleTheme } = useTheme()

	return (
		<header className={styles.header}>
			<h1 className={styles.title}>News</h1>
			<p className={styles.date}>{formatDate(new Date())}</p>
			<img src='' width={30} alt='theme' onClick={toggleTheme} />
		</header>
	)
}
