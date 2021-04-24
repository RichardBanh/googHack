import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Modal,
	ImageBackground,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

//this opens a floating modal

const DetailOpenModal = () => {
	const sendRedux = useDispatch();
	return (
		<Modal
			transparent={false}
			presentationStyle={"pageSheet"}
			animationType={"slide"}
		>
			<View style={styles.wholeModal}>
				<View style={styles.topblk}>
					<ImageBackground
						style={styles.instagramImg}
						source={require("./images/Capture.png")}
					></ImageBackground>
					<TouchableOpacity
						onPress={() => {
							sendRedux({ type: "CLOSE" });
						}}
					>
						<Image
							style={styles.downicon}
							source={require("./images/downLeft.png")}
						/>
					</TouchableOpacity>
				</View>

				{/* Dynamic */}
				<View style={styles.brandBlk}>
					<View style={styles.lefBlk}>
						<Image />
						<Text style={styles.fontSize}>Brand</Text>
					</View>
					<Text>10,000 Posts</Text>
				</View>
				{/* Dynamic */}

				{/* Dynamic */}
				<Text style={styles.contextBlk}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quae
					aperiam repudiandae, iste reiciendis accusantium dicta atque
					exercitationem et obcaecati saepe alias debitis numquam, sunt ab porro
					recusandae id voluptates?
				</Text>
				<Text style={styles.contextBlk}>#hashtag</Text>
				<Text style={styles.contextBlk}>Scheduled for Wednesday</Text>
				<View style={styles.btnBlk}>
					<TouchableOpacity onPress={() => {}}>
						<View style={styles.buttonCom}>
							<Text>COMMIT</Text>
						</View>
					</TouchableOpacity>
				</View>
				{/* dynamic */}
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	instagramImg: { width: 300, height: 290, marginTop: 50, marginLeft: 25 },
	btnBlk: { width: "85%", flexDirection: "row", justifyContent: "flex-end" },
	buttonCom: {
		marginTop: 40,
		height: 40,
		width: 200,
		backgroundColor: "green",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
	},
	lefBlk: { flexDirection: "row" },
	contextBlk: { width: "85%", marginTop: 15 },
	brandBlk: {
		marginTop: 15,
		width: "85%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	fontSize: {
		fontSize: 16,
	},
	wholeModal: {
		alignItems: "center",
		height: "95%",
		width: "90%",
		marginLeft: "3%",
		marginRight: "5%",
		marginTop: "10%",
	},
	topblk: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	downicon: {
		width: 22,
		height: 22,
	},
});

export default DetailOpenModal;
