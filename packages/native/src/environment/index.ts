import Config from 'react-native-config';
import { parseBooleanVariables } from './utils/parseBooleanVariables';

export interface GenericEnvironment {
  [key: string]: string | boolean;
}

export interface Environment extends GenericEnvironment {
  ENV: string;
  API_ENDPOINT: string;
  WEBSOCKET_ENDPOINT: string;
  FEATURE_FLAG_CHEAT_CODES: boolean;
  FEATURE_FLAG_CODE_PUSH: boolean;
  FEATURE_FLAG_CODE_PUSH_MANUAL: boolean;
}

export const env = parseBooleanVariables(Config) as Environment;
