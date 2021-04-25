import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ImageBackground,
} from "react-native";


const Insta = () => {
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