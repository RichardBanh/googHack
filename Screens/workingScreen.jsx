import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
} from "react-native";
import DetailOpenModal from "./openDetailModal";
import { useSelector, useDispatch } from "react-redux";

//dumbie data

import { INSTAPOST, BRAND } from "../data/dumby.js";

import { InstagramPosts } from "../Components/InstagramPost";
//should work on mapping to picker
//how to find brandlogo to?
// const newArraywithbrandURI = (arr1, arr2) => {
// 	for (i = 0; i < arr1.length; i++) {
// 		const brandk = arr1[i].brand;
// 		const matchingobj = arr2.find(({ brand }) => brand === brandk);
// 		const brandURI = matchingobj.branduri;
// 		arr1[i].branduri = brandURI;
// 	}
// 	return arr1;
// };

const Working = () => {
	const [currentSelected, setselected] = useState("all");
	const [data, setData] = useState([]);
	//Modal must stay in workingScreen
	const modalOpened = useSelector((state) => state.modalOpen.modalOpen);
	const sendRedux = useDispatch();

	useEffect(() => {
		async function newArraywithbrandURI(arr1, arr2) {
			for (i = 0; i < arr1.length; i++) {
				const brandk = arr1[i].brand;
				const matchingobj = arr2.find(({ brand }) => brand === brandk);
				const brandURI = matchingobj.branduri;
				arr1[i].branduri = brandURI;
			}
			setData([...arr1]);
		}
		newArraywithbrandURI(INSTAPOST, BRAND);
	}, []);
	const combineDataDisplay = data.map(
		(x) => {
			// let props = { uri: obj.uri, brandURI: obj.branduri, brand: obj.brand };
			let props = { uri: x.uri, brandURI: x.branduri, brand: x.brand };
			// return <InstagramPosts {...props} />;
			return <InstagramPosts {...props} />;
		}

		// combined.map((x) => {
		//
		// 	return <InstagramPosts {...props} />;
		// });

		// return component;
		// combined = combined.map(({ brandURI, brand, postID, shared, uri }) => {
		// 	// <InstagramPosts props={(brandURI, brand, postID, shared, uri)} />
		// 	console.log(brandURI, )
		// });
	);

	return (
		<SafeAreaView>
			{modalOpened ? <DetailOpenModal /> : <Text></Text>}
			<View style={styles.topblock}>
				<Text>Posts Avaliable</Text>
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
			<ScrollView>
				<View style={styles.instaBl}>
					{/* {data.length === 0 ? <Text></Text> : combineDataDisplay} */}
					{combineDataDisplay}
				</View>

				{/* twitter block */}
				<View style={styles.twittBl}>
					{/* single post */}
					<View style={styles.twit}>
						<View style={styles.iconblkspread}>
							<View style={styles.iconblkTwit}>
								<Image
									source={require("./images/twitter.png")}
									style={styles.buttonImg}
								/>
								<Text> Red Cross</Text>
							</View>
							<TouchableOpacity>
								<Image
									style={styles.buttonImgS}
									source={require("./images/arrow-up-right.png")}
								/>
							</TouchableOpacity>
						</View>
						<Text>
							aksjdhfikajhsdkfjhakjsdhgfklajhsdkjghaosidfhgoiuhabsdkjhfkj
						</Text>
						<Text>#hashtag</Text>
					</View>
				</View>
				<View style={styles.faceBl}>
					{/* single post */}
					<View style={styles.face}>
						<View style={styles.iconblkspread}>
							<View style={styles.iconblkFace}>
								<Image
									source={require("./images/facebook.png")}
									style={styles.buttonImg}
								/>
								<Text> Red Cross</Text>
							</View>
							<TouchableOpacity>
								<Image
									style={styles.buttonImgS}
									source={require("./images/arrow-up-right.png")}
								/>
							</TouchableOpacity>
						</View>
						<Text>
							aksjdhfikajhsdkfjhakjsdhgfklajhsdkjghaosidfhgoiuhabsdkjhfkj
						</Text>
						<Text>#hashtag</Text>
					</View>
				</View>
				<View style={styles.linkBl}>
					{/* single post */}
					<View style={styles.link}>
						<View style={styles.iconblkspread}>
							<View style={styles.iconblkTwit}>
								<Image
									source={require("./images/linkedin.png")}
									style={styles.buttonImg}
								/>
								{/* dynamic */}
								<Text> Red Cross</Text>
							</View>
							<TouchableOpacity>
								<Image
									style={styles.buttonImgS}
									source={require("./images/arrow-up-right.png")}
								/>
							</TouchableOpacity>
						</View>
						{/* dynamic */}
						<Image
							source={require("./images/generic/topicLinkedinPhoto.png")}
							style={styles.img}
						/>
						<View>
							<Text>
								aksjdhfikajhsdkfjhakjsdhgfklajhsdkjghaosidfhgoiuhabsdkjhfkj
							</Text>
							<Text>#hashtag</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	brandlogoBlk: { flexDirection: "row" },
	brandLogoInt: {
		borderRadius: 999,
		width: 20,
		height: 20,
	},
	instaLogo: {
		width: 20,
		height: 20,
	},
	instlblBlk: {
		width: "100%",
		height: "30%",
		backgroundColor: "rgba(255,255,255, .4)",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		paddingLeft: 10,
		paddingRight: 10,
	},
	img: { width: "98%", height: 200, marginTop: 5, marginBottom: 5 },
	linkedTextBlk: {},
	faceBl: {
		flexDirection: "row",
		width: "100%",
		flexWrap: "wrap",
		justifyContent: "center",
		marginTop: 15,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: "navy",
	},
	face: {
		width: "97%",
		height: 100,
		borderColor: "navy",
		borderWidth: 2,
		borderRadius: 10,
		justifyContent: "center",
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "white",
	},
	link: {
		width: "97%",
		borderColor: "grey",
		borderWidth: 2,
		justifyContent: "center",
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingTop: 10,
		backgroundColor: "white",
		alignItems: "center",
	},
	iconblkTwit: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
	},
	iconblkFace: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		marginLeft: -10,
	},
	iconblkspread: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginLeft: 10,
		marginRight: 10,
	},
	iconblkspreadFace: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginLeft: 10,
		marginRight: 10,
	},
	twit: {
		width: "97%",
		height: 100,
		borderColor: "navy",
		borderWidth: 2,
		borderRadius: 25,
		justifyContent: "center",
		paddingLeft: 10,
		paddingRight: 10,
	},
	twittBl: {
		flexDirection: "row",
		width: "100%",
		flexWrap: "wrap",
		justifyContent: "center",
		marginTop: 15,
		paddingBottom: 10,
	},
	linkBl: {
		flexDirection: "row",
		width: "100%",
		flexWrap: "wrap",
		justifyContent: "center",
		marginTop: 15,
		marginBottom: 100,
	},
	instaBl: {
		flexDirection: "row",
		width: "100%",
		flexWrap: "wrap",
		justifyContent: "center",
		marginTop: 15,
	},
	backg: {
		height: "100%",
		width: "100%",
	},
	insta: {
		width: 170,
		height: 170,
		margin: 10,
	},

	mediaButtonBlock: {
		marginTop: 10,
		width: 200,
		height: 25,
		justifyContent: "space-around",
		flexDirection: "row",
		alignItems: "center",
	},
	buttonImg: {
		height: 25,
		width: 23,
		resizeMode: "contain",
	},
	buttonImgS: {
		height: 17,
		width: 17,
		resizeMode: "contain",
	},
	topblock: {
		width: "100%",
		paddingBottom: 10,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});

export default Working;
