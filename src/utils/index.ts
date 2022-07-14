import { Keyboard, Platform } from 'react-native'

const isIOS = () => {
	return Platform.OS === 'ios'
}

const isAndroid = () => {
	return Platform.OS === 'android'
}

const dismissKeyboard = () => {
	Keyboard.dismiss()
}

export { isIOS, isAndroid, dismissKeyboard }
