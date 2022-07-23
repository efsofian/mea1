import {
	View,
	Image,
	Text,
	StyleSheet,
	ScrollView,
	Button,
} from "react-native";
import { useLayoutEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { FavoritesContext } from "../state/context/favorites.context";
import MealDetail from "../components/mealdetail.component";
import Subtitle from "../components/MealDetail/subtitle.component";
import List from "../components/MealDetail/list.component";
import IconButton from "../components/iconbutton.component";
import { addFavorite, removeFavorite } from "../state/redux/favorites.redux";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
	// const FavCtx = useContext(FavoritesContext);
	const favoritesMealsIds = useSelector((state) => state.favoriteMeals.ids);
	const dispatch = useDispatch();

	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	// const mealIsFavorite = FavCtx.ids.includes(mealId);
	const mealIsFavorite = favoritesMealsIds.includes(mealId);

	const changeFavoriteStatusHandler = () => {
		if (mealIsFavorite) {
			// FavCtx.removeFavorite(mealId);
			dispatch(removeFavorite({ id: mealId }));
		} else {
			// FavCtx.addFavorite(mealId);
			dispatch(addFavorite({ id: mealId }));
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					onPress={changeFavoriteStatusHandler}
					icon={mealIsFavorite ? "star" : "star-outline"}
					color="white"
				/>
			),
		});
	}, [navigation, changeFavoriteStatusHandler]);
	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetail
				duration={selectedMeal.duration}
				complexity={selectedMeal.complexity}
				affordability={selectedMeal.affordability}
				textStyle={styles.detailText}
			/>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: "100%",
		height: 350,
	},
	title: {
		fontWeight: "bold",
		fontSize: 24,
		margin: 8,
		textAlign: "center",
		color: "white",
	},
	detailText: {
		color: "white",
	},
	listOuterContainer: {
		alignItems: "center",
	},
	listContainer: {
		maxWidth: "80%",
	},
});

export default MealDetailScreen;
