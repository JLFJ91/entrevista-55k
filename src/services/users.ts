export async function getUsers () {
	return await fetch('https://randomuser.me/api/?results=100')
		.then(res => res.json())
}
