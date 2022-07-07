import { createPostRequest } from '../make-axios-call'
import { EndPoints } from './endPoints'
import { CustomErrorModel, LoginResponseModel } from '../../models'
import { SOMETHING_WENT_WRONG } from '../../constants'
import * as Keychain from 'react-native-keychain'

type LoginRequestProps = {
	userName: string
	password: string
}

const loginUser = (props: LoginRequestProps): Promise<void> => {
	const { userName, password } = props
	return new Promise((resolve, reject) => {
		createPostRequest({
			endPoint: EndPoints.loginUser,
			body: {
				username: userName,
				password
			}
		})
			.then((response: any) => {
				if (response?.authToken && response?.username) {
					try {
						resolve()
					} catch {
						reject(new Error(SOMETHING_WENT_WRONG))
					}
				} else {
					reject(new Error(SOMETHING_WENT_WRONG))
				}
			})
			.catch((error: CustomErrorModel) => {
				reject(error)
			})
	})
}

type RegisterRequestProps = {
	userName: string
	email: string
	password: string
}
const registerUser = async (props: RegisterRequestProps): Promise<void> => {
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
			.then((response: LoginResponseModel) => {
				if (response?.authToken && response?.username) {
					try {
						resolve()
					} catch {
						reject(new Error(SOMETHING_WENT_WRONG))
					}
				} else {
					reject(new Error(SOMETHING_WENT_WRONG))
				}
			})
			.catch((error: CustomErrorModel) => {
				reject(error)
			})
	})
}

export { loginUser, registerUser }
