import { ViewProps } from "react-native";
import { View } from "../components/Themed";
import { memo } from "react";

function Row(props: ViewProps) {
  const { style, ...otherProps } = props;
  return (
    <View
      style={[{ flexDirection: "row", alignItems: "center" }, style]}
      {...otherProps}
    />
  );
}

export default Row;
