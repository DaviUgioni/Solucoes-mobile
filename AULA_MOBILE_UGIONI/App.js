import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { createStackNavigator } from "@react-navigation/stack"; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from "./Screens/Login";
import Home from "./Screens/Home";
import { Pessoas } from "./Screens/Pessoas"; 
import Async from "./Screens/Async";

const Stack = createStackNavigator();

function TabNav() {
  const Tab = createBottomTabNavigator(); 
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pessoas" component={Pessoas} />
      <Tab.Screen name="Async" component={Async}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={TabNav} />
        <Stack.Screen name="Pessoas" component={TabNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}