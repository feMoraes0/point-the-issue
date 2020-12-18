import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import MapboxGL, {
  MapView,
  Camera,
  PointAnnotation,
} from '@react-native-mapbox-gl/maps';
import CircleButton from '../components/CircleButton';
import Locate from '../../assets/icons/locate.svg';

const Map = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <MapView
          preferedFramerPerSecond={60}
          style={styles.container}
          styleURL={MapboxGL.StyleURL.Dark}>
          <Camera
            centerCoordinate={[-49.6446024, -27.2108001]}
            zoomLevel={15}
            minZoomLevel={10}
            maxZoomLevel={15}
          />
          <PointAnnotation
            id="user_pin"
            selected={false}
            coordinate={[-49.6446024, -27.2108001]}>
            <View style={styles.point} />
          </PointAnnotation>
        </MapView>
        <CircleButton>
          <Locate stroke={'red'} />
        </CircleButton>
      </SafeAreaView>
    </>
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
