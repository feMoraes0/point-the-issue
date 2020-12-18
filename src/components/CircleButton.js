import React from 'react';
import {StyleSheet, View} from 'react-native';

const CircleButton = (props) => {
  return (
    <>
      <View style={styles.circleButton}>{props.children}</View>
    </>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 3,
    height: 53,
    width: 53,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});

export default CircleButton;
