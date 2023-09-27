import { useMemo, useState } from 'react'

import { type User } from '../types'

export function useFilters (users: User[]) {
	const [countryFilter, setCountryFilter] = useState<string | null>(null)

	const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCountryFilter(e.target.value)
	}

	const filterUsers = useMemo(() => {
		console.log('Filter')
		return countryFilter !== null && countryFilter.length > 0
			? [...users].filter((u) => {
				return u.location.country.toLocaleLowerCase().includes(countryFilter)
			})
			: users
	}, [users, countryFilter])

	return { filterUsers, handleCountryChange }
}
