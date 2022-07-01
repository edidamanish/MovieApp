import React, { FC } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type InputTextProps = {
	placeholderText: string;
};

const InputText: FC<InputTextProps> = ({ placeholderText }) => {
	return (
		<TextInput
			style={styles.input}
			placeholder={placeholderText}
			placeholderTextColor={'white'}
		/>
	);
};

export default InputText;

const styles = StyleSheet.create({
	input: {
		height: 40,
		borderBottomWidth: 1,
		padding: 10,
		color: 'white',
		borderBottomColor: 'white'
	}
});
