import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { createStackNavigator } from "@react-navigation/stack"; 

import Login from "./Screens/Login";
import Home from "./Screens/Home";
import { Pessoas } from "./Screens/Pessoas"; 

const Stack = createStackNavigator();

function TabNav() {
  const Tab = createBottomTabNavigator(); // ✅ corrigido
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pessoas" component={Pessoas} />
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