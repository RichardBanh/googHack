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
		<Modal
			transparent={false}
			presentationStyle={"pageSheet"}
			animationType={"slide"}
		>
			<View style={styles.wholeModal}>
				<Text>Hey, your current set price is: {price} per post</Text>
				<TextInput
					onChangeText={(text) => setText(text)}
					keyboardType="numeric"
				/>
				<TouchableOpacity
					onPress={() =>
						sendRedux({ type: "USER/PRICE/SETPRICE", payload: { price: text } })
					}
				>
					<View style={{ padding: 10, borderWidth: 1, borderColor: "black" }}>
						<Text>Set Price</Text>
					</View>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	wholeModal: {
		alignItems: "center",
		height: "95%",
		width: "90%",
		marginLeft: "3%",
		marginRight: "5%",
		marginTop: "10%",
	},
});
