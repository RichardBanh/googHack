import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from "react-native";

import { ScrollCause } from "../Components/userProfileElements/ScrollCauseMap";
import { NonProfitIcon } from "../Components/userProfileElements/NonProfitIcon";
import { useSelector } from "react-redux";
import { PriceModal } from "../Components/userProfileElements/PriceModal";

export const UserProfile = () => {
	const modalPriceOpen = useSelector((state) => state.priceModalOpen.modalOpen);
	const [currentSelected, setselected] = useState("all");
	return (
		<SafeAreaView>
			{modalPriceOpen ? <PriceModal /> : <Text></Text>}
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
						marginTop: 40,
						marginBottom: 30,
					}}
				>
					<Image
						style={{ width: 90, height: 90, borderRadius: 90 }}
						source={require("./images/backgrounds/magicpat.jpg")}
					/>
					<Text style={{ marginLeft: 90 }}>Name</Text>
				</View>

				{/* PRICING PER POST */}
				<View
					style={{
						marginBottom: 10,
						marginLeft: "4%",
						marginRight: "1%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<View>
						<Text>Is your pricing correct?</Text>
						<Text>YOU HAVE 100,000 FOLLOWERS</Text>
						<Text>$2.00 / POST</Text>
					</View>
					<Image
						style={{ width: 17, height: 17 }}
						source={require("./images/arrow-up-right.png")}
					/>
				</View>

				<View style={{ flexDirection: "row" }}>
					<Text style={{ marginTop: 3, marginLeft: 13 }}>
						Are these causes you care about up to date?
					</Text>
					<Image
						style={{ marginLeft: 9, width: 17, height: 17 }}
						source={require("./images/arrow-up-right.png")}
					/>
				</View>
				<View
					style={{
						marginTop: "5%",
						marginLeft: "3%",
						marginRight: "3%",
						flexDirection: "row",
					}}
				>
					{/* section */}

					<ScrollCause />

					{/* section */}
				</View>
				<View
					style={{
						flexDirection: "row",
						marginTop: 40,
						marginRight: 10,
						justifyContent: "space-between",
					}}
				>
					<Text style={{ marginLeft: 13, marginBottom: 10 }}>
						Are these Non-Profits up to date?
					</Text>
					<TouchableOpacity
						onPress={() =>
							sendRedux({
								type: "USER/PRICE/OPEN",
							})
						}
					>
						<Image
							style={{ width: 17, height: 17 }}
							source={require("./images/arrow-up-right.png")}
						/>
					</TouchableOpacity>
				</View>
				<ScrollView>
					<View style={styles.postBlk}>
						{/* each non-profit */}

						<NonProfitIcon />
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
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
