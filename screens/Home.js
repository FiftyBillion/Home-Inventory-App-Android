import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabBar, Tab, Layout } from "@ui-kitten/components";
import All from "./All";
import ByLocation from "./ByLocation";

const { Navigator, Screen } = createMaterialTopTabNavigator();
const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
    style={{
      height: 60,
      paddingTop: 20,
      marginTop: 8,
    }}
  >
    <Tab title="ALL" />
    <Tab title="BY LOCATION" />
  </TabBar>
);
const TabNavigator = () => (
  <Navigator tabBar={(props) => <TopTabBar {...props} />}>
    <Screen name="All" component={All} />
    <Screen name="ByLocation" component={ByLocation} />
  </Navigator>
);

export default function HomeScreen() {
  return (
    <Layout style={{ flex: 1 }}>
      <TabNavigator />
    </Layout>
  );
}
