import { useLayoutEffect } from "react";
import MealList from "../components/MealList/meallist.component";
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
	const catId = route.params.categoryId;
	const categoryTitle = CATEGORIES.find(
		(category) => category.id === catId
	).title;

	const displayedMeals = MEALS.filter(
		(mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
	);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);
	return <MealList items={displayedMeals} />;
};

export default MealsOverviewScreen;
