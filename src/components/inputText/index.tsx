import React, { FC } from 'react'
import { StyleSheet, TextInput, Text } from 'react-native'

type InputTextProps = {
	placeholderText: string
	error?: string
	value?: string
	onEndEditing?: () => void
	onChangeText?: (text?: string) => void
	secureTextEntry?: boolean
}

const InputText: FC<InputTextProps> = props => {
	const {
		placeholderText,
		error,
		value,
		onEndEditing,
		onChangeText,
		secureTextEntry
	} = props
	return (
		<>
			<TextInput
				style={styles.input}
				placeholder={placeholderText}
				placeholderTextColor={'white'}
				value={value}
				onEndEditing={onEndEditing}
				onChangeText={onChangeText}
				secureTextEntry={secureTextEntry}
			/>
			{error ? (
				<Text style={styles.errorText}>{'some error'}</Text>
			) : null}
		</>
	)
}

export default InputText

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderBottomWidth: 1,
		padding: 10,
		color: 'white',
		borderBottomColor: 'white'
	},
	errorText: {
		paddingHorizontal: 10,
		marginTop: 4,
		color: 'red'
	}
})
