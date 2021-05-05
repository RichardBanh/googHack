import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const SingleCause = (props) => {
	return (
		<View style={styles.bubble}>
			<Text>{props.cause}</Text>
		</View>
	);
};


