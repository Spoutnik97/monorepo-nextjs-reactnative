/* eslint-disable no-undef */
import 'cross-fetch/polyfill';
// needed to activate i18n object in jest environment
import '../src/lib/i18n';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
