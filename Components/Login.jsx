import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
	Image,
	TouchableOpacity,
} from "react-native";
//data
import userlog from "./dumby";
const userdat = userlog;

export default function Login() {
	const [userEmail, onChangeEmail] = useState("");
	const [userPass, onChangePass] = useState("");

	//redux connector
	const sendRedux = useDispatch();
	//this needs to be async function
	const { email, password } = userdat[0];
	const onClickr = () => {
		//need to run a loading screen
		if (userEmail === email && userPass === password) {
			sendRedux({ type: "LODGEIN" });
		}
	};
	return (
		<View style={styles.login}>
			<SafeAreaView style={styles.iconU}>
				<View style={styles.headerInput}>
					<Image style={styles.logo} source={require("./images/logo.gif")} />
					<TextInput
						value={userEmail}
						style={styles.input}
						placeholder={"email"}
						onChangeText={onChangeEmail}
					/>
					<TextInput
						style={styles.input}
						placeholder={"password"}
						onChangeText={onChangePass}
						secureTextEntry={true}
					/>
					<TouchableOpacity
						style={{
							backgroundColor: "#03649C",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: 7,
							marginTop: "10%",
							width: "62%",
							height: 50,
							paddingVertical: 10,
							paddingHorizontal: 12,
						}}
						onPress={onClickr}
					>
						<Text style={styles.buttText}>Log Me In</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "#2E7D39",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: 7,
							marginTop: "5%",
							width: "62%",
							height: 50,
							paddingVertical: 10,
							paddingHorizontal: 12,
						}}
					>
						<Text style={{ color: "white" }}>Sign Me Up</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	);
}

// to access state you have go state.storename.stateitem

const styles = StyleSheet.create({
	login: {
		backgroundColor: "white",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
	iconU: {
		alignItems: "center",
		width: "100%",
	},
	logo: {
		height: 150,
		width: 150,
		marginTop: "10%",
	},
	headerInput: { alignItems: "center", marginTop: 60, width: "100%" },
	input: {
		marginTop: 40,
		height: 40,
		width: "65%",
		borderBottomWidth: 1,
		borderColor: "#808080",
		fontSize: 20,
	},
	butt: {
		backgroundColor: "#03649C",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 7,
		marginTop: "5%",
		width: "62%",
		height: 50,
		paddingVertical: 10,
		paddingHorizontal: 12,
	},
	buttText: {
		color: "white",
	},
});
