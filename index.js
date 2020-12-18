/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {MAPBOX_KEY} from '@env';

MapboxGL.setAccessToken(MAPBOX_KEY);

AppRegistry.registerComponent(appName, () => App);
