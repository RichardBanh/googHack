import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "../Components/Login";
import { useSelector } from "react-redux";
import Working from "./workingScreen";

const conditonalLogIn = () => {
	const loggedin = useSelector((state) => state.loggedin.logged);
	return <View>{loggedin ? <Working /> : <Login />}</View>;
};

export default conditonalLogIn;
