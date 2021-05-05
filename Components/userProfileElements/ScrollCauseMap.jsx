import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from "react-native";

import { CAUSE } from "../../data/dumby.js";

export const ScrollCause = () => {
	const [causeData, setCause] = useState([]);
	useEffect(() => {
		setCause(CAUSE);
	}, []);

	return (
		<ScrollView>
			{causeData.map((x) => (
				<View style={styles.bubble}>
					<Text>{x.cause}</Text>
				</View>
			))}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	bubble: {
		marginTop: 10,
		borderWidth: 1,
		padding: 10,
		borderRadius: 999,
	},
});
