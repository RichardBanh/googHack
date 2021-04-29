import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const LinkedInPost = (props) => {
	return (
		<View style={styles.link}>
			<View style={styles.iconblkspread}>
				<View style={styles.iconblklink}>
					<Image
						source={require("../Screens/images/linkedin.png")}
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
	link: {
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
	iconblklink: {
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
		height: 23,
		width: 20,
		marginRight: 10,
		resizeMode: "contain",
	},
});
