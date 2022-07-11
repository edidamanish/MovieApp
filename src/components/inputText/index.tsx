import { SecureEye } from '../../assets'
import React, { FC, useMemo, useState } from 'react'
import {
	StyleSheet,
	TextInput,
	Text,
	View,
	TouchableOpacity
} from 'react-native'

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

	const [isSecureTextVisible, setIsSecureTextVisible] = useState(false)

	const showSecureTextEntry = useMemo(() => {
		if (secureTextEntry && !isSecureTextVisible) return true
		return false
	}, [isSecureTextVisible, secureTextEntry])

	const onSecureEyePress = () => {
		setIsSecureTextVisible(!isSecureTextVisible)
	}

	return (
		<>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder={placeholderText}
					placeholderTextColor={'white'}
					value={value}
					onEndEditing={onEndEditing}
					onChangeText={onChangeText}
					secureTextEntry={showSecureTextEntry}
					autoCapitalize={'none'}
				/>
				{secureTextEntry ? (
					<TouchableOpacity
						onPress={onSecureEyePress}
						style={styles.secureImage}>
						<SecureEye fill={'#FFFFFF'} />
					</TouchableOpacity>
				) : null}
			</View>
			{error ? (
				<Text style={styles.errorText}>{'some error'}</Text>
			) : null}
		</>
	)
}

export default InputText

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		height: 40,
		borderBottomWidth: 1,
		padding: 10,
		borderBottomColor: 'white'
	},
	input: { flex: 1, flexGrow: 1, color: 'white' },
	errorText: {
		paddingHorizontal: 10,
		marginTop: 4,
		color: 'red'
	},
	secureImage: {
		alignSelf: 'flex-end',
		justifyContent: 'center',
		marginLeft: 8
	}
})
