import { Text, View, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Hello jeet!</Text>

    <Link href={'/image-1'}>Image 1</Link>
    <Link href={'/image-2'}>Image 2</Link>
    <Link href={'/image-3'}>Image 3</Link>

      <Link href={"/camera"} asChild>
        <Pressable style={styles.floatingButton}>
          <MaterialIcons name="photo-camera" size={30} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: "royalblue",
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    bottom: 10,
    right: 10,
  },

});
