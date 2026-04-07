import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function Login({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Login</Text>

            <Image 
                style={styles.foto}
                source={require('../source/max.jpg')}
            />

            <TextInput 
                style={styles.textInput} 
                placeholder="Usuario" 
                placeholderTextColor={"#612712"}
            />

            <TextInput 
                style={styles.textInput} 
                placeholder="Senha" 
                placeholderTextColor={"#110501ff"} 
                secureTextEntry
            />

            <TouchableOpacity 
                style={styles.botao}
                onPress={() => navigation.navigate("Home")} // 👈 AQUI
            >
                <Text style={styles.botaoText}>Entrar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6d6e6dff'
    },
    texto:{
        fontSize: 30,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    foto:{
        width: 120,
        height: 120,
        borderRadius: 45,      
        marginBottom: 28,
        borderWidth: 3,
        borderColor: '#fff',
    },
    textInput:{
        width: '80%',
        borderColor: '#5779',
        borderWidth: 2,
        padding: 10,
        color: '#000',
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    botao:{
        width: '80%',
        backgroundColor: '#0e0d0dff',   
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
    botaoText:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})