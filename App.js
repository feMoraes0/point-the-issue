import React from 'react';
import {StatusBar} from 'react-native';
import Map from './src/screens/Map';
import Menu from './src/screens/Menu';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/* <Map /> */}
      <Menu />
    </>
  );
};

export default App;
