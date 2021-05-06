import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { CAUSE } from "../../data/dumby.js";

export const ScrollCause = () => {
	const [causeData, setCause] = useState([]);
	useEffect(() => {
		setCause(CAUSE);
	}, []);

	return (
		<View style={{ maxheight: 140 }}>
			<ScrollView style={{ width: "100%" }}>
				<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
					{causeData.map((x) => (
						<View style={styles.bubble}>
							<Text>{x.cause}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	bubble: {
		marginTop: 10,
		borderWidth: 1,
		padding: 10,
		borderRadius: 999,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10,
	},
});