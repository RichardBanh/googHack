import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Modal,
	TextInput,
} from "react-native";

export const MediaBar = () => {
	const [currentSelected, setselected] = useState("all");
	return (
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
	);
};
