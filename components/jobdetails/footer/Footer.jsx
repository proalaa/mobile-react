import React from "react";
import { View, Text, Pressable, Image, Linking } from "react-native";

import styles from "./footer.style";
import Icons from "../../../constants/icons";
import { useRouter } from "expo-router";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.likeBtn}>
        <Image style={styles.likeBtnImage} source={Icons.heart} />
      </Pressable>

      <Pressable style={styles.applyBtn} onPress={() => Linking.openURL(url)}>
        <Text style={styles.applyBtnText}>Apply for the job</Text>
      </Pressable>
    </View>
  );
};

export default Footer;
