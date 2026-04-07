
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import { Pessoas } from "./Screens/Pessoas";


export default function App(){
  const Stack = createStackNavigator();

  return(

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pessoas" component={Pessoas}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Login" component={Login}/>
         
        </Stack.Navigator>
      </NavigationContainer>
 
  )
}