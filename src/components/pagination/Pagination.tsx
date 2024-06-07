import { IPaginationProps } from '../../interfaces'
import styles from './styles.module.css'

export const Pagination = ({
	totalPages,
	handlePreviousPage,
	handleNextPage,
	handlePageClick,
}: IPaginationProps) => {
	return (
		<div className={styles.pagination}>
			<button onClick={handlePreviousPage} className={styles.arrow}>
				{'<'}
			</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							onClick={() => handlePageClick(index + 1)}
							className={styles.pageNumber}
							key={index}
						>
							{index + 1}
						</button>
					)
				})}
			</div>
			<button className={styles.arrow} onClick={handleNextPage}>
				{'>'}
			</button>
		</div>
	)
}
