import { GradientView } from './gradient-view'
import React, { FC, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Button, InputText } from '../../../../components'
import { LoginConstants } from '../../../../constants'
import { useAuthUtilites, useKeyboard } from '../../../../hooks'

type LoginContainerProps = {
	onRegisterClick: () => void
}

export const LoginContainer: FC<LoginContainerProps> = props => {
	const windowWidth = Dimensions.get('window').width
	const [userName, setUserName] = useState<string | null>(null)
	const [password, setPassword] = useState<string | null>(null)
	const { loginUser } = useAuthUtilites()
	const { isKeyboardVisible, keyboardHeight } = useKeyboard()

	const { onRegisterClick } = props

	const onLoginClick = async () => {
		if (userName && password) {
			try {
				await loginUser({
					userName,
					password
				})
			} catch (err: any) {
				//Handle Error
				console.log('login click error:', err)
			}
		}
	}

	return (
		<View
			style={{
				width: windowWidth,
				bottom: isKeyboardVisible ? keyboardHeight - 20 : 0
			}}>
			<GradientView />
			<View style={styles.container}>
				<Text style={styles.loginText}>{LoginConstants.LOGIN}</Text>
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
				<View style={styles.ctaContainer}>
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
