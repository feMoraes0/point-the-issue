import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MapboxGL, {
  MapView,
  Camera,
  PointAnnotation,
} from '@react-native-mapbox-gl/maps';
import CircleButton from '../components/CircleButton';
import Plus from '../../assets/icons/plus.svg';
import Menu from '../../assets/icons/menu.svg';

import Geolocation from '@react-native-community/geolocation';

const Map = () => {
  const [userCoordenates, setUserCoordenates] = useState([0, 0]);

  const recenterOnUser = () => {
    Geolocation.getCurrentPosition((info) => {
      console.warn(info.coords);
      const latitude = info.coords.latitude;
      const longitude = info.coords.longitude;
      setUserCoordenates([longitude, latitude]);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        centerCoordinate={userCoordenates}
        preferedFramerPerSecond={60}
        style={styles.container}
        scrollEnabled={false}
        styleURL={MapboxGL.StyleURL.Dark}
        onWillStartRenderingMap={() => recenterOnUser()}>
        <Camera
          centerCoordinate={userCoordenates}
          zoomLevel={17}
          minZoomLevel={15}
          maxZoomLevel={18}
          animationMode={'moveTo'}
          animationDuration={6000}
        />
        <PointAnnotation
          id="user_pin"
          selected={false}
          coordinate={userCoordenates}>
          <View style={styles.point} />
        </PointAnnotation>
      </MapView>
      <CircleButton
        location="top-left"
        bgColour="transparent"
        onPress={() => {}}>
        <Menu color="#F7F7F7" />
      </CircleButton>
      <CircleButton onPress={() => {}} bgColour="transparent">
        <Plus stroke={'#F7F7F7'} />
      </CircleButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  point: {
    width: 15,
    height: 15,
    borderRadius: 100,
    backgroundColor: '#FD4949',
  },
});

export default Map;
