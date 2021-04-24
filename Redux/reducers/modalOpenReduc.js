const initialState = { modalOpen: false };


export const modalOpen = (state = initialState, action) => {
	switch (action.type) {
		case "OPEN":
			return {
				modalOpen: true,
			};
		case "CLOSE": 
			return {
				modalOpen: false,
			};
		default:
			return state;
	}
};

