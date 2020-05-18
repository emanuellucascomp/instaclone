import React, { Fragment, useState, useEffect } from 'react';
import {
  ScrollView,
  FlatList
} from "react-native";
import Header from './src/components/header';
import Photo from './src/components/photo';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const readPhotos = async () => {
      const photosHTTP = await fetch("http://192.168.0.104:3030/feed");
      const photosJSON = await photosHTTP.json();
      setPhotos(photosJSON)
    }
    readPhotos();
  }, [])

  return (
    <ScrollView>
      <FlatList
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item })=>
          <Fragment>
            <Header 
              name={item.userName}
              urlImage={item.userURL}
            />
            <Photo />
          </Fragment>
        }
      />
    </ScrollView>
  )
};

export default App;
