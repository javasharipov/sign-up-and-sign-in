const DATA = [
	{
		name: 'John',
		username: 'john32',
		password: '12345678',
	},
	{
		name: 'Laylo',
		username: 'laylo01',
		password: '87654321',
	},
	{
		name: 'Biloliddin',
		username: 'biloliddin08',
		password: 'loop-loop',
	},
	{
		name: 'Abduqahhor',
		username: 'abduqahhor',
		password: '123456',
	},
]

function signIn(user) {
	try {
		let existUser = DATA.find(u => u.username === user.username)
		if (!existUser || existUser.password !== user.password) {
			throw new Error('username or password is incorrect')
		}

		return `Welcome ${existUser.name}`
	} catch (error) {
		return error.message
	} finally {
	}
}

function handleSignIn() {
	let username = prompt('username')
	let password = prompt('password')
	alert(signIn({ username, password }))
}

let registerName = prompt('Name')
let registerUserName = prompt('Username')
let registerPassword = prompt('Password')

function signUp() {
	try {
		let name = prompt('Enter your name (min 1 character):')
		if (!name || name.trim().length < 1) {
			throw new Error('Name must be at least 1 character long.')
		}

		let username = prompt('Enter your username (min 4 characters):')
		if (!username || username.trim().length < 4) {
			throw new Error('Username must be at least 4 characters long.')
		}

		let password = prompt('Enter your password (min 6 characters):')
		if (!password || password.trim().length < 6) {
			throw new Error('Password must be at least 6 characters long.')
		}

		let existingUser = DATA.find(u => u.username === username)
		if (existingUser) {
			throw new Error('Username already exists. Please choose another one.')
		}

		DATA.push({ name, username, password })
		alert('Registration successful!')
	} catch (error) {
		alert(`Error: ${error.message}`)
	}
}
