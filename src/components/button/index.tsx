import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type ButtonProps = {
	type: 'primary' | 'secondary'
	text: string
	onPress?: () => void
}

const Button: FC<ButtonProps> = ({ type, text, onPress }) => {
	const buttonStyle = () => {
		switch (type) {
			case 'primary':
				return styles.primaryButton
			case 'secondary':
				return styles.secondaryButton
		}
	}

	const buttonTextStyle = () => {
		switch (type) {
			case 'primary':
				return styles.primaryButtonText
			case 'secondary':
				return styles.secondaryButtonText
		}
	}

	return (
		<TouchableOpacity style={buttonStyle()} onPress={onPress}>
			<Text style={buttonTextStyle()}>{text}</Text>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	primaryButton: {
		backgroundColor: '#00A300',
		alignSelf: 'flex-start',
		borderRadius: 10
	},
	secondaryButton: {
		backgroundColor: '#696969',
		alignSelf: 'flex-start',
		borderRadius: 10
	},
	primaryButtonText: {
		color: 'white',
		fontSize: 20,
		paddingHorizontal: 15,
		paddingVertical: 5,
		fontWeight: 'bold'
	},
	secondaryButtonText: {
		color: 'white',
		fontSize: 20,
		paddingHorizontal: 15,
		paddingVertical: 5,
		fontWeight: 'bold'
	}
})
