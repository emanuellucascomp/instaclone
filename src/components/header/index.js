import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  View,
} from "react-native";

const Header = ({ name, urlImage }) => {
    return (
        <View style={style.header}>
            <Image
                source={require("../../../res/img/k3.jpg")}
                style={style.fotoUsuario}
            /> 
            <Text>kszmr</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    fotoUsuario:{
        width: 40,
        height: 40,
        margin: 10,
        borderRadius: 30,
    }
  })

export default Header;