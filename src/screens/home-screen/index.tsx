import React, { FC, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from './../../components'
import { HomeIcon } from './../../assets'
import { UserContext } from './../../contexts'

const HomeScreen: FC = () => {
	const { setIsLoggedIn } = useContext(UserContext)
	return (
		<View style={styles.conatiner}>
			<Text>Home Screen</Text>
			<Button
				type="secondary"
				text="Log Out"
				onPress={() => {
					setIsLoggedIn(false)
				}}
			/>
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'red'
	}
})
