import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export const FacebookPost = (props) => {
	return (
		<View style={styles.twit}>
			<View style={styles.iconblkspread}>
				<View style={styles.iconblkTwit}>
					<Image
						source={require("../Screens/images/facebook.png")}
						style={styles.buttonImg}
					/>
					<Text>{props.brand}</Text>
					<Image style={styles.brandLogoInt} source={{ uri: props.brandURI }} />
				</View>
				{/* <Image source={props.posturi != null ? { uri: props.posturi } : null} /> */}
				<TouchableOpacity>
					<Image
						style={styles.buttonImgS}
						source={require("../Screens/images/arrow-up-right.png")}
					/>
				</TouchableOpacity>
			</View>
			<Text>{props.text}</Text>
			<Text>{props.hashtag}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	twit: {
		width: "97%",
		backgroundColor: "white",
        paddingTop:10,
		borderWidth: 2,
		borderRadius: 25,
		justifyContent: "center",
		paddingLeft: 12,
		paddingRight: 12,
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
		resizeMode: "contain",
	},
});
