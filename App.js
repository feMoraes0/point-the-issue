import React from 'react';
import {Animated, StatusBar, StyleSheet} from 'react-native';
import Map from './src/screens/Map';
import Menu from './src/screens/Menu';

const App = () => {
  const duration = 500;
  const verticalPosition = new Animated.Value(0);
  const horizontalPosition = new Animated.Value(0);
  const scale = new Animated.Value(1);

  const openMenu = () => {
    Animated.parallel([
      Animated.timing(verticalPosition, {
        toValue: 5.0,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(horizontalPosition, {
        toValue: 140.0,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.85,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const closeMenu = () => {
    Animated.parallel([
      Animated.timing(verticalPosition, {
        toValue: 0.0,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(horizontalPosition, {
        toValue: 0.0,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Menu closeMenu={() => closeMenu()} />
      <Animated.View
        style={[
          styles.contentContainer,
          {
            transform: [
              {
                translateY: verticalPosition,
              },
              {
                translateX: horizontalPosition,
              },
              {
                scale: scale,
              },
            ],
          },
        ]}>
        <Map openMenu={() => openMenu()} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default App;
