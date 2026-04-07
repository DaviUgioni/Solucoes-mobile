import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';

export function Pessoas({ navigation }){
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Card style={styles.card}>

                <Image style={styles.foto} source={require('../source/alonsoo.webp')} />
                <Text style={styles.txt}>Nome: Davi</Text>
                <Text style={styles.txt}>Idade: 18</Text>
                <Text style={styles.txt}>Cidade: Criciúma</Text>
                <Text style={styles.txt}>Profissão: Estudante</Text>

                <View style={styles.espaco} />

                <Image style={styles.foto} source={require('../source/max.jpg')} />
                <Text style={styles.txt}>Nome: Guilherme</Text>
                <Text style={styles.txt}>Idade: 18</Text>
                <Text style={styles.txt}>Cidade: Siderópolis</Text>
                <Text style={styles.txt}>Profissão: Estudante</Text>

                <View style={styles.espaco} />

                <Image style={styles.foto} source={require('../source/vinicius.jpg')} />
                <Text style={styles.txt}>Nome: Vinicius</Text>
                <Text style={styles.txt}>Idade: 18</Text>
                <Text style={styles.txt}>Cidade: Criciúma</Text>
                <Text style={styles.txt}>Profissão: Estudante</Text>

                <View style={styles.espaco} />

                <Image style={styles.foto} source={require('../source/pedro.jpg')} />
                <Text style={styles.txt}>Nome: Pedro</Text>
                <Text style={styles.txt}>Idade: 17</Text>
                <Text style={styles.txt}>Cidade: Criciúma</Text>
                <Text style={styles.txt}>Profissão: Estudante</Text>

                <View style={styles.espaco} />

                <Image style={styles.foto} source={require('../source/alonsoo.webp')} />
                <Text style={styles.txt}>Nome: Clovis</Text>
                <Text style={styles.txt}>Idade: 24</Text>
                <Text style={styles.txt}>Cidade: Criciúma</Text>
                <Text style={styles.txt}>Profissão: Uber</Text>

                <View style={styles.espaco} />

                <Image style={styles.foto} source={require('../source/alonsoo.webp')} />
                <Text style={styles.txt}>Nome: Julia</Text>
                <Text style={styles.txt}>Idade: 25</Text>
                <Text style={styles.txt}>Cidade: Forquilinha</Text>
                <Text style={styles.txt}>Profissão: Padeira</Text>

                <View style={styles.espaco} />

                <Image style={styles.foto} source={require('../source/alonsoo.webp')} />
                <Text style={styles.txt}>Nome: João</Text>
                <Text style={styles.txt}>Idade: 24</Text>
                <Text style={styles.txt}>Cidade: Criciúma</Text>
                <Text style={styles.txt}>Profissão: Uber</Text>

               

                

            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },

    card:{
        width: '100%',
        padding: 15
    },

    foto:{
        width: 100,
        height: 100,
        borderRadius: 30,
        marginBottom: 10,
        alignSelf: 'center'
    },

    txt:{
        textAlign: 'center',
        marginBottom: 5
    },

    espaco:{
        height: 20
    }
})