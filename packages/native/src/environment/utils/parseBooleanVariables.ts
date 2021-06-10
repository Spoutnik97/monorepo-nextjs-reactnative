import { NativeConfig } from '@bam.tech/react-native-config';
import { GenericEnvironment } from '..';

export const parseBooleanVariables = (config: NativeConfig): GenericEnvironment => {
  const configWithActualBooleans = { ...config } as GenericEnvironment;

  Object.keys(config).map(key => {
    if (config[key] === 'true') {
      configWithActualBooleans[key] = true;
    } else if (config[key] === 'false') {
      configWithActualBooleans[key] = false;
    }
  });

  return configWithActualBooleans;
};
