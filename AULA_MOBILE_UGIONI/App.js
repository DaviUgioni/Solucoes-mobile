import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { drivers } from './data/drivers';
import { useState } from 'react';

export default function App() {

  const [index, setIndex] = useState(0);

  const proximoPiloto = () => {
    if (index < drivers.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const piloto = drivers[index];

  // ⭐ cria as estrelas automaticamente
  const renderStars = (num) => {
    return '⭐'.repeat(num);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        
        <Card.Cover 
          source={{ uri: piloto.image }} 
          style={styles.image}
        />

        <Card.Content>
          <Text style={styles.title}>{piloto.name}</Text>
          <Text>{piloto.description}</Text>

          <Text style={styles.stars}>
            {renderStars(piloto.stars)}
          </Text>

        </Card.Content>

        <Card.Actions>
          <Button onPress={proximoPiloto}>
            Próximo piloto
          </Button>
        </Card.Actions>

      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
  },
  image: {
    height: 200,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  stars: {
    marginTop: 10,
    fontSize: 18,
  },
});