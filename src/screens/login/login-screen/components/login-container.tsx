import { GradientView } from './gradient-view'
import React, { FC } from 'react'
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { Button, InputText } from '../../../../components'
import { LoginConstants } from '../../../../constants'

type LoginContainerProps = {
	onRegisterClick: () => void
}

export const LoginContainer: FC<LoginContainerProps> = props => {
	const windowWidth = Dimensions.get('window').width
	const { onRegisterClick } = props

	const onLoginClick = () => {}

	return (
		<View style={{ width: windowWidth, bottom: 0 }}>
			<GradientView />
			<View style={styles.container}>
				<Text style={styles.loginText}>{LoginConstants.LOGIN}</Text>
				<View style={styles.inputContainer}>
					<InputText placeholderText={LoginConstants.USER_NAME} />
				</View>
				<View style={styles.inputContainer}>
					<InputText placeholderText={LoginConstants.PASSWORD} />
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
