import React, { FC, useRef } from 'react'
import { View, StyleSheet, Dimensions, Animated } from 'react-native'
import { LoginContainer, RegisterContainer } from './components'

const LoginScreen: FC = () => {
	const windowWidth = Dimensions.get('window').width
	const windowHeight = Dimensions.get('window').height
	const xTransaltion = useRef(new Animated.Value(0)).current
	const fadeInOpacity = useRef(new Animated.Value(1)).current
	const fadeOutOpacity = useRef(new Animated.Value(0)).current

	const imageSourceList = [
		'../../../assets/images/spiderverse.webp',
		'../../../assets/images/encantoMirable.jpeg',
		'../../../assets/images/shaunTheSheep.jpeg',
		'../../../assets/images/DrivePoster.jpeg'
	]

	const startBottomContainerAnimation = (showLogin: boolean) => {
		Animated.timing(xTransaltion, {
			toValue: showLogin ? 0 : -windowWidth,
			useNativeDriver: true,
			duration: 300
		}).start()
		Animated.timing(fadeInOpacity, {
			toValue: showLogin ? 1 : 0,
			useNativeDriver: true,
			duration: 300
		}).start()
		Animated.timing(fadeOutOpacity, {
			toValue: showLogin ? 0 : 1,
			useNativeDriver: true,
			duration: 300
		}).start()
	}

	return (
		<View style={styles.conatiner}>
			<Animated.Image
				style={{
					position: 'absolute',
					height: windowHeight,
					width: windowWidth,
					opacity: fadeOutOpacity
				}}
				source={require('../../../assets/images/spiderverse.webp')}
				resizeMode={'cover'}
			/>
			<Animated.Image
				style={{
					height: windowHeight,
					width: windowWidth,
					opacity: fadeInOpacity
				}}
				source={require('../../../assets/images/encantoMirable.jpeg')}
				resizeMode={'cover'}
			/>
			<Animated.View
				style={[
					styles.bottomContainerParent,
					{ transform: [{ translateX: xTransaltion }] }
				]}>
				<View style={styles.bottomContainer}>
					<LoginContainer
						onRegisterClick={() => {
							startBottomContainerAnimation(false)
						}}
					/>
					<RegisterContainer
						onLoginClick={() => {
							startBottomContainerAnimation(true)
						}}
					/>
				</View>
			</Animated.View>
		</View>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		flexGrow: 1,
		alignItems: 'center'
	},
	bottomContainerParent: {
		position: 'absolute',
		bottom: 0,
		left: 0
	},
	bottomContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end'
	}
})
