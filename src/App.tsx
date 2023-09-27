import UserList from './components/UserList'
import Filters from './components/Filters'

import { useUsers } from './hooks/useUsers'
import { useTable } from './hooks/useTable'
import { useFilters } from './hooks/useFilters'
import { useSort } from './hooks/useSort'

const App = () => {
	const { users, restoreUsers, deleteUsers } = useUsers()
	const { isRowsColored, toggleRowColors } = useTable()
	const { filterUsers, handleCountryChange } = useFilters(users)
	const { sortUsers, handleSortBy } = useSort(filterUsers)

	return (
		<div className="content">
			<h1>Prueba Técnica</h1>
			<h2>Número de usuarios: {users.length}</h2>
			<Filters toggleColors={toggleRowColors} handleSortBy={handleSortBy} filterCountry={handleCountryChange} restore={restoreUsers} />
			<UserList users={sortUsers} isRowsColored={isRowsColored} deleteUser={deleteUsers} handleSortBy={handleSortBy} />
		</div>
	)
}

export default App
