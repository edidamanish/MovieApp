import { GradientView } from './gradient-view'
import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Button, InputText } from '../../../../components'
import { LoginConstants } from '../../../../constants'
import { useAuthUtilites, useKeyboard } from '../../../../hooks'

type RegisterContainerProps = {
	onLoginClick: () => void
}

export const RegisterContainer: FC<RegisterContainerProps> = props => {
	const windowWidth = Dimensions.get('window').width
	const [userName, setUserName] = useState<string | null>(null)
	const [email, setEmail] = useState<string | null>(null)
	const [password, setPassword] = useState<string | null>(null)
	const [confirmPassword, setConfirmPassword] = useState<string | null>(null)
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

	return (
		<View
			style={{
				width: windowWidth,
				bottom: isKeyboardVisible
					? keyboardHeight - styles.ctaContainer.marginBottom + 20
					: 0
			}}>
			<GradientView />
			<View style={styles.container}>
				<Text style={styles.loginText}>{LoginConstants.REGISTER}</Text>
				<View style={styles.inputContainer}>
					<InputText
						placeholderText={LoginConstants.EMAIL_ID}
						value={email}
						onChangeText={setEmail}
					/>
				</View>
				<View style={styles.inputContainer}>
					<InputText
						placeholderText={LoginConstants.USER_NAME}
						value={userName}
						onChangeText={setUserName}
					/>
				</View>
				<View style={styles.inputContainer}>
					<InputText
						placeholderText={LoginConstants.PASSWORD}
						value={password}
						onChangeText={setPassword}
						secureTextEntry={true}
					/>
				</View>
				<View style={styles.inputContainer}>
					<InputText
						placeholderText={LoginConstants.CONFIRM_PASSWORD}
						value={confirmPassword}
						onChangeText={setConfirmPassword}
						secureTextEntry={true}
					/>
				</View>
				<View style={styles.ctaContainer}>
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
		</View>
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
