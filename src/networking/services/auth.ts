import { createPostRequest } from '../make-axios-call'
import { EndPoints } from './endPoints'

type LoginRequestProps = {
	userName: string
	password: string
}

const loginUser = (props: LoginRequestProps): Promise<any> => {
	const { userName, password } = props
	return new Promise((resolve, reject) => {
		createPostRequest({
			endPoint: EndPoints.loginUser,
			body: {
				username: userName,
				password
			}
		})
			.then(response => {
				resolve(response)
			})
			.catch(error => {
				reject(error)
			})
	})
}

type RegisterRequestProps = {
	userName: string
	email: string
	password: string
}
const registerUser = async (props: RegisterRequestProps) => {
	const { userName, email, password } = props
	return new Promise((resolve, reject) => {
		createPostRequest({
			endPoint: EndPoints.registerUser,
			body: {
				username: userName,
				email,
				password
			}
		})
			.then(response => {
				resolve(response)
			})
			.catch(error => {
				reject(error)
			})
	})
}

export { loginUser, registerUser }
