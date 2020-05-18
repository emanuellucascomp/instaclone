import React, { Fragment, useState } from 'react';
import {
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View
} from "react-native";

const largura = Dimensions.get("screen").width;

const Photo = () => {
    return (
        <Fragment>
            <Image
                source={require("../../../res/img/k2.jpg")}
                style={style.image}
            />
            <Image 
                source={require("../../../res/img/s2.png")}
                style={style.hearth}
            />
            <Text style={style.description}>A mulher mais linda do mundo</Text>
        </Fragment>
    )
};


const style = StyleSheet.create({
  image:{
    width:largura,
  },
  hearth: {
    width: 25,
    height: 25,
    margin: 5,  
  },
  description : {
    marginLeft: 5,
  },
})

export default Photo;
