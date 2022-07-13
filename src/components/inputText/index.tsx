import { SecureEye } from '@assets/'
import React, {
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
	forwardRef
} from 'react'
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
	onFocus?: () => void
	onSubmitEditing?: () => void
}

type InputTextRef = {
	focus: () => void
}

const memoInputText: React.ForwardRefRenderFunction<
	InputTextRef,
	InputTextProps
> = (props, ref) => {
	const {
		placeholderText,
		error,
		value,
		onEndEditing,
		onChangeText,
		secureTextEntry,
		onFocus,
		onSubmitEditing
	} = props

	const textInputRef = useRef<TextInput>(null)
	const [isSecureTextVisible, setIsSecureTextVisible] = useState(false)

	useImperativeHandle(ref, () => ({
		focus
	}))

	const focus = () => {
		textInputRef.current.focus()
	}

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
					onFocus={onFocus}
					onSubmitEditing={onSubmitEditing}
					ref={textInputRef}
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

const InputText = forwardRef(memoInputText)
export { InputText, InputTextRef }

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
