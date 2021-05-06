import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Modal,
	TextInput,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";

export const PriceModal = () => {
	const price = useSelector((state) => state.price.price);
	const sendRedux = useDispatch();
	const [text, setText] = useState("");
	return (
		<Modal transparent={true} visible={true} animationType={"fade"}>
			<View
				style={{
					backgroundColor: "rgba(128,128,128,0.9)",
					width: "100%",
					height: "100%",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View style={styles.wholeModal}>
					<Text>Hey, your current set price is: {price} per post</Text>
					<TextInput
						style={{
							width: "60%",
							height: 40,
							borderColor: "black",
							borderWidth: 1,
							marginTop: 20,
							marginBottom: 20,
							borderRadius:6
						}}
						onChangeText={(text) => setText(text)}
						keyboardType="numeric"
					/>

					<TouchableOpacity
						onPress={() =>
							sendRedux({
								type: "USER/PRICE/SETPRICE",
								payload: { price: text },
							})
						}
					>
						<View style={{ padding: 10, borderWidth: 1, borderColor: "black", borderRadius:7  }}>
							<Text>Set Price</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() =>
							sendRedux({
								type: "USER/PRICE/CLOSE",
							})
						}
						style={{ alignSelf: "flex-start", marginTop: 10 }}
					>
						<Image
							style={{ width: 17, height: 17 }}
							source={require("../../Screens/images/downLeft.png")}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	wholeModal: {
		alignItems: "center",
		padding: 15,
		paddingTop: 30,
		height: "25%",
		width: "90%",
		backgroundColor: "white",
		borderRadius: 8,
	},
});
