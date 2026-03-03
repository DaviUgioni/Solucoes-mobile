import {View, Text, Image} from 'react-native';

export function Person(){
    return(
        <View>
            <Text>Meu componente pessoa</Text>
        </View>
    )
}



export function Davi(){
    return(
        <view>

            <text>Meu primeiro componente sozinho</text>
            <Image source={require("../source/jair.jpg")} />
        </view>
    )
}


export default function Profile(){
    return(
        <View> 
            <Text>Meu primeiro componente </Text> 
        </View>
    )
}