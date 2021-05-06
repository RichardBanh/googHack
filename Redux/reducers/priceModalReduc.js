const initialStateMod = {
	pricemodal: false,
};

const initialPriceModal = {
	price: 0.01,
};

export const priceModalOpen = (state = initialStateMod, action) => {
	switch (action.type) {
		case "USER/PRICE/OPEN":
			return {
				modalOpen: !state.pricemodal,
			};
		default:
			return state;
	}
};

export const price = (state = initialPriceModal, action) => {
	switch (action.type) {
		case "USER/PRICE/SETPRICE":
			return {
				price: action.payload.price,
			};
		default:
			return state;
	}
};
