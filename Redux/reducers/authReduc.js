const initialState = { username: "", password: "", signin: false };
//need to change this to false>
const initLODGE = { logged: true };

//also need to store loggedin key.. add to the above

export const userPass = (state = initialState, action) => {
	switch (action.type) {
		case "SIGNUP":
			return {
				username: action.payload.username,
				password: action.payload.password,
				signin: !state.signin,
			};
		default:
			return state;
	}
};

export const loggedin = (state = initLODGE, action) => {
	switch (action.type) {
		case "LODGEIN":
			return { logged: !state.logged };
		default:
			return state;
	}
};
