import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity onPress={()=> console.log('test press!!')} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>Click Me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
});

export default Button;
