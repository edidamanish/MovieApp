import { GradientView } from './gradient-view'
import React, { FC, useRef, useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity
} from 'react-native'
import { Button, InputText, InputTextRef } from '@components/'
import {
	AUTH_ERROR_CODES,
	LoginConstants,
	SOMETHING_WENT_WRONG
} from '@constants/'
import { useAuthUtilites, useKeyboard } from '@hooks/'
import { dismissKeyboard } from '@utils/'

type LoginContainerProps = {
	onRegisterClick: () => void
}

interface LoginViewYCords {
	bottomViewYCoord: number
	userNameYCoord: number
	passwordYCoord: number
}

export const LoginContainer: FC<LoginContainerProps> = props => {
	const windowWidth = Dimensions.get('window').width

	const [userName, setUserName] = useState<string | null>(null)
	const [password, setPassword] = useState<string | null>(null)
	const [userNameError, setUserNameError] = useState<string | null>(null)
	const [passwordError, setPasswordError] = useState<string | null>(null)
	const [loginViewYCords, setLoginViewYCords] = useState<LoginViewYCords>({
		bottomViewYCoord: 0,
		userNameYCoord: 0,
		passwordYCoord: 0
	})
	const [bottomOffset, setBottomOffset] = useState(0)

	const passwordInputRef = useRef<InputTextRef>(null)

	const { loginUser } = useAuthUtilites()
	const { isKeyboardVisible, keyboardHeight } = useKeyboard()

	const { onRegisterClick } = props

	const handleLoginError = (error: any) => {
		switch (error?.code) {
			case AUTH_ERROR_CODES.USERNAME_ERROR:
				setUserNameError(error?.message ?? SOMETHING_WENT_WRONG)
				break
			case AUTH_ERROR_CODES.PASSWORD_ERROR:
				console.log(error?.message)
				setPasswordError(error?.message ?? SOMETHING_WENT_WRONG)
				break
			default:
				//Common toast
				break
		}
	}

	const onLoginClick = async () => {
		setUserNameError(undefined)
		setPasswordError(undefined)
		if (userName && password) {
			try {
				await loginUser({
					userName,
					password
				})
			} catch (err: any) {
				console.log(err)
				handleLoginError(err)
			}
		}
	}

	const onFocusInput = (inputType: 'username' | 'password') => {
		switch (inputType) {
			case 'username':
				setBottomOffset(
					loginViewYCords.bottomViewYCoord -
						loginViewYCords.userNameYCoord
				)
				break
			case 'password':
				setBottomOffset(
					loginViewYCords.bottomViewYCoord -
						loginViewYCords.passwordYCoord
				)
				break
		}
	}

	return (
		<TouchableOpacity
			onPress={dismissKeyboard}
			activeOpacity={1}
			style={{
				width: windowWidth,
				bottom: isKeyboardVisible
					? keyboardHeight -
					  bottomOffset -
					  styles.ctaContainer.marginBottom +
					  20
					: 0
			}}>
			<GradientView />
			<View style={styles.container}>
				<Text style={styles.loginText}>{LoginConstants.LOGIN}</Text>
				<View
					style={styles.inputContainer}
					onLayout={({ nativeEvent }) => {
						setLoginViewYCords({
							...loginViewYCords,
							userNameYCoord:
								nativeEvent.layout.y + nativeEvent.layout.height
						})
					}}>
					<InputText
						placeholderText={LoginConstants.USER_NAME}
						value={userName}
						onChangeText={setUserName}
						onFocus={() => {
							onFocusInput('username')
						}}
						onSubmitEditing={() => {
							passwordInputRef.current.focus()
						}}
						error={userNameError}
					/>
				</View>
				<View
					style={styles.inputContainer}
					onLayout={({ nativeEvent }) => {
						setLoginViewYCords({
							...loginViewYCords,
							passwordYCoord:
								nativeEvent.layout.y + nativeEvent.layout.height
						})
					}}>
					<InputText
						placeholderText={LoginConstants.PASSWORD}
						value={password}
						onChangeText={setPassword}
						secureTextEntry={true}
						onFocus={() => onFocusInput('password')}
						ref={passwordInputRef}
						onSubmitEditing={onLoginClick}
						error={passwordError}
					/>
				</View>
				<View
					style={styles.ctaContainer}
					onLayout={({ nativeEvent }) => {
						setLoginViewYCords({
							...loginViewYCords,
							bottomViewYCoord:
								nativeEvent.layout.y + nativeEvent.layout.height
						})
					}}>
					<Button
						text={LoginConstants.REGISTER}
						type="secondary"
						onPress={onRegisterClick}
					/>
					<View style={{ width: 10 }} />
					<Button
						text={LoginConstants.LOGIN}
						type="primary"
						onPress={onLoginClick}
					/>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: { backgroundColor: '#171717' },
	loginText: {
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 20,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25
	},
	ctaContainer: {
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 20,
		marginBottom: 50
	},
	inputContainer: {
		marginVertical: 12,
		marginHorizontal: 20
	}
})
