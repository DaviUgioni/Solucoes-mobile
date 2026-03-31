import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export function Pessoas(){
    return(
        <View style={styles.conteiner}>
            <Card>
            <Image style={styles.foto}
            source={require('../source/alonsoo.webp')} 
            />
            <Text style={styles.txt}>Nome: Davi </Text>
            <Text style={styles.txt}>Idade: 18 </Text>
            <Text style={styles.txt}>Cidade: Críciuma </Text>
            <Text style={styles.txt}>Profissão: Estudante </Text>
             <br/>
            <Image style={styles.foto}
            source={require('../source/max.jpg')} 
            />
            <Text style={styles.txt}>Nome: Guilherme </Text>
            <Text style={styles.txt}>Idade: 18 </Text>
            <Text style={styles.txt}>Cidade: Síderopolis </Text>
            <Text style={styles.txt}>Profissão: Estudante </Text>
             <br/>
            <Image style={styles.foto}
            source={require('../source/vinicius.jpg')} 
            />
            <Text style={styles.txt}>Nome: Vinicius </Text>
            <Text style={styles.txt}>Idade: 18 </Text>
            <Text style={styles.txt}>Cidade: Críciuma </Text>
            <Text style={styles.txt}>Profissão: Estudante </Text>
             <br/>
            <Image style={styles.foto}
            source={require('../source/pedro.jpg')} 
            />
            <br/>
            <Text style={styles.txt}>Nome:Pedro  </Text>
            <Text style={styles.txt}>Idade: 17 </Text>
            <Text style={styles.txt}>Cidade: Críciuma </Text>
            <Text style={styles.txt}>Profissão: Estudante </Text>

            <Image style={styles.foto}
            source={require('../source/alonsoo.webp')} 
            />
            <Text>Nome: Clovis </Text>
            <Text>Idade: 24 </Text>
            <Text>Cidade: Críciuma </Text>
            <Text>Profissão: Uber </Text>


            <Image style={styles.foto}
            source={require('../source/alonsoo.webp')} 
            />
            <Text>Nome: Julia </Text>
            <Text>Idade: 25 </Text>
            <Text>Cidade: Forquilinha </Text>
            <Text>Profissão: Padeira </Text>

            <Image style={styles.foto}
            source={require('../source/alonsoo.webp')} 
            />
            <Text>Nome: João </Text>
            <Text>Idade: 24 </Text>
            <Text>Cidade: Críciuma </Text>
            <Text>Profissão: Uber </Text>

            </Card>
        </View>




    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff'
    },

    foto:{
        width: 100,
        height: 100,
        borderRadius: 30,      
        marginBottom: 28,
        borderWidth: 3,
        borderColor: '#fff',
        margin: "auto"
    },

    txt:{
        margin: "auto"
    }
})