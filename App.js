import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {MapView} from '@react-native-mapbox-gl/maps';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <MapView
          centerCoordinate={[-49.6446024, -27.2108001]}
          preferedFramerPerSecond={60}
          style={styles.container}
          showUserLocation
          zoom={3}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
