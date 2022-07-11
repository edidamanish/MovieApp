import { createPostRequest } from '../make-axios-call'
import { EndPoints } from './endPoints'
import {
	CustomErrorModel,
	LoginRequestProps,
	LoginResponseModel,
	RegisterRequestProps
} from '../../models'
import { SOMETHING_WENT_WRONG } from '../../constants'

const loginUser = (props: LoginRequestProps): Promise<LoginResponseModel> => {
	const { userName, password } = props
	return new Promise((resolve, reject) => {
		createPostRequest({
			endPoint: EndPoints.loginUser,
			body: {
				username: userName,
				password
			}
		})
			.then((response: LoginResponseModel) => {
				if (response?.authToken && response?.username) {
					try {
						resolve(response)
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
const registerUser = async (
	props: RegisterRequestProps
): Promise<LoginResponseModel> => {
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
						resolve(response)
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
