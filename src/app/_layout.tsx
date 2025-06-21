import { Slot, Stack, Tabs } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ backgroundColor: "lightgreen", flex: 1 }}>
      {/* header */}
      <Tabs />
      {/* footer  */}
    </View>
  );
}
