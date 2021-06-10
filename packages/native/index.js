import { AppRegistry, Platform } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';

// Here, we require "intl", which is used in @lingui/macro, but not available in Hermes (used for Android)
if (Platform.OS === 'android') {
  global.Intl = require('intl');
  require('intl/locale-data/jsonp/fr.js');
  require('intl/locale-data/jsonp/en.js');
  // add more locales
}

AppRegistry.registerComponent(appName, () => App);
