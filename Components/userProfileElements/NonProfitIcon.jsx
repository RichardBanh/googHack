import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FACE } from "../../data/dumby.js";


export const NonProfitIcon = () => {
	const [dataProf, setProf] = useState([]);
	useEffect(() => {
		setProf(FACE);
	}, []);
	return (
		<View style={styles.postBlk}>
			{dataProf.map((x) => (
				<View
					style={{
						height: 150,
						width: "45%",
						marginBottom: 7,
						alignItems: "center",
						borderWidth: 1,
						paddingTop: 13,
						borderRadius: 6,
					}}
				>
					<Image
						style={{ width: 60, height: 60, borderRadius: 999 }}
						source={{ uri: x.branduri }}
					/>
					<Text style={{ marginTop: 10 }}>{x.brand}</Text>
					<TouchableOpacity>
						<View
							style={{
								width: 20,
								height: 20,
								alignContent: "center",
								justifyContent: "center",
								borderRadius: 999,
								borderWidth: 1,
								marginTop: 10,
								backgroundColor: "rgba(0,0,0,0.05)",
							}}
						>
							<Text
								style={{
									fontSize: 15,
									textAlign: "center",
								}}
							>
								?
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			))}
		</View>
	);
};
const styles = StyleSheet.create({
	postBlk: {
		marginLeft: 14,
		flexDirection: "row",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
	},
});
