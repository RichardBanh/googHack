import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import conditonalLogIn from "./Screens/conditionalLoginScreen";
import userSettings from "./Screens/userSettings";

import { userPass, loggedin } from "./Redux/reducers/authReduc";
import {modalOpen} from "./Redux/reducers/modalOpenReduc"
import { post } from "./Redux/reducers/postsCommitedReduc";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Drawer.Navigator initialRouteName="Home">
					<Drawer.Screen name="Account" component={userSettings} />
					<Drawer.Screen name="Home" component={conditonalLogIn} />
				</Drawer.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

// list reducers here
const rootReducer = combineReducers({ userPass, loggedin, post, modalOpen });

const store = createStore(rootReducer, applyMiddleware(thunk));