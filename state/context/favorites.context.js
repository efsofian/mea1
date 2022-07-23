import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: () => {},
	removeFavorite: () => {},
});

const FavoritesContextProvider = ({ children }) => {
	const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);
	const addFavorite = (id) => {
		setFavoriteMealsIds((oldList) => [...oldList, id]);
	};
	const removeFavorite = (id) => {
		setFavoriteMealsIds((oldList) => oldList.filter((item) => item !== id));
	};

	const value = {
		ids: favoriteMealsIds,
		addFavorite: addFavorite,
		removeFavorite: removeFavorite,
	};
	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
};

export default FavoritesContextProvider;
