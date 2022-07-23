import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./screens/category.screen";
import MealsOverviewScreen from "./screens/mealsoverview.screen";
import MealDetailScreen from "./screens/mealdetail.screen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: { backgroundColor: "#351401" },
						headerTintColor: "white",
						contentStyle: { backgroundColor: "#3f2f25" },
					}}>
					<Stack.Screen
						name="Categories"
						component={CategoryScreen}
						options={{
							title: "All Categories",
						}}
					/>
					<Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
					<Stack.Screen name="MealDetail" component={MealDetailScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
