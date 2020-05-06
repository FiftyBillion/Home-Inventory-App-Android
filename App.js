import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { default as theme } from "./custom-theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./components/Navigation";

export default function App() {
  const [data, setData] = useState([
    { itemName: "Egg", quantity: "12", unit: "units" },
  ]);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
}

// import React from "react";
// import Home from "./screens/Home";
// import ShoppingList from "./screens/ShoppingList";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Header from "./components/Header";

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Header />
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === "Home") {
//               iconName = focused ? "home-variant" : "home-outline";
//             } else if (route.name === "ShoppingList") {
//               iconName = focused ? "cart" : "cart-outline";
//             }

//             return (
//               <MaterialCommunityIcons
//                 name={iconName}
//                 size={size}
//                 color={color}
//               />
//             );
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: "#ba0019",
//           inactiveTintColor: "#aaa",
//           style: {
//             backgroundColor: "#000",
//             borderTopColor: "red",
//             borderTopWidth: 1,
//             paddingTop: 10,
//           },
//         }}
//       >
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="ShoppingList" component={ShoppingList} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
