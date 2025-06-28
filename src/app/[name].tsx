import { useLocalSearchParams, Stack, router } from "expo-router";
import { Image, View } from "react-native";
import * as FileSystem from "expo-file-system";
import { MaterialIcons } from "@expo/vector-icons";
import { getMediaType } from "../utils/media";
import { ResizeMode, Video } from "expo-av";
import * as MediaLibrary from "expo-media-library";

export default function ImageScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const fullUri = (FileSystem.documentDirectory || "") + (name || "");
  const type = getMediaType(fullUri);

  const onDelete = async () => {
    await FileSystem.deleteAsync(fullUri);
    router.back();
  };

  const onSave = async () => {
    // save to media library
    if (permissionResponse?.status != "granted") {
      await requestPermission();
    }
    const asset = await MediaLibrary.createAssetAsync(fullUri);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack.Screen
        options={{
          title: "Media",
          headerRight: () => (
            <View style={{ flexDirection: "row", gap: 5 }}>
              <MaterialIcons
                onPress={onDelete}
                name="delete"
                size={26}
                color="crimson"
              />

              <MaterialIcons
                onPress={onSave}
                name="save"
                size={26}
                color="dimgray"
              />
            </View>
          ),
        }}
      />
      {type === "image" && (
        <Image
          source={{ uri: fullUri }}
          style={{ width: "100%", height: "100%" }}
        />
      )}

      {type === "video" && (
        <Video
          source={{ uri: fullUri }}
          style={{ width: "100%", height: "100%" }}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
          useNativeControls
        />
      )}
    </View>
  );
}
