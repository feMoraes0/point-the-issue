import React from 'react';
import {StatusBar} from 'react-native';
import Map from './src/screens/Map';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Map />
    </>
  );
};

export default App;
