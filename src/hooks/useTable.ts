import { useState } from 'react'

export function useTable () {
	const [isRowsColored, setIsRowsColored] = useState(false)

	const toggleRowColors = () => {
		setIsRowsColored(!isRowsColored)
	}

	return { isRowsColored, toggleRowColors }
}
