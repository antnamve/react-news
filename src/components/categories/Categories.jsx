import styles from './styles.module.css'

export const Categories = ({
	categories,
	setSelectedCategory,
	selectedCategory,
}) => {
	return (
		<div className={styles.categories}>
			<button
				onClick={() => setSelectedCategory(null)}
				className={!selectedCategory ? styles.active : styles.item}
			>
				All
			</button>
			{categories.map(category => {
				return (
					<button
						key={category}
						className={
							selectedCategory === category ? styles.active : styles.item
						}
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</button>
				)
			})}
		</div>
	)
}
