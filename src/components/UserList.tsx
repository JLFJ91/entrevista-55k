import { type Sort, type User } from '../types'

interface Props {
	users: User[]
	isRowsColored: boolean
	handleSortBy: (key: Sort) => void
	deleteUser: (key: string) => void
}

const UserList = ({ users, isRowsColored, deleteUser, handleSortBy }: Props) => {
	const tableClassName = isRowsColored ? 'table-colored' : ''

	return (
		<table className={tableClassName} width="100%">
			<thead>
				<tr>
					<td>Foto</td>
					<td><button onClick={() => { handleSortBy('name') }}>Nombre</button></td>
					<td><button onClick={() => { handleSortBy('lastname') }}>Apellido</button></td>
					<td><button onClick={() => { handleSortBy('country') }}>País</button></td>
					<td>Acciones</td>
				</tr>
			</thead>
			<tbody>
				{users.map(u => {
					return (
						<tr key={u.email}>
							<td>
								<img src={u.picture.thumbnail} alt={'Foto de: u.name.title'} />
							</td>
							<td>{u.name.first}</td>
							<td>{u.name.last}</td>
							<td>{u.location.country}</td>
							<td>
								<button onClick={() => { deleteUser(u.email) }}>
									Borrar
								</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default UserList
