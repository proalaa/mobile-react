import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, SIZES, icons, images } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import { useState } from "react";
export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              handlePress={() => {}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension={"69%"} />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
