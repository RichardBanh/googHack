import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

export const InstagramPosts = (props) => {
	//query for posts load database then data image pull
	console.log(props);
	// const sendRedux = useDispatch();
	console.log(props.uri);

	return (
		<View style={styles.insta}>
			{/* this should be full background */}
			<ImageBackground style={styles.backg} source={{ uri: props.uri }}>
				<View style={styles.instlblBlk}>
					<View style={styles.brandlogoBlk}>
						<Image
							style={styles.brandLogoInt}
							source={{ uri: props.brandURI }}
						/>
						<Text style={{ marginLeft: 7 }}>{props.brand}</Text>
					</View>

					<TouchableOpacity
						onPress={() => {
							sendRedux({ type: "OPEN" });
						}}
					>
						<Image
							style={styles.buttonImgS}
							source={require("../Screens/images/arrow-up-right.png")}
						/>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	brandLogoInt: {
		borderRadius: 999,
		width: 20,
		height: 20,
	},
	insta: {
		width: 170,
		height: 170,
		margin: 10,
	},
	backg: {
		height: "100%",
		width: "100%",
	},
	instlblBlk: {
		width: "100%",
		height: "30%",
		backgroundColor: "rgba(255,255,255, .4)",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 10,
	},
	brandlogoBlk: { flexDirection: "row" },

	buttonImgS: {
		height: 17,
		width: 17,
		resizeMode: "contain",
	},
});
