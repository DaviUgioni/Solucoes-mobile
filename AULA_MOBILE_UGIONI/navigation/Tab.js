import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

import Login from "./Screens/Login";
import Home from "./Screens/Home";
import { Pessoas } from "./Screens/Pessoas"; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "#0b1050ff",
          tabBarActiveTintColor: "#ffffffff",
          tabBarInactiveTintColor: "#000000ff",
          tabBarInactiveBackgroundColor: "#ffffffff",
          headerStyle:{
            backgroundColor: "#c00707ff"
          },
          headerTintColor: "#ffffffff",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Login" 
          component={Login} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="login" size={size} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home-outline" size={size} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name="Pessoas" 
          component={Pessoas} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group-outline" size={size} color={color} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}