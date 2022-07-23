import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPress }) => {
	return (
		<View style={styles.outerContainer}>
			<Pressable
				onPress={onPress}
				android_ripple={{ color: "white" }}
				style={({ pressed }) => pressed && styles.pressed}>
				<Ionicons name={icon} size={24} color={color} />
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
});

export default IconButton;
