import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: SIZES.xSmall,
  },
  logoBox: {
    shadowColor: COLORS.gray2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    borderRadius: SIZES.large,
    padding: SIZES.xSmall,
  },
  logo: {
    width: 80,
    height: 80,
  },
  infoBox: {
    textAlign: "center",
    alignItems: "center",
    gap: SIZES.xSmall,
  },
  jobTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
  },
  employerName: { fontWeight: "500" },
  employerBox: {
    flexDirection: "row",
    fontSize: SIZES.small,
    fontFamily: FONT.bold,
  },
  locationBox: {
    flexDirection: "row",
  },
  locationText: {
    fontWeight: "300",
  },
  locationIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.gray,
  },
});

export default styles;
