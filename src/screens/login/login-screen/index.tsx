import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	Dimensions,
	Animated
} from 'react-native';
import { LinearGradient, Stop, Rect, Svg } from 'react-native-svg';

const LoginScreen: FC = () => {
	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;
	const xTransaltion = useRef(new Animated.Value(0)).current;
	const fadeInOpacity = useRef(new Animated.Value(1)).current;
	const fadeOutOpacity = useRef(new Animated.Value(0)).current;

	const imageSourceList = [
		'../../../assets/images/spiderverse.webp',
		'../../../assets/images/encantoMirable.jpeg',
		'../../../assets/images/shaunTheSheep.jpeg',
		'../../../assets/images/DrivePoster.jpeg'
	];

	const startBottomContainerAnimation = (showLogin: boolean) => {
		Animated.timing(xTransaltion, {
			toValue: showLogin ? 0 : -windowWidth,
			useNativeDriver: true,
			duration: 300
		}).start();
		Animated.timing(fadeInOpacity, {
			toValue: showLogin ? 1 : 0,
			useNativeDriver: true,
			duration: 300
		}).start();
		Animated.timing(fadeOutOpacity, {
			toValue: showLogin ? 0 : 1,
			useNativeDriver: true,
			duration: 300
		}).start();
	};

	const onRegisterClick = () => {
		startBottomContainerAnimation(false);
	};

	const onLoginClick = () => {
		startBottomContainerAnimation(true);
	};

	const GradientView: FC = () => {
		return (
			<View style={styles.gradient}>
				<Svg width={windowWidth} height={40}>
					<LinearGradient id="Gradient" x1="0" y1="0" x2="0" y2="1">
						<Stop
							offset="0"
							stopColor="#171717"
							stopOpacity="0.1"
						/>
						<Stop
							offset="0.4"
							stopColor="#171717"
							stopOpacity="0.8"
						/>
						<Stop offset="1" stopColor="#171717" stopOpacity="1" />
					</LinearGradient>
					<Rect
						x="0"
						y="0"
						width={windowWidth}
						height={40}
						fill="url(#Gradient)"
					/>
				</Svg>
			</View>
		);
	};

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
					styles.bottomContainer,
					{ transform: [{ translateX: xTransaltion }] }
				]}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'flex-end'
					}}>
					<View style={{ width: windowWidth, bottom: 0 }}>
						<GradientView />
						<View style={styles.bottomContainerSub}>
							<Text style={styles.loginText}>Login</Text>
							<TextInput
								style={styles.input}
								placeholder={'User Name'}
								placeholderTextColor={'white'}
							/>
							<TextInput
								style={styles.input}
								placeholder={'Password'}
								placeholderTextColor={'white'}
							/>
							<View style={styles.ctaContainer}>
								<TouchableOpacity
									style={styles.secondaryButton}>
									<Text style={styles.secondaryButtonText}>
										Register
									</Text>
								</TouchableOpacity>
								<View style={{ width: 10 }} />
								<TouchableOpacity
									style={styles.primaryButton}
									onPress={onRegisterClick}>
									<Text style={styles.primaryButtonText}>
										Login
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={{ width: windowWidth }}>
						<GradientView />
						<View style={styles.bottomContainerSub}>
							<Text style={styles.loginText}>Register</Text>
							<TextInput
								style={styles.input}
								placeholder={'Email ID'}
								placeholderTextColor={'white'}
							/>
							<TextInput
								style={styles.input}
								placeholder={'User Name'}
								placeholderTextColor={'white'}
							/>
							<TextInput
								style={styles.input}
								placeholder={'Password'}
								placeholderTextColor={'white'}
							/>
							<View style={styles.ctaContainer}>
								<TouchableOpacity
									style={styles.secondaryButton}>
									<Text style={styles.secondaryButtonText}>
										Login
									</Text>
								</TouchableOpacity>
								<View style={{ width: 10 }} />
								<TouchableOpacity
									style={styles.primaryButton}
									onPress={onLoginClick}>
									<Text style={styles.primaryButtonText}>
										Register
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</Animated.View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		flexGrow: 1,
		alignItems: 'center'
	},
	backgroundImage: {
		width: '100%',
		height: '100%'
	},
	bottomContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0
	},
	bottomContainerSub: { backgroundColor: '#171717' },
	loginText: {
		marginTop: 20,
		marginBottom: 20,
		marginHorizontal: 20,
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25
	},
	gradient: {
		marginTop: 0,
		width: '100%'
	},
	ctaContainer: {
		flexDirection: 'row',
		marginHorizontal: 20,
		marginTop: 20,
		marginBottom: 50
	},
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
	},
	input: {
		height: 40,
		marginVertical: 12,
		marginHorizontal: 20,
		borderBottomWidth: 1,
		padding: 10,
		color: 'white',
		borderBottomColor: 'white'
	}
});
