import { useTheme } from '../../context/ThemeContext'
import styles from './styles.module.css'

interface Props {
	keywords: string
	setKeywords: (keywords: string) => void
}

export const Search = ({ keywords, setKeywords }: Props) => {
	const { isDark } = useTheme()
	return (
		<div className={styles.search}>
			<input
				type='text'
				value={keywords}
				className={styles.input}
				onChange={e => setKeywords(e.target.value)}
				placeholder='JavaScript'
			/>
		</div>
	)
}
