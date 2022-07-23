import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Image,
	Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "../mealdetail.component";

const MealItem = ({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();
	const selectMealItemHandler = () => {
		navigation.navigate("MealDetail", {
			mealId: id,
		});
	};
	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
				onPress={selectMealItemHandler}>
				<View>
					<View style={styles.innerContainer}>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetail
						duration={duration}
						affordability={affordability}
						complexity={complexity}
					/>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "white",
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.35,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 16,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 18,
		margin: 8,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	details: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});

export default MealItem;
