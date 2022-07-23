import { createSlice } from "@reduxjs/toolkit";

const favoritesSlices = createSlice({
	name: "favorites",
	initialState: {
		ids: [],
	},
	reducers: {
		addFavorites: (state, action) => {
			state.ids.push(action.payload.id);
		},
		removeFavorites: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.id), 1);
		},
	},
});

export const addFavorite = favoritesSlices.actions.addFavorites;
export const removeFavorite = favoritesSlices.actions.removeFavorites;

export default favoritesSlices.reducer;
