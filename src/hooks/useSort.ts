import { useMemo, useState } from 'react'

import { type Sort, type User } from '../types'
import { SORT_TYPES } from '../config/sortTypes'

export function useSort (filter: User[]) {
	const [sortBy, setSortBy] = useState<Sort>(null)

	const handleSortBy = (key: Sort) => {
		if (typeof key === 'string' && key === sortBy) {
			setSortBy(null)
		} else {
			setSortBy(key)
		}
	}

	const sortUsers = useMemo(() => {
		if (sortBy === SORT_TYPES.name) {
			return [...filter].sort((a, b) => {
				return a.name.first.toLocaleLowerCase().localeCompare(b.name.first.toLocaleLowerCase())
			})
		} else if (sortBy === SORT_TYPES.lastname) {
			return [...filter].sort((a, b) => {
				return a.name.last.toLocaleLowerCase().localeCompare(b.name.last.toLocaleLowerCase())
			})
		} else if (sortBy === SORT_TYPES.country) {
			return [...filter].sort((a, b) => {
				return a.location.country.toLocaleLowerCase().localeCompare(b.location.country.toLocaleLowerCase())
			})
		}

		return filter
	}, [filter, sortBy])

	return { sortUsers, handleSortBy }
}
