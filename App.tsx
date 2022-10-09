import { StyleSheet, Text, View } from "react-native";

import Home from "./src/pages/Home";

export default function App() {
	return (
		<View style={styles.container}>
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#252323",
		alignItems: "flex-start",
		justifyContent: "center",
		flexDirection: "row",
	},
});
