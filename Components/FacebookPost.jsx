import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const FacebookPost = (props) => {
	console.log(props.posturi);
	return (
		<View style={styles.face}>
			<View style={styles.iconblkspread}>
				<View style={styles.iconblkface}>
					<Image
						source={require("../Screens/images/facebook.png")}
						style={styles.buttonImg}
					/>
					<Text style={{ marginLeft: 7 }}>{props.brand}</Text>
					<Image style={styles.brandLogoInt} source={{ uri: props.brandURI }} />
				</View>

				<TouchableOpacity>
					<Image
						style={styles.buttonImgS}
						source={require("../Screens/images/arrow-up-right.png")}
					/>
				</TouchableOpacity>
			</View>
			{props.posturi != null ? (
				<Image
					style={{ width: 200, height: 200 }}
					source={{ uri: props.posturi }}
				/>
			) : (
				<Text></Text>
			)}
			<Text style={{ marginTop: 10 }}>{props.text}</Text>
			<Text>{props.hashtag}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	face: {
		width: "97%",
		backgroundColor: "white",
		paddingTop: 10,
		borderWidth: 2,
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		paddingLeft: 12,
		paddingRight: 12,
	},
	iconblkspread: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginLeft: 10,
		marginRight: 10,
	},
	iconblkface: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
	},
	buttonImgS: {
		height: 17,
		width: 17,
		resizeMode: "contain",
	},
	buttonImg: {
		height: 25,
		width: 23,
		resizeMode: "contain",
	},
});
