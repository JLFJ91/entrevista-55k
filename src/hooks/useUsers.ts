import { useEffect, useRef, useState } from 'react'

import { type User } from '../types'
import { getUsers } from '../services/users'

export function useUsers () {
	const initialUsers = useRef<User[]>([])

	const [users, setUsers] = useState<User[]>([])

	useEffect(() => {
		getUsers()
			.then(data => {
				setUsers(data.results)
				initialUsers.current = data.results
			})
			.catch(e => { console.log(e) })
	}, [])

	const deleteUsers = (email: string) => {
		const filteredUsers = users.filter((u) => {
			return u.email !== email
		})

		setUsers(filteredUsers)
	}

	const restoreUsers = () => {
		setUsers(initialUsers.current)
	}

	return { users, deleteUsers, restoreUsers }
}
