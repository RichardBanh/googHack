import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import Login from "../Components/Login";
import { useSelector } from "react-redux";

const PostsCommited = () => {
	//query for posts load database then data image pull
	const postImageData = useSelector((state) => state.posts);
	const posts = () => {
		postImageData.map((x) => <Image source={require(x.imageLink)}></Image>);
	};
	return { posts };
};

export default PostsCommited;
