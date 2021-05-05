import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const SingleCause = (props) => {
	<View style={styles.bubble}>
		<Text>{props.cause}</Text>
	</View>;
};

const styles = StyleSheet.create({
	bubble: {
		marginTop: 10,
		borderWidth: 1,
		padding: 10,
		borderRadius: 999,
	},
});