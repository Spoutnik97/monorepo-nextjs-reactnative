import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { CodePushButton } from './components/CodePushButton';
import { CrashTestButton } from './components/CrashTestButton';
import { ChangeLanguage } from './components/ChangeLanguage';
import { env } from '../../environment';
import { RootStackParamList } from '../../navigation';
import { useLingui } from '@lingui/react';
import { t } from '@lingui/macro';

type CheatCodesNavigationProp = StackNavigationProp<RootStackParamList, 'CheatCodes'>;

type Props = {
  navigation: CheatCodesNavigationProp;
};
export const CheatCodes: FunctionComponent<Props> = ({ navigation }) => {
  const { i18n } = useLingui();
  return (
    <View>
      <CrashTestButton />
      <ChangeLanguage />
      {env.FEATURE_FLAG_CODE_PUSH && <CodePushButton />}
      {/* @storybook */}
      <Button
        onPress={() => navigation.navigate('Storybook')}
        title={i18n._(
          t({
            id: `Go to storybook`,
            comment: 'Title of the button to go to storybook',
          })
        )}
      />
    </View>
  );
};
