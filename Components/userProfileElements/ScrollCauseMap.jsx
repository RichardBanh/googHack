import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { set } from "react-native-reanimated";

import { CAUSE, SELECTEDCAUSE } from "../../data/dumby.js";

export const ScrollCause = () => {
	const [causeData, setCause] = useState([]);
	const [selected, setSelected] = useState([]);
	const [loaded, setLoad] = useState(false);
	const [unselected, setUnselected] = useState([]);

	function subobj(arr1, arr2) {
		const result = arr1.filter((ad) =>
			arr2.every((fd) => fd.cause !== ad.cause)
		);
		return result;
	}

	useEffect(() => {
		// setCause(CAUSE);
		setSelected(SELECTEDCAUSE);
		setUnselected(subobj(CAUSE, SELECTEDCAUSE));
		setLoad(true);
	}, []);

	return (
		<View style={{ maxheight: 140 }}>
			<ScrollView style={{ width: "100%" }}>
				<View style={{ flexDirection: "row", flexWrap: "wrap" }}>
					{loaded ? (
						selected.map(
							(x) => (
								<View style={styles.bubble}>
									<Text>{x.cause}</Text>
								</View>
							),
							unselected.map((x) => (
								<View style={styles.bubble}>
									<Text>{x.cause}</Text>
								</View>
							))
						)
					) : (
						<Text></Text>
					)}
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
