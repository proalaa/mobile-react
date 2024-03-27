import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <Pressable
            style={styles.btn(item, activeTab)}
            onPress={() => setActiveTab(item)}
          >
            <Text style={styles.btnText(item, activeTab)}>{item}</Text>
          </Pressable>
        )}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default Tabs;
