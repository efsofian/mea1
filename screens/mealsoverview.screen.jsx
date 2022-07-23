import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import MealItem from "../components/mealitem.component";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
	const catId = route.params.categoryId;
	const categoryTitle = CATEGORIES.find(
		(category) => category.id === catId
	).title;

	const displayedMeals = MEALS.filter(
		(mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
	);

	const renderMealItem = (itemData) => {
		const item = itemData.item;
		const mealItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		};
		return <MealItem {...mealItemProps} />;
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);
	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
export default MealsOverviewScreen;
