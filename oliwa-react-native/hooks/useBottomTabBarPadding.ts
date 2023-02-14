import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export default function useBottomTabBarPadding() {
  const tabBarHeight = useBottomTabBarHeight();
  return tabBarHeight + 20;
}
