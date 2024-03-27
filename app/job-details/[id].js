import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  Company,
  JobFooter,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import { useState } from "react";
import useFetch from "../../hook/useFetch";
import About from "../../components/jobdetails/about/About";
import { ActivityIndicator, View } from "react-native";
import { JobTabs } from "../../components";
const tabs = ["Description", "Qualifications", "Responsibilities"];
const jobDetails = () => {
  const { id } = useLocalSearchParams();

  const { data, error, isLoading } = useFetch("job-details", {
    job_id: id,
    extended_publisher_details: false,
  });

  const [activeTab, setActiveTab] = useState("Description");

  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  const renderJobTab = () => {
    switch (activeTab) {
      case "Description": {
        return <About info={data[0]?.job_description ?? ["N/A"]} />;
      }
      case "Qualifications": {
        return (
          <Specifics
            title={activeTab}
            points={data[0]?.job_highlights?.Qualifications ?? ["N/A"]}
          />
        );
      }
      case "Responsibilities": {
        return (
          <Specifics
            title={activeTab}
            points={data[0]?.job_highlights?.Responsibilities ?? ["N/A"]}
          />
        );
      }
    }
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension={"50%"}
              handlePress={goHome}
            />
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
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {renderJobTab()}
          </View>
        )}
      </ScrollView>
      <JobFooter
        url={
          data[0]?.job_google_link ?? "https://careers.google.com/jobs/results"
        }
      />
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
    paddingHorizontal: SIZES.medium,
  },

  stackHeaderStyle: {
    backgroundColor: COLORS.lightWhite,
  },
});

export default jobDetails;
