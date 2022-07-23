import { StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
// import { FavoritesContext } from "../state/context/favorites.context";
import MealList from "../components/MealList/meallist.component";
// import { useContext } from "react";
import { MEALS } from "../data/dummy-data";

const FavoriteScreen = () => {
	// const FavCtx = useContext(FavoritesContext);
	// const favMeals = MEALS.filter((meal) => FavCtx.ids.includes(meal.id));
	const fav = useSelector((state) => state.favoriteMeals.ids);
	const favMeals = MEALS.filter((meal) => fav.includes(meal.id));

	if (favMeals.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>You dont have favorite meals yet.</Text>
			</View>
		);
	}

	return <MealList items={favMeals} />;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
});

export default FavoriteScreen;
