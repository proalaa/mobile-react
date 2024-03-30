import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";

import styles from "./welcome.style";
import { FlatList, TextInput } from "react-native";
import { SIZES, icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobTypes = ["Full-time", "Part-Time", "Contractor"];

const Welcome = () => {
  const [inputValue, setInputValue] = useState("");

  const [activeJobType, setActiveJobType] = useState(null);

  const router = useRouter();

  const goToSearchPage = () => {
    debugger;
    if (!inputValue) return;
    router.push(`search/${inputValue}`);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.username}>Welcome Aladdin</Text>
        <Text style={styles.welcomeMessage}>Find your dream job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={inputValue}
            onChangeText={(value) => {
              setInputValue(value);
            }}
            placeholder="what are you looking for?"
          />
        </View>

        <Pressable style={styles.searchBtn} onPress={goToSearchPage}>
          <Image
            source={icons.search}
            resizeMode={"contain"}
            style={styles.searchBtnImage}
          />
        </Pressable>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <Pressable
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
