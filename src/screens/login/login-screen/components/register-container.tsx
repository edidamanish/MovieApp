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
import { LoginConstants } from '@constants/'
import { useAuthUtilites, useKeyboard } from '@hooks/'
import { dismissKeyboard } from '@utils/'

type RegisterContainerProps = {
	onLoginClick: () => void
}

interface RegisterViewYCords {
	bottomViewYCoord: number
	emailYCoord: number
	userNameYCoord: number
	passwordYCoord: number
	confirmPasswordYCoord: number
}

export const RegisterContainer: FC<RegisterContainerProps> = props => {
	const windowWidth = Dimensions.get('window').width

	const [userName, setUserName] = useState<string | null>(null)
	const [email, setEmail] = useState<string | null>(null)
	const [password, setPassword] = useState<string | null>(null)
	const [confirmPassword, setConfirmPassword] = useState<string | null>(null)
	const [registerViewYCoords, setRegisterViewYCoords] =
		useState<RegisterViewYCords>({
			bottomViewYCoord: 0,
			emailYCoord: 0,
			userNameYCoord: 0,
			passwordYCoord: 0,
			confirmPasswordYCoord: 0
		})
	const [bottomOffset, setBottomOffset] = useState(0)

	const userNameInputRef = useRef<InputTextRef>(null)
	const passwordInputRef = useRef<InputTextRef>(null)
	const confirmPasswordInputRef = useRef<InputTextRef>(null)

	const { registerUser } = useAuthUtilites()
	const { isKeyboardVisible, keyboardHeight } = useKeyboard()

	const { onLoginClick } = props

	const onRegisterClick = async () => {
		if (userName && email && password) {
			try {
				await registerUser({
					userName,
					email,
					password
				})
			} catch (err: any) {
				//Handle Error
				console.log('register click error:', err)
			}
		}
	}

	const onFocusInput = (
		inputType: 'email' | 'username' | 'password' | 'confirmPassword'
	) => {
		switch (inputType) {
			case 'email':
				setBottomOffset(
					registerViewYCoords.bottomViewYCoord -
						registerViewYCoords.emailYCoord
				)
				break
			case 'username':
				setBottomOffset(
					registerViewYCoords.bottomViewYCoord -
						registerViewYCoords.userNameYCoord
				)
				break
			case 'password':
				setBottomOffset(
					registerViewYCoords.bottomViewYCoord -
						registerViewYCoords.passwordYCoord
				)
				break
			case 'confirmPassword':
				setBottomOffset(
					registerViewYCoords.bottomViewYCoord -
						registerViewYCoords.confirmPasswordYCoord
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
				<Text style={styles.loginText}>{LoginConstants.REGISTER}</Text>
				<View
					style={styles.inputContainer}
					onLayout={({ nativeEvent }) => {
						setRegisterViewYCoords({
							...registerViewYCoords,
							emailYCoord:
								nativeEvent.layout.y + nativeEvent.layout.height
						})
					}}>
					<InputText
						placeholderText={LoginConstants.EMAIL_ID}
						value={email}
						onChangeText={setEmail}
						onFocus={() => {
							onFocusInput('email')
						}}
						onSubmitEditing={() => {
							userNameInputRef.current.focus()
						}}
					/>
				</View>
				<View
					style={styles.inputContainer}
					onLayout={({ nativeEvent }) => {
						setRegisterViewYCoords({
							...registerViewYCoords,
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
						ref={userNameInputRef}
						onSubmitEditing={() => {
							passwordInputRef.current.focus()
						}}
					/>
				</View>
				<View
					style={styles.inputContainer}
					onLayout={({ nativeEvent }) => {
						setRegisterViewYCoords({
							...registerViewYCoords,
							passwordYCoord:
								nativeEvent.layout.y + nativeEvent.layout.height
						})
					}}>
					<InputText
						placeholderText={LoginConstants.PASSWORD}
						value={password}
						onChangeText={setPassword}
						secureTextEntry={true}
						onFocus={() => {
							onFocusInput('password')
						}}
						ref={passwordInputRef}
						onSubmitEditing={() => {
							confirmPasswordInputRef.current.focus()
						}}
					/>
				</View>
				<View
					style={styles.inputContainer}
					onLayout={({ nativeEvent }) => {
						setRegisterViewYCoords({
							...registerViewYCoords,
							confirmPasswordYCoord:
								nativeEvent.layout.y + nativeEvent.layout.height
						})
					}}>
					<InputText
						placeholderText={LoginConstants.CONFIRM_PASSWORD}
						value={confirmPassword}
						onChangeText={setConfirmPassword}
						secureTextEntry={true}
						onFocus={() => {
							onFocusInput('confirmPassword')
						}}
						ref={confirmPasswordInputRef}
						onSubmitEditing={onRegisterClick}
					/>
				</View>
				<View
					style={styles.ctaContainer}
					onLayout={({ nativeEvent }) => {
						setRegisterViewYCoords({
							...registerViewYCoords,
							bottomViewYCoord:
								nativeEvent.layout.y + nativeEvent.layout.height
						})
					}}>
					<Button
						text={LoginConstants.LOGIN}
						type="secondary"
						onPress={onLoginClick}
					/>
					<View style={{ width: 10 }} />
					<Button
						text={LoginConstants.REGISTER}
						type="primary"
						onPress={onRegisterClick}
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
