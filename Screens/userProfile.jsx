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
			<View
				style={{
					margin: 30,
				}}
			>
				<View style={{ width: "100%", alignItems: "flex-end" }}>
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
				</View>
				<View
					style={{
						alignItems: "center",
						flexDirection: "row",
						marginTop: 60,
					}}
				>
					<Image
						style={{ width: 90, height: 90, borderRadius: 90 }}
						source={require("./images/backgrounds/magicpat.jpg")}
					/>
					<Text style={{ marginLeft: 90 }}>Name</Text>
				</View>
				<Text style={{ marginTop: 40, marginLeft: 13 }}>
					Are these causes you care about up to date?
				</Text>
				<View
					style={{
						marginTop: "5%",
						marginLeft: "3%",
						marginRight: "3%",
						flexDirection: "row",
					}}
				>
					{/* section */}
					<View style={styles.bubble}>
						<Text>Whoop</Text>
					</View>
					{/* section */}
				</View>

				<Text style={{ marginTop: 40, marginLeft: 13 }}>
					Are these Non-Profits up to date?
				</Text>
				<View>
					{/* each non-profit */}
					<View style={{}}>
						<Image
							style={{ width: 40, height: 40, borderRadius: 999 }}
							source={require("./images/backgrounds/magicpat.jpg")}
						/>
						<Text>Non-Profit Name</Text>
					</View>
				</View>
				<View>
					{/* PRICING PER POST */}
					<View>
						<Text>Is your pricing correct?</Text>
						<Text>YOU HAVE 100,000 FOLLOWERS</Text>
						<View>
							<Text>$2.00</Text>
							<Text> / POST</Text>
						</View>
						
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	// section
	bubble: {
		marginTop: 10,
		borderWidth: 1,
		padding: 10,
		borderRadius: 999,
	},
	// section
	mediaButtonBlock: {
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
