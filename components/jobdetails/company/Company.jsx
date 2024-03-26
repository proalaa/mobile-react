import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { checkImageURL } from "../../../utils";
import Icons from "../../../constants/icons";

const Company = ({ image, title, employerName, country, city }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: checkImageURL(image)
              ? image
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode={"contain"}
          style={styles.logo}
        />
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.jobTitle}>{title}</Text>
        <View style={styles.employerBox}>
          <Text style={styles.employerName}>{employerName} / </Text>
          <View style={styles.locationBox}>
            <Image
              source={Icons.location}
              resizeMode={"contain"}
              style={styles.locationIcon}
            />

            <Text style={styles.locationText}>
              {country} {city ? `,${city}` : ""}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Company;
