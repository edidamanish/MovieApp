import { useEffect, useState } from 'react'
import { Keyboard, KeyboardEvent } from 'react-native'
import { isIOS } from '../utils'

const useKeyboard = () => {
	const SHOW_EVENT = isIOS() ? 'keyboardWillShow' : 'keyboardDidShow'
	const HIDE_EVENT = isIOS() ? 'keyboardWillHide' : 'keyboardDidHide'

	const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
	const [keyboardHeight, setKeyboardHeight] = useState(0)

	const onKeyboardDidShow = (event: KeyboardEvent) => {
		const {
			endCoordinates: { height }
		} = event
		setIsKeyboardVisible(true)
		setKeyboardHeight(height)
	}

	const onKeyboardDidHide = () => {
		setIsKeyboardVisible(false)
		setKeyboardHeight(0)
	}

	useEffect(() => {
		const keyboardShowSubscriber = Keyboard.addListener(
			SHOW_EVENT,
			onKeyboardDidShow
		)
		const keyboardHideSubscriber = Keyboard.addListener(
			HIDE_EVENT,
			onKeyboardDidHide
		)
		return () => {
			keyboardShowSubscriber.remove()
			keyboardHideSubscriber.remove()
		}
	}, [])

	return { isKeyboardVisible, keyboardHeight }
}

export { useKeyboard }
