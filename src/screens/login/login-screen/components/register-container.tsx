import { GradientView } from './gradient-view'
import React, { FC, useContext, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Button, InputText } from '../../../../components'
import { LoginConstants } from '../../../../constants'
import { registerUser } from '../../../../networking'
import { UserContext } from '../../../../contexts'

type RegisterContainerProps = {
	onLoginClick: () => void
}

export const RegisterContainer: FC<RegisterContainerProps> = props => {
	const windowWidth = Dimensions.get('window').width
	const [userName, setUserName] = useState<string | null>(null)
	const [email, setEmail] = useState<string | null>(null)
	const [password, setPassword] = useState<string | null>(null)
	const [confirmPassword, setConfirmPassword] = useState<string | null>(null)
	const { setIsLoggedIn } = useContext(UserContext)
	const { onLoginClick } = props

	const onRegisterClick = async () => {
		if (userName && email && password) {
			try {
				await registerUser({
					userName: userName,
					email: email,
					password: password
				})
				setIsLoggedIn(true)
			} catch {
				//Handle Error
			}
		}
	}

	const onChangeEmail = (text?: string) => {
		setEmail(text)
	}

	const onChangeUserName = (text?: string) => {
		setUserName(text)
	}

	const onChangePassword = (text?: string) => {
		setPassword(text)
	}

	const onChangeConfirmPassword = (text?: string) => {
		setConfirmPassword(text)
	}

	return (
		<View style={{ width: windowWidth, bottom: 0 }}>
			<GradientView />
			<View style={styles.container}>
				<Text style={styles.loginText}>{LoginConstants.REGISTER}</Text>
				<View style={styles.inputContainer}>
					<InputText
						placeholderText={LoginConstants.EMAIL_ID}
						value={email}
						onChangeText={onChangeEmail}
					/>
				</View>
				<View style={styles.inputContainer}>
					<InputText
						placeholderText={LoginConstants.USER_NAME}
						value={userName}
						onChangeText={onChangeUserName}
					/>
				</View>
				<View style={styles.inputContainer}>
					<InputText
						placeholderText={LoginConstants.PASSWORD}
						value={password}
						onChangeText={onChangePassword}
						secureTextEntry={true}
					/>
				</View>
				<View style={styles.inputContainer}>
					<InputText
						placeholderText={LoginConstants.CONFIRM_PASSWORD}
						value={confirmPassword}
						onChangeText={onChangeConfirmPassword}
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
