import { Pagination } from '../pagination/Pagination'

export const PaginationWrapper = ({
	top,
	bottom,
	children,
	...paginationProps
}) => {
	return (
		<>
			{top && <Pagination {...paginationProps} />}
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	)
}
