import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

export const UserProfile = () => {
	const [currentSelected, setselected] = useState("all");
	return (
		<SafeAreaView>
			<Image
				
			/>
			<View style={styles.mediaButtonBlock}>
				{/* need to move this to a own component and map */}
				<TouchableOpacity onPress={() => setselected("all")}>
					<Image
						style={[
							styles.buttonImg,
							{ opacity: currentSelected === "all" ? 0.1 : 1 },
						]}
						source={require("./images/circle.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setselected("twit")}>
					<Image
						style={[
							styles.buttonImg,
							{ opacity: currentSelected === "twit" ? 0.1 : 1 },
						]}
						source={require("./images/twitter.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setselected("insta")}>
					<Image
						style={[
							styles.buttonImg,
							{ opacity: currentSelected === "insta" ? 0.1 : 1 },
						]}
						source={require("./images/instagram.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setselected("face")}>
					<Image
						style={[
							styles.buttonImg,
							{ opacity: currentSelected === "face" ? 0.1 : 1 },
						]}
						source={require("./images/facebook.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setselected("lin")}>
					<Image
						style={[
							styles.buttonImg,
							{ opacity: currentSelected === "lin" ? 0.1 : 1 },
						]}
						source={require("./images/linkedin.png")}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	mediaButtonBlock: {
		marginTop: 10,
		width: 200,
		height: 25,
		justifyContent: "space-around",
		flexDirection: "row",
		alignItems: "center",
	},
	buttonImg: {
		height: 25,
		width: 23,
		resizeMode: "contain",
	},
	buttonImgS: {
		height: 17,
		width: 17,
		resizeMode: "contain",
	},
	topblock: {
		width: "100%",
		paddingBottom: 10,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});
