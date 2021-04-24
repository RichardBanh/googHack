const initialState = {
	posts: [
		{
			imageLink: "",
			commitedWhen: "",
			postWhen: "",
			imageCollection: "",
			focusType: "",
			brand: "",
			socmedia: "",
			dimensions: "",
		},
	],
};

export const post = (state = initialState, action) => {
	switch (action.type) {
		case "ADD":
			return {
				posts: [
					...state.posts,
					{
						imageLink: action.payload.imageLink,
						commitedWhen: action.payload.commitedWhen,
						postWhen: action.payload.postWhen,
						imageCollection: action.payload.imageCollection,
						focusType: action.payload.focusType,
						brand: action.payload.brand,
						socmedia: action.payload.socmedia,
						dimensions: action.payload.dimensions,
					},
				],
			};

		default:
			return state;
	}
};
