import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
'react-native';

import Profile, { Davi } from './components/Profile';
import { Person } from './components/Profile';




export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD</Text>
      <StatusBar style="auto" />
      <Profile></Profile>
      <Person></Person>
      <Davi></Davi>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696464ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
