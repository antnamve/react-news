import React from 'react'
import { IPaginationProps } from '../../interfaces'
import { Pagination } from '../pagination/Pagination'

interface Props {
	children: React.ReactNode
	top?: boolean
	bottom?: boolean
}

export const PaginationWrapper = ({
	top,
	bottom,
	children,
	...paginationProps
}: Props & IPaginationProps) => {
	return (
		<>
			{top && <Pagination {...paginationProps} />}
			{children}
			{bottom && <Pagination {...paginationProps} />}
		</>
	)
}
