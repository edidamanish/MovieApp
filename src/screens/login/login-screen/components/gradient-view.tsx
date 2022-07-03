import React, { FC } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { LinearGradient, Stop, Rect, Svg } from 'react-native-svg'

export const GradientView: FC = () => {
	const windowWidth = Dimensions.get('window').width
	return (
		<View style={styles.conatiner}>
			<Svg width={windowWidth} height={40}>
				<LinearGradient id="Gradient" x1="0" y1="0" x2="0" y2="1">
					<Stop offset="0" stopColor="#171717" stopOpacity="0.1" />
					<Stop offset="0.4" stopColor="#171717" stopOpacity="0.8" />
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
	)
}

const styles = StyleSheet.create({
	conatiner: {
		marginTop: 0,
		width: '100%'
	}
})
