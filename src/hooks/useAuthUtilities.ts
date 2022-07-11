import {
	RegisterRequestProps,
	LoginResponseModel,
	LoginRequestProps
} from '../models'
import * as KeyChain from 'react-native-keychain'
import {
	registerUser as registerUserService,
	loginUser as loginUserService
} from '../networking'
import { UserContext } from '../contexts'
import { useContext } from 'react'
import { KeyChainKeys } from '../constants'

const useAuthUtilites = () => {
	const { setIsLoggedIn } = useContext(UserContext)

	const saveAuthToKeyChain = async (authDetails: LoginResponseModel) => {
		setIsLoggedIn(true)
		try {
			await KeyChain.setGenericPassword(
				KeyChainKeys.AUTH_TOKEN,
				authDetails.authToken
			)
		} catch (err: any) {
			console.log('Keychain error:', err)
		}
	}

	const registerUser = async (params: RegisterRequestProps) => {
		try {
			const userResponse = await registerUserService(params)
			saveAuthToKeyChain(userResponse)
		} catch (err: any) {
			throw err
		}
	}

	const loginUser = async (params: LoginRequestProps) => {
		try {
			const userResponse = await loginUserService(params)
			saveAuthToKeyChain(userResponse)
		} catch (err: any) {
			throw err
		}
	}

	return {
		registerUser,
		loginUser
	}
}

export { useAuthUtilites }
