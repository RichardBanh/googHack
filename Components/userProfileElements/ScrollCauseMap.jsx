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
import { useSelector } from "react-redux";
import SingleCause from "./SingleCause";

export const ScrollCause = () => {
	const singleCause = causeData.map((x) => {
		<SingleCause cause={x.cause} />;
	});
	return <ScrollView>{singleCause}</ScrollView>;
};
