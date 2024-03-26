import {
  Stack,
  Tabs,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Company, ScreenHeaderBtn } from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import About from "../../components/jobdetails/about/About";
import { ActivityIndicator, View } from "react-native-web";

const jobDetails = () => {
  const { id } = useLocalSearchParams();

  const { data, error, isLoading } = useFetch("job-details", {
    job_id: id,
    extended_publisher_details: false,
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.left} dimension={"50%"} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension={"50%"} />
          ),

          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: styles.stackHeaderStyle,
        }}
      />

      <ScrollView>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          <View style={styles.contentContainer}>
            <Company
              title={data[0]?.job_title}
              image={data[0]?.employer_logo}
              city={data[0]?.job_city}
              country={data[0]?.job_country}
              employerName={data[0]?.employer_name}
            />
            <About />
            {/* <Tabs /> */}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
  },

  stackHeaderStyle: {
    backgroundColor: COLORS.lightWhite,
  },
});

export default jobDetails;
