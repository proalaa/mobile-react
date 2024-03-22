import React, { useState } from "react";
import { View, Text, Image } from "react-native";

import styles from "./welcome.style";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native-web";
import { SIZES, icons } from "../../../constants";
import { useRouter } from "expo-router";

const jobTypes = ["Full-time", "Part-Time", "Contractor"];

const Welcome = () => {
  const [inputValue, setInputValue] = useState("Full-time");

  const [activeJobType, setActiveJobType] = useState(null);

  const router = useRouter();
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
            onChange={(value) => {
              setInputValue(value.value);
            }}
            placeholder="what are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode={"contain"}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
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
