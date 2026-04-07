import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./Screens/Login";
import Home from "./Screens/Home";
import { Pessoas } from "./Screens/Pessoas";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#585252ff', // topo preto
          },
          headerTintColor: '#fff',   // texto e ícones brancos
          drawerStyle: {
            backgroundColor: '#353535ff', // menu lateral preto
          },
          drawerLabelStyle: {
            color: '#fff',           // texto do menu branco
          },
          drawerActiveBackgroundColor: '#222222ff', // item ativo mais escuro
          drawerActiveTintColor: '#fff',       // texto do item ativo branco
        }}
      >
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Pessoas" component={Pessoas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}