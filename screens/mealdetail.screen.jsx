import {
	View,
	Image,
	Text,
	StyleSheet,
	ScrollView,
	Button,
} from "react-native";
import { useLayoutEffect } from "react";
import MealDetail from "../components/mealdetail.component";
import Subtitle from "../components/MealDetail/subtitle.component";
import List from "../components/MealDetail/list.component";
import IconButton from "../components/iconbutton.component";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
	const mealId = route.params.mealId;
	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	const headerButtonPressHandler = () => {
		console.log("pressed");
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					onPress={headerButtonPressHandler}
					icon="star"
					color="white"
				/>
			),
		});
	}, [navigation, headerButtonPressHandler]);
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
