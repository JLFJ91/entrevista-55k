import { type Sort } from '../types'

interface Props {
	toggleColors: () => void
	handleSortBy: (key: Sort) => void
	restore: () => void
	filterCountry: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Filters = ({ toggleColors, handleSortBy, restore, filterCountry }: Props) => {
	return (
		<div className="filters">
			<button onClick={toggleColors}>Colorear Filas</button>
			<button onClick={() => { handleSortBy('country') }}>Ordenar por País</button>
			<button onClick={restore}>Restaurar Todo</button>
			<input placeholder="Filtrar por país" onChange={filterCountry}/>
		</div>
	)
}

export default Filters
