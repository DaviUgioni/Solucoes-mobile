import {View, Image , StyleSheet} from 'react-native';

export default function Imagem(){
    return(
        <View style={styles.view_image}>
            <Image style={styles.Image} source={require('../source/max.jpg')}/>
            <Image style={styles.Image} source={require('../source/alonsoo.webp')}/>
            <Image style={styles.Image} source={require('../source/max.jpg')}/>
            <Image style={styles.Image} source={require('../source/alonsoo.webp')}/>
            <Image style={styles.Image} source={require('../source/max.jpg')}/>
            <Image style={styles.Image} source={require('../source/alonsoo.webp')}/>
        </View>
    )
}

const styles = StyleSheet.create({
  Image:{
    width: 150,
    height: 200,
  },
  view_image:{
    flexDirection: 'row',
    alignContent: 'space-around',
    gap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})