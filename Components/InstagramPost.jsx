import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Login from "./Login";
import { useSelector } from "react-redux";

const InstagramPosts = () => {
	//query for posts load database then data image pull

	return (
		<View style={styles.insta}>
			{/* this should be full background */}
			<ImageBackground
				style={styles.backg}
				source={{uri:{}}}
			>
				<View style={styles.instlblBlk}>
					<View style={styles.brandlogoBlk}>
						<Image
							style={styles.brandLogoInt}
							source={require("./images/redcross.png")}
						/>
						<Text style={{ marginLeft: 7 }}>Brand</Text>
					</View>
					
					<TouchableOpacity
						onPress={() => {
							sendRedux({ type: "OPEN" });
						}}
					>
						<Image
							style={styles.buttonImgS}
							source={require("./images/arrow-up-right.png")}
						/>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};

export default InstagramPosts;
