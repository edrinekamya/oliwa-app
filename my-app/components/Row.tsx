import { ViewProps } from "react-native";
import { View } from "../components/Themed";

export function Row(props: ViewProps) {
  const { style, ...otherProps } = props;
  return (
    <View
      style={[{ flexDirection: "row", alignItems: "center" }, style]}
      {...otherProps}
    />
  );
}
