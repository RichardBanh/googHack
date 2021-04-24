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

const userSettings = () => {
	return (
		<SafeAreaView>
			<Image
				style={styles.logo}
				source={require("../Components/images/logo.gif")}
			/>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	logo: {
		height: 150,
		width: 150,
		marginTop: "10%",
	},
});
export default userSettings;
