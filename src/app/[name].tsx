import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function ImageScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "600" }}>
        Image Details for: {name}
      </Text>

      <Link href={"/"}>Home</Link>
    </View>
  );
}
