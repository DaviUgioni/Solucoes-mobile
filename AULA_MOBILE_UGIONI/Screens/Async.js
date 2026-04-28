import { useState, useEffect } from 'react';
import { View, Text, TextInput , StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Async() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [nomeSalvo, setNomeSalvo] = useState('');
    const [senhaSalva, setSenhaSalva] = useState('');

    const SalvarDados = async () => {
        try {
            const dados = {
                nome: nome,
                senha: senha
            };

            await AsyncStorage.setItem('@usuario', JSON.stringify(dados));

            alert('Dados salvos');
            setNome('');
            setSenha('');
            carregarDados();
        } catch (e) {
            console.log(e);
        }
    };

    const carregarDados = async () => {
        try {
            const valor = await AsyncStorage.getItem('@usuario');

            if (valor !== null) {
                const dados = JSON.parse(valor);
                setNomeSalvo(dados.nome);
                setSenhaSalva(dados.senha);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        carregarDados();
    }, []);

    return (
        <View style={styles.container} >
            <TextInput
            style={styles.textInput} 
                placeholder='Digite nome'
                value={nome}
                onChangeText={setNome}
            />

            <TextInput
            style={styles.textInput} 
                placeholder='Digite senha'
                value={senha}
                onChangeText={setSenha}
             
            />

            <Button mode="contained" onPress={SalvarDados}>
                Salvar Pessoa
            </Button>

            <Text style={styles.texto}>Nome salvo: {nomeSalvo}</Text>
            <Text style={styles.texto}>Senha salva: {senhaSalva}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:"#ac3131ff",
    alignItems:'center'
},

textInput:{
        width: '80%',
        borderColor: 'rgba(0, 0, 0, 0.6)',
        borderWidth: 2,
        padding: 10,
        color: '#000',
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: '#ffffffff',
    },

    texto:{
        fontSize: 30,
        color: '#ffffffff',
        fontWeight: 'bold',
        marginBottom: 20,
    }

})





