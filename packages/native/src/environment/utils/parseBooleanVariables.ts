import { NativeConfig } from 'react-native-config';
import { GenericEnvironment } from '..';

export const parseBooleanVariables = (config: NativeConfig): GenericEnvironment => {
  const configWithActualBooleans: { [name: string]: string | boolean } = { ...config };

  Object.keys(config).map(key => {
    if (config[key] === 'true') {
      configWithActualBooleans[key] = true;
    } else if (config[key] === 'false') {
      configWithActualBooleans[key] = false;
    }
  });

  return configWithActualBooleans as unknown as GenericEnvironment;
};
