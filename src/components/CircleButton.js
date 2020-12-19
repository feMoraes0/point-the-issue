import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const CircleButton = ({children, onPress, location, bgColour}) => {
  const buttonPosition = () => {
    if (location === 'top-left') {
      return {top: 10, left: 10};
    }
    if (location === 'top-right') {
      return {top: 10, right: 10};
    }
    if (location === 'bottom-right') {
      return {top: 10, right: 10};
    }
    return {bottom: 10, right: 10};
  };

  const backgroundColour = () => {
    return bgColour ? bgColour : '#292830';
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => onPress()}
        style={[
          styles.button,
          buttonPosition(),
          {backgroundColor: backgroundColour()},
        ]}>
        {children}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    zIndex: 3,
    height: 53,
    width: 53,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircleButton;
