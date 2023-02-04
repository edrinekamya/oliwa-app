import { memo } from "react";
import { FlatList } from "react-native";
import { View } from "../../../components/Themed";
import StatusListItem from "./StatusListItem";

function StatusList() {
  const data = Array(20).fill("");
  const renderItem = ({ item }: { item: string }) => (
    <StatusListItem userID={item} />
  );
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        data={data}
        horizontal
      />
    </View>
  );
}

export default memo(StatusList);
