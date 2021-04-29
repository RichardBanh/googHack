import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const TwitterPosts = (props) => {
	return (
		<View style={styles.twit}>
			<View style={styles.iconblkspread}>
				<View style={styles.iconblkTwit}>
					<Image
						source={require("../Screens/images/twitter.png")}
						style={styles.buttonImg}
					/>
					<Text>{props.brand}</Text>
					<Image style={styles.brandLogoInt} source={{ uri: props.brandURI }} />
				</View>
				<TouchableOpacity>
					<Image
						style={styles.buttonImgS}
						source={require("../Screens/images/arrow-up-right.png")}
					/>
				</TouchableOpacity>
			</View>
			<Text style={{ marginTop: 10 }}>{props.text}</Text>
			<Text>{props.hashtag}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	twit: {
		width: "97%",
		height: 100,
		borderColor: "navy",
		borderWidth: 2,
		borderRadius: 25,
		justifyContent: "center",
		paddingLeft: 10,
		paddingRight: 10,
	},
	iconblkspread: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginLeft: 10,
		marginRight: 10,
	},
	iconblkTwit: {
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
		marginRight: 10,
		resizeMode: "contain",
	},
});
